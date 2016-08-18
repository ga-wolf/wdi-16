require 'sqlite3'
require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :home
end

get '/pry' do
  binding.pry
  "Pry route"
end

get '/animals' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  @all_animals = db.execute "SELECT * FROM animals;"

  erb :animals_index
end

get '/animals/:id' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  @animal = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]}" ).first

  puts "\n\n"
  p @animal
  puts "\n\n"

  erb :animals_show
end
