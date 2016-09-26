Rails.application.routes.draw do
  get '/planets' => 'planets#index'

  get '/planets/new' => 'planets#new'
  post '/planets' => 'planets#create'

  get '/planets/:id/edit' => 'planets#edit'
  post '/planets/:id' => 'planets#update'

  delete '/planets/:id/delete' => 'planets#destroy'

  get '/planets/:id' => 'planets#show'
end
