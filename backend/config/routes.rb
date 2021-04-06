Rails.application.routes.draw do
    post 'refresh', controller: :refresh, action: :create
    post 'signin', controller: :signin, action: :create
    post 'signup', controller: :signup, action: :create
    delete 'signin',controller: :signin, action: :destroy

    # Only get requests return the html for the frontend
    match '*path' => redirect(path: '/'), via: :get
    # All other requests return 404s
    match '*path', to: 'application#action_not_found', via: :all
end