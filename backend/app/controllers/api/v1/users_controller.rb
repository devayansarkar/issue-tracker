module Api
    module V1
        class UsersController < ApplicationController
            before_action :authorize_access_request!

            def index
                render json: {
                    name: current_user['name'],
                    email: current_user['email'],
                    deadlineIssues: Issue.where(user_id: current_user['id']).where.not(status: 'DONE').order(end_date: :asc).limit(4),
                    recentlyUpdatedIssues: Issue.where(user_id: current_user['id']).order(updated_at: :desc).limit(4),
                    done: Issue.where(status: 'DONE', user_id: current_user['id']).count,
                    todo: Issue.where(status: 'TODO', user_id: current_user['id']).count,
                    inProgress: Issue.where(status: 'INPROGRESS', user_id: current_user['id']).count,
                }
            end
            
        end 
    end
end