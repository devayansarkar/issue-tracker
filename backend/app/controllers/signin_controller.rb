class SigninController < ApplicationController
    before_action :authorize_access_request!, only: [:destroy]

    def create

        if  params[:email] == nil
            not_found
            return
        end

        user = User.find_by(email: params[:email])

        if user and user.authenticate(params[:password])
            payload = {user_id: user.email}
            session = JWTSessions::Session.new(payload:payload, refresh_by_access_allowed:true)
            tokens = session.login

            response.set_cookie(JWTSessions.access_cookie, value: tokens[:access], httponly: true, secure: Rails.env.production?)
      
            render json: tokens
        else
            not_found
        end
    end

    def destroy
        session = JWTSessions::Session.new(payload: payload)
        session.flush_by_access_payload
        render json:{message: 'You are logged out.'}, status: :ok
    end

    private
   
    def not_found
        render json: { error: 'Cannot find email/password combination' }, status: :not_found 
    end

end