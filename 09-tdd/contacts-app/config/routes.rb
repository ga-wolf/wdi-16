Rails.application.routes.draw do

  get "/contacts" => 'contacts#index'
  get "/contacts/new" => 'contacts#new'
  post "/contacts" => 'contacts#create'
  get "/contacts/:id" => 'contacts#show'
  get "/contacts/:id/edit" => 'contacts#edit'

end
