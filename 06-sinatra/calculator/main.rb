# Include appropriate gems
require 'pry'
require 'sinatra'
require 'sinatra/reloader'

# Home Page
get '/' do
  # "You have reached the home page"
  erb( :home )
end

# About Page
# Literal route - GET localhost:4567/about
get '/about' do
  # "You have reached the about page"
  erb( :about )
end

# Contact Page
get '/contact' do
  # "You have reached the contact page"
  erb :contact
end

# URL Calculator Pages
get '/multiply/:x/:y' do
  x = params[:x].to_f
  y = params[:y].to_f
  result = x * y
  "The result is <strong> #{result} </strong>"
end

get '/users' do
  "This should show all of the users"
  erb :users
end

get '/users/:username' do
  "This should show the profile for #{params[:username].upcase}"
  erb :user_show
end

get '/calculate' do
  erb :calculate
end

get '/result' do
  @first_number = params[:first_number].to_i
  @second_number = params[:second_number].to_i
  @result = @first_number + @second_number

  erb :result
end
