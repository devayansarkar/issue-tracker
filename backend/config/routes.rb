Rails.application.routes.draw do

    namespace :api do
        namespace :v1 do
          resources :issues
          resources :order
          resources :comments
          get 'user', controller: :users, action: :index
        end
    end
    
    post 'refresh', controller: :refresh, action: :create
    post 'signin', controller: :signin, action: :create
    post 'signup', controller: :signup, action: :create
    delete 'signin', controller: :signin, action: :destroy

    # Only get requests return the html for the frontend
    match '*path', to: 'view#render_ui', via: :get
    # All other requests return 404s
    match '*path', to: 'application#action_not_found', via: :all
end