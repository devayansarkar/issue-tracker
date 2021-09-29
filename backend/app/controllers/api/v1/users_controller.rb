module Api
    module V1
        class UsersController < ApplicationController
            before_action :authorize_access_request!

            def index
                done_issues = Issue.where(user_id: current_user.id).where.not(status: 'DONE').order(end_date: :asc).limit(4)
                recently_updated_issues = Issue.where(user_id: current_user.id).order(updated_at: :desc).limit(4)

                done_issues_response = Array.new
                recently_updated_issues_response = Array.new

                done_issues.each { |item|
                    done_issues_response.push(
                        {
                            "id": item[:issue_number],
                            "title": item[:title],
                            "description": item[:description],
                            "end_date":  item[:end_date],
                            "category": item[:category],
                            "status":  item[:status],
                            "user_id":  item[:user_id],
                            "created_at":  item[:created_at],
                            "updated_at":  item[:updated_at],
                        }
                    )
                }

                recently_updated_issues.each { |item|
                    recently_updated_issues_response.push(
                        {
                            "id": item[:issue_number],
                            "title": item[:title],
                            "description": item[:description],
                            "end_date":  item[:end_date],
                            "category": item[:category],
                            "status":  item[:status],
                            "user_id":  item[:user_id],
                            "created_at":  item[:created_at],
                            "updated_at":  item[:updated_at],
                        }
                    )
                }
                render json: {
                    name: current_user.name,
                    email: current_user.email,
                    deadlineIssues: done_issues_response,
                    recentlyUpdatedIssues: recently_updated_issues_response,
                    done: Issue.where(status: 'DONE', user_id: current_user.id).count,
                    todo: Issue.where(status: 'TODO', user_id: current_user.id).count,
                    inProgress: Issue.where(status: 'INPROGRESS', user_id: current_user.id).count,
                }
            end
            
        end 
    end
end