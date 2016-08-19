require 'sqlite3' # Provides an interface for Ruby to be able to speak to the sqlite3 command in your terminal
require 'pry' # Debugging
require 'sinatra' # Web Server
require 'sinatra/reloader' # Don't restart the server every change we make

require 'active_record'
ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "database.db"
)
ActiveRecord::Base.logger = Logger.new( STDERR )

class Animal < ActiveRecord::Base
  belongs_to :habitat
  # WE NEED TO ADD habitat_id TO THE ANIMALS TABLE TO GET THIS WORKING
end
# a = Animal.find( 1 ) # habitat_id == 2
# a.habitat

class Habitat < ActiveRecord::Base
  has_many :animals
end
# h = Habitat.find( 2 )
# h.animals #

get '/' do # localhost:4567/
  erb :home
end

get '/pry' do # Not necessary, but useful for debugging
  binding.pry
  "Pry route"
end

get '/habitats' do
  @all_habitats = Habitat.all
  erb :habitats_index
end

get '/habitats/new' do
  erb :habitats_new
end

post '/habitats' do
  Habitat.create({
    :landscape => params[:landscape],
    :climate => params[:climate]
  })
  redirect "/habitats"
end

# Create a route that handles the submission of the edit form
get '/habitats/:id/edit' do
  @habitat = Habitat.find params[:id]
  erb :habitats_edit
end

post '/habitats/:id' do
  habitat = Habitat.find params[:id]
  habitat.climate = params[:climate]
  habitat.landscape = params[:landscape]
  habitat.save
  redirect "/habitats/#{params[:id]}"
end

get '/habitats/:id/delete' do
  habitat = Habitat.find params[:id]
  habitat.destroy
  redirect "/habitats"
end

get '/habitats/:id' do
  @habitat = Habitat.find params[:id]
  erb :habitats_show
end

get '/animals' do # localhost:4567/animals INDEX
  @all_animals = Animal.all
  erb :animals_index
end

get '/animals/new' do
  erb :animals_new
end

post '/animals' do
  Animal.create({
    :species => params[:species],
    :image => params[:image],
    :description => params[:description],
    :habitat_id => params[:habitat_id].to_i
  })
  redirect "/animals"
end

get '/animals/:id/edit' do
  @animal = Animal.find params[:id]
  erb :animals_edit
end

post '/animals/:id' do
  animal = Animal.find params[:id]
  animal.species = params[:species]
  animal.image = params[:image]
  animal.description = params[:description]
  animal.habitat_id = params[:habitat_id].to_i
  animal.save

  redirect "/animals/#{params[:id]}"
end

get '/animals/:id/delete' do
  animal = Animal.find params[:id]
  animal.destroy
  redirect "/animals"
end

get '/animals/:id' do
  @animal = Animal.find params[:id]
  erb :animals_show
end
