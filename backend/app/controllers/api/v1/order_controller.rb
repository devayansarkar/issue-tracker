module Api
    module V1
        class OrderController < ApplicationController
            before_action :authorize_access_request!
            before_action :set_issue, only: [:show, :update, :destroy]
            rescue_from ActiveRecord::RecordNotFound, with: :item_not_found

           
            # PATCH /i/1
            # Updates the exisiting issue
            def update
                # For the issue's destination lane, find the issue, whose next node is the issue's next node
                # point the issue to the current one, and the current one's points tp the next node
                # In case the current issue's next node is `nil`, it goes to the end and the current's lane's nill points to the current issue
                # In case the current issue is the first, then there is no issue in the lane that points to an issue, until now.
                
                preceding_issue = Issue.where(next_issue: @issue.id, status: @issue.status)
            
                # For the old lane
                if preceding_issue.length > 0  then
                    next_issue = nil
                    if !@issue.next_issue.nil? then
                        next_issue_in_lane = Issue.where(next_issue: @issue.next_issue, status: @issue.status)
                        next_issue = next_issue_in_lane.id
                    end
                    preceding_issue[0].update(next_issue: next_issue)
                end
                
                destination_preceding_issue = Issue.where(next_issue: issue_params().fetch(:next_issue), status: issue_params().fetch(:status))
                next_issue = nil
                
                if destination_preceding_issue.length > 0 then 
                    destination_preceding_issue[0].update(next_issue: @issue.id)
                end

                @issue.update(next_issue: issue_params().fetch(:next_issue), status: issue_params().fetch(:status))
                
                render json: @issue
            end

            private

            # Fetch the issue to do operations on it
            def set_issue
                @issue = current_user.issues.find(params[:id])
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
