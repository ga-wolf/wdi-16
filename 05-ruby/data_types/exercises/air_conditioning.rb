# Air Conditioning
#
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.

print "What is the current temperature? "
current_temperature = gets().chomp().to_f

print "Is the air conditioning working? (y/n) "
functionining_air_conditioning = gets().chomp()

print "What is the desired temperature? "
desired_temperature = gets().chomp().to_f

if functionining_air_conditioning == "y" && current_temperature > desired_temperature
  puts "Turn on the A/C please"
elsif current_temperature > desired_temperature && functionining_air_conditioning == "n"
  puts "Fix the A/C now! It's hot!"
elsif functionining_air_conditioning == "n" && current_temperature < desired_temperature
  puts "Fix the A/C whenever you have the chance... It's cool..."
else
  puts "I don't need to say anything here"
end
