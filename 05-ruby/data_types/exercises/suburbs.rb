# Sydney Suburbs
#
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

puts "Where do you live? "
suburb = gets().chomp()

case suburb
when "Potts Point", "Vaucluse", "Glamarama"
  puts "La de da"
when "Manly"
  puts "Don't get koi with me"
when "West Head"
  puts "Thousand miles from care"
else
  puts "I am sure that is a nice place"
end
