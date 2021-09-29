module Api
    module V1
        class OrderController < ApplicationController
            before_action :authorize_access_request!
            before_action :set_issue, only: [:show, :update, :destroy]
            rescue_from ActiveRecord::RecordNotFound, with: :item_not_found

           
            # PATCH /i/1
            # Updates the exisiting issue
            def update
                target_next_issue  = issue_params().fetch(:next_issue)
                target_status = issue_params().fetch(:status)
                target_next_issue = nil if target_next_issue == -1

                preceding_issue = current_user.issues.where(next_issue: @issue.id, status: @issue.status)

                # For the old lane
                if preceding_issue.length > 0  then
                    next_issue = nil
                    if !@issue.next_issue.nil? then
                        next_issue = @issue.next_issue
                    end
                    preceding_issue[0].update(next_issue: next_issue)
                end
                
                target = IssueCounter.find_by(user_id: current_user.id, issue_number: target_next_issue, status: target_status)

                destination_preceding_issue = current_user.issues.where(next_issue: target.id, status: target_status)
                
                if destination_preceding_issue.length > 0 then 
                    destination_preceding_issue[0].update(next_issue: @issue.id)
                end

                @issue.update(next_issue: target.id, status: target_status)
                render json: @issue
            end

            private

            # Fetch the issue to do operations on it
            def set_issue
                @issue = current_user.issues.find_by(issue_number: params[:id])
            end

            # Only allow a trusted parameter "white list" through.
            def issue_params
                params.require(:issue).permit(:next_issue, :status)
            end
            
            # Send 404 if the item is not found
            def item_not_found
                render json:{error: 'Requested issue is not found!'}, status: :not_found
            end
        end
    end
end
