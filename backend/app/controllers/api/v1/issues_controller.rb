module Api
    module V1
        class IssuesController < ApplicationController
            before_action :authorize_access_request!
            before_action :set_issue, only: [:show, :update, :destroy]
            rescue_from ActiveRecord::RecordNotFound, with: :item_not_found

            # GET /issues
            # Get all issues for a user
            def index
                result = current_user.issues.order(next_issue: :asc)
                output = Array.new
                issue_id_map = {}
                result.each { |item|
                    issue_id_map[item.id] = item.issue_number 
                }
                result.each { |item|
                    output.push({
                        "id": item[:issue_number],
                        "title": item[:title],
                        "description": item[:description],
                        "end_date":  item[:end_date],
                        "category": item[:category],
                        "status":  item[:status],
                        "user_id":  item[:user_id],
                        "created_at":  item[:created_at],
                        "updated_at":  item[:updated_at],
                        "next_issue": issue_id_map[item[:next_issue]]
                    })
                }
                render json: {'issues': output}
            end

            # GET /issues/1
            # Get specific issue
            # Issue also loads associated comments
            def show
                render json: {
                    "id": @issue[:issue_number],
                    "title": @issue[:title],
                    "description": @issue[:description],
                    "end_date":  @issue[:end_date],
                    "category": @issue[:category],
                    "status":  @issue[:status],
                    "user_id":  @issue[:user_id],
                    "created_at":  @issue[:created_at],
                    "updated_at":  @issue[:updated_at],
                    "comments": @issue.comments.all
                }
            end

            # POST /issues 
            # Add issue for a user
            def create
                @issue = current_user.issues.build(issue_params)
                
                issue_counter = IssueCounter.find_by(user_id: current_user.id)
                @issue.issue_number = issue_counter.next_issue_number
                issue_counter.increment!(next_issue_number)

                preceding_issue = Issue.where(next_issue: nil, status: @issue.status, user_id: current_user.id)
                if preceding_issue[0].nil? then 
                    puts "First issue added to the lane."
                else 
                    puts "Issue is not first. Will be added to the list."
                end 
                if @issue.save
                    if !preceding_issue[0].nil? then
                        preceding_issue[0].update(next_issue: @issue.id)
                    end
                    render json: @issue, status: :created
                else
                    render json: @issue.errors, status: :unprocessable_entity
                end
            end

            # PATCH /issues/1
            # Updates the exisiting issue
            def update
                if @issue.update(issue_params)
                    render json: @issue
                else
                    render json: @issue.errors, status: :unprocessable_entity
                end
            end

            # DELETE /issues/1
            # Deletes the issue
            def destroy
                @issue.destroy
                render json: {'message':'Issue is deleted.'}
            end

            private

            # Fetch the issue to do operations on it
            def set_issue
                @issue = current_user.issues.find_by(issue_number: params[:id])
            end

            # Only allow a trusted parameter "white list" through.
            def issue_params
                params.require(:issue).permit(:title, :description, :end_date, :category, :status)
            end
            
            # Send 404 if the item is not found
            def item_not_found
                render json:{error: 'Requested issue is not found!'}, status: :not_found
            end
        end
    end
end
