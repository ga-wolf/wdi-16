# Make a program that prints each line of its input that contains a period (.)

require 'pry'

ARGF.each do |line|
  if line =~ /\./
    puts line
  end
end
