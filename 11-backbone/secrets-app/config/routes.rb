Rails.application.routes.draw do
  root 'pages#app'          # localhost:3000
  get '/app' => 'pages#app' # localhost:3000/app

  resources :secrets
end
