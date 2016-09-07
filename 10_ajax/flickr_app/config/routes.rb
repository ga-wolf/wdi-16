# == Route Map
#
# Prefix Verb URI Pattern      Controller#Action
#   root GET  /                pages#index
#  index GET  /index(.:format) pages#index
#

Rails.application.routes.draw do
  root "pages#index"
  get "/index" => 'pages#index'
end
