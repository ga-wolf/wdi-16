Rails.application.routes.draw do
  resources :artists, :works

  # # CREATE STEP
  # get "/artists/new" => 'artists#new'
  # post "/artists" => 'artists#create'
  #
  # # READ STEP
  # get "/artists" => 'artists#index'
  # get "/artists/:id" => 'artists#show'
  #
  # # UPDATE STEP
  # get "/artists/:id/edit" => 'artists#edit'
  # put "/artists/:id" => 'artists#update'
  # patch "/artists/:id" => 'artists#update'
  # post "/artists/:id" => 'artists#update'
  #
  # # DELETE STEP
  # delete "/artists/:id/delete" => 'artists#destroy'
end
