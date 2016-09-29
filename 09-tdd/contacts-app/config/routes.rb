Rails.application.routes.draw do

  get "/contacts/:id" => 'contacts#show'

end
