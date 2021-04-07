module Api
    module V1
        class IssuesController < ApplicationController
            before_action :authorize_access_request!
            before_action :set_issue, only: [:show, :update, :destroy]
            rescue_from ActiveRecord::RecordNotFound, with: :item_not_found

            # GET /issues
            # Get all issues for a user
            def index
                render json: {'issues': current_user.issues.all}
            end

            # GET /issues/1
            # Get specific issue
            # Issue also loads associated comments
            def show
                render json: {
                    "id": @issue[:id],
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
        
                if @issue.save
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
                @issue = current_user.issues.find(params[:id])
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
