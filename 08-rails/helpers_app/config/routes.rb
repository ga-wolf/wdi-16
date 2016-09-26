Rails.application.routes.draw do
  get '/numbers' => 'pages#numbers', :as => 'static_numbers'
  get '/text' => 'pages#text'
  get '/date' => 'pages#date'
  get '/railsassets' => 'pages#railsassets'
  get '/url' => 'pages#url'
  get '/home' => 'pages#home'

  get '/really_random' => 'pages#random', :as => 'random'
  get '/number/:number' => 'pages#single_number', :as => 'number'
  get '/:x/:y' => 'pages#two_numbers', :as => 'numbers'
end
