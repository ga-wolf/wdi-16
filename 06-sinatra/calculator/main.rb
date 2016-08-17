require 'pry'               # Useful for debugging
require 'sinatra'           # Turns the file into a web server
require 'sinatra/reloader'  # We don't have to restart the server

# Literal Routes
  # HTTP Method paired with a path
get '/' do # localhost:4567 or localhost:4567/
  erb( :home )
end

get '/about' do # localhost:4567/about
  erb( :about )
end

get '/contact' do # localhost:4567/contact
  erb :contact
end

# DYNAMIC ROUTE
  # HTTP Method paired with a URL Pattern Matcher
    # localhost:4567/multiply/10/20
    # localhost:4567/multiply/300/40
get '/multiply/:x/:y' do
  x = params[:x].to_f # "10" => 10.0
  y = params[:y].to_f # "20" => 20.0
  result = x * y      # 200.0
  "The result is <strong>#{result}</strong>"
end

get '/users' do # localhost:4567/users
  erb :users
end

get '/users/:username' do # localhost:4567/users/blade or localhost:4567/users/badger
  @username = params[:username].upcase
  # "This should show the profile for #{params[:username].upcase}"
  erb :user_show
end

get '/calculate' do
  erb :calculate
end

get '/result' do
  puts "\n\n\n"
  print "PARAMS: "
  p params
  puts "\n\n\n"

  @first_number = params[:first_number].to_i
  @second_number = params[:second_number].to_i
  @result = @first_number + @second_number

  erb :result
end
