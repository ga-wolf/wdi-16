# Write a program that prints out any input line that mentions both wilma and fred

require 'pry'

ARGF.each do |line|
  # if line =~ /wilma.*fred/ || line =~ /fred.*wilma/
  if line =~ /(wilma.*fred|fred.*wilma)/
    puts line
  end
end
