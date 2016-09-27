# Make a program that prints each line that has a word that is capitalized but not ALL capitalized.

require 'pry'

ARGF.each do |line|
  if line =~ /^[A-Z][a-z]/
    puts line
  end
end
