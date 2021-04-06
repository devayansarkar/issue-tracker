class SignupController < ApplicationController
    rescue_from ActiveRecord::RecordNotUnique, with: :user_not_unqiue
  def create
    user = User.new(user_params)

    if user.save
      payload = {user_id: user.email}
      session = JWTSessions::Session.new(payload: payload, refresh_by_access_allowed: true)
      tokens = session.login

      response.set_cookie(JWTSessions.access_cookie, value: tokens[:access], httponly: true, secure: Rails.env.production?)
      
      render json: {csrf: tokens[:csrf]}
    else
      render json: {error: user.erorrs.full_messages.join(' ')}, status: :bad_request
    end
  end

  private

  def user_not_unqiue
    render json:{error: 'User already exists!. Please try logging in.'}, status: :bad_request
  end

  def user_params
    params.permit(:email, :name, :password, :password_confirmation)
  end
end
