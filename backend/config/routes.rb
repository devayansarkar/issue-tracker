Rails.application.routes.draw do
    post 'refresh', controller: :refresh, action: :create
    post 'signin', controller: :signin, action: :create
    post 'signup', controller: :signup, action: :create
    delete 'signin',controller: :signin, action: :destroy

    match '*path', to: 'application#action_not_found', via: :all
end