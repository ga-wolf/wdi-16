require 'pry'

f = File.open "movie_database.txt", "r"

all_lines = f.readlines

def display_movie( line )
  line.chomp!
  movie_details = line.split ","

  movie_name = movie_details[0]
  movie_duration = movie_details[1]
  movie_rating = movie_details[2]

  puts ""
  puts "Name: #{movie_name}"
  puts "Duration: #{movie_duration}"
  puts "Rating: #{movie_rating}"
end

all_lines.each do |line|
  display_movie( line )
end

f.close

def add_movie
  puts ""
  puts "Time to add a movie!"
  print "What is the movie name? "
  name = gets.chomp

  print "How long is it? "
  duration = gets.chomp

  print "What is the rating? "
  rating = gets.chomp

  movie_details = "#{name},#{duration},#{rating}"

  f = File.open "movie_database.txt", "a+"
  f.puts movie_details
  f.close
end

add_movie()
