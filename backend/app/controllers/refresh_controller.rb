class RefreshController < ApplicationController
    before_action :authorize_refresh_by_access_request!

  def create
    session = JWTSessions::Session.new(payload: claimless_payload, refresh_by_access_allowed: true)
    tokens = session.refresh_by_access_payload do
       render json:{ error: 'Refresh action is performed before the expiration of the access token.'}, status: :bad_request
       return
      end
    response.set_cookie(JWTSessions.access_cookie,
                        value: tokens[:access],
                        httponly: true,
                        secure: Rails.env.production?)

    render json: tokens
  end
end
