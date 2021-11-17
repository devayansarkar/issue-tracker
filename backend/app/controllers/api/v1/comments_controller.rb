module Api
    module V1
        class CommentsController < ApplicationController
            before_action :authorize_access_request!
            before_action :set_comment, only: [:destroy]
            rescue_from ActiveRecord::RecordNotFound, with: :item_not_found

            # POST /comments 
            # Add comment for a user
            def create
                issue = current_user.issues.where(issue_number: comment_params().fetch(:issue_id))
                last_known_comment_count = CommentCounter.find_by(issue_id: issue[0].id)
                comment_number = 1
                if last_known_comment_count.nil? then
                    comment_counter = CommentCounter.create(
                        issue_id:issue[0].id,
                        next_comment_number: 2 
                    )
                    comment_counter.save()
                else
                    comment_number = last_known_comment_count.next_comment_number
                    last_known_comment_count.increment!(:next_comment_number)
                end
                comment = current_user.comments.create(
                    issue_id:issue[0].id,
                    comment_number:  comment_number,
                    description: comment_params().fetch(:description)
                )
                if comment.save
                    render json: {
                        "description": comment[:description],
                        "issue_id": comment_params().fetch(:issue_id),
                        "id":  comment[:comment_number],
                    }, status: :created
                else
                    render json: comment.errors, status: :unprocessable_entity
                end
            end

            # DELETE /comments/1
            # Deletes the comment
            def destroy
                @comment.destroy
                render json: {'message':'Comment is deleted.'}
            end

            private

            # Fetch the comment to do operations on it
            def set_comment
                @comment = current_user.comments.find(params[:id])
            end

            # Only allow a trusted parameter "white list" through.
            def comment_params
                params.require(:comment).permit(:description, :issue_id)
            end

            # Send 404 if the item is not found
            def item_not_found
                render json:{error: 'Requested comment is not found!'}, status: :not_found
            end
        end
    end
end
