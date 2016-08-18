require 'pry'

our_file = File.open( "people.txt", "r" )
# p our_file

first_line = our_file.readline
# p first_line
second_line = our_file.readline
# p second_line

our_file.rewind # Moves the cursor to top of the file
all_lines = our_file.readlines

all_lines.each_with_index do |line, index|
  # puts "#{index + 1} #{line}"
end

our_file.close

our_file = File.open "people.txt", "w+"

our_file.puts "Person 1"
our_file.puts "Person 2"
our_file.puts "Person 3"
our_file.puts "THIS IS THE NEW END OF THE FILE"

our_file.rewind
p our_file.readlines.last

our_file.close
