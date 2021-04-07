module Api
    module V1
        class CommentsController < ApplicationController
            before_action :authorize_access_request!
            before_action :set_comment, only: [:destroy]
            rescue_from ActiveRecord::RecordNotFound, with: :item_not_found

            # POST /comments 
            # Add comment for a user
            def create
                @comment = current_user.comments.build(comment_params)
        
                if @comment.save
                  render json: @comment, status: :created
                else
                  render json: @comment.errors, status: :unprocessable_entity
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
