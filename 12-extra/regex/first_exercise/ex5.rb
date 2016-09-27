# Make a program that prints each line that has a two of the same nonwhitespace characters next to each other

require 'pry'

ARGF.each do |line|
  if line =~ /(\S)\1/
    puts line
  end
end
