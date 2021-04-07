class ApplicationController < ActionController::API
    include JWTSessions::RailsAuthorization
    rescue_from JWTSessions::Errors::Unauthorized, with: :not_authorized

    def action_not_found
        render json:{error: 'The resource you are requesting is not available.'}, status: :not_found
    end
    
    private 

    def current_user
        @current_user ||= User.find_by_email(payload["user_id"])
    end

    def not_authorized
        render json:{error: 'Access denied. You must be logged in to access this resource.'}, status: :unauthorized
    end

end
