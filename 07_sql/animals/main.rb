require 'sqlite3' # Provides an interface for Ruby to be able to speak to the sqlite3 command in your terminal
require 'pry' # Debugging
require 'sinatra' # Web Server
require 'sinatra/reloader' # Don't restart the server every change we make

get '/' do # localhost:4567/
  erb :home
end

get '/pry' do # Not necessary, but useful for debugging
  binding.pry
  "Pry route"
end

get '/animals' do # localhost:4567/animals INDEX
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  @all_animals = db.execute "SELECT * FROM animals;"
  db.close

  erb :animals_index
end

get '/animals/new' do
  erb :animals_new
end

post '/animals' do
  sql = "INSERT INTO animals (species, image, description) VALUES ('#{params[:species]}', '#{params[:image]}', '#{params[:description]}');"

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute sql
  db.close

  redirect "/animals"
end

get '/animals/:id/edit' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  @animal = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]};" ).first
  db.close

  erb :animals_edit
end

post '/animals/:id' do
  sql = "UPDATE animals SET species = '#{params[:species]}', image = '#{params[:image]}', description = '#{params[:description]}' WHERE id == #{params[:id]};"

  puts "\n\n"
  p params
  puts "\n"
  p sql
  puts "\n\n"

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute sql
  db.close

  redirect "/animals/#{params[:id]}"
end

get '/animals/:id/delete' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  db.execute "DELETE FROM animals WHERE id == #{params[:id]};"
  db.close

  redirect "/animals"
end

get '/animals/:id' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  @animal = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]};" ).first
  db.close

  puts "\n\n"
  p @animal
  puts "\n\n"

  erb :animals_show
end
