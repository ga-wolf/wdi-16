# Make a program that prints each line of its input that mentions fred.

require 'pry'

ARGF.each do |line|
  if line =~ /fred/
    puts line
  end
end
