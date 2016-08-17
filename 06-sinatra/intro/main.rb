require 'sinatra'
require 'sinatra/reloader'

get '/hello' do
  "This is the /hello path"
end
get '/hello-world' do
  "This is the /hello-world path"
end
get '/test' do
  "This is the /test path"
end

get '/addTwoNumbers' do
  x = Random.rand( 10 )
  y = Random.rand( 20 )
  "The result of #{x} + #{y} is #{x + y}"
end

get '/hi/Groucho' do
  "Hello Groucho! You were great in Duck Soup!"
end

get '/hi/:name' do
  name = params[:name]
  "Hello #{name}!"
end

get '/add/:x/:y' do
  num_one = params[:x].to_i
  num_two = params[:y].to_i
  result = num_one + num_two
  "The result of #{num_one} + #{num_two} is #{result}"
end

# localhost:4567/minus/___/___
get '/minus/:num_one/:num_two' do
  x = params[:num_one].to_i
  y = params[:num_two].to_i
  "The result of #{x} minus #{y} is <strong>#{x - y}</strong>"
end

get '/:color' do
  color = params[:color]
  "<p style='color:#{color}'>This text should be #{color}</p>"
end





# get "/hi/Groucho" do
#   "Hi Groucho"
# end
#
# get "/hi/Zeppo" do
#   "Hi Zeppo"
# end
#
# get "/hi/Chico" do
#   "Hi Chico"
# end
