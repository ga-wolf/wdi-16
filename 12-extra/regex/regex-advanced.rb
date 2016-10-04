require 'pry'

some_number = "Number: 202-555-1701."

matches = some_number.match( /(\d+)-(\d+)-(\d+)/ )

p matches.pre_match
p matches[1]
p matches[2]
p matches[3]
p matches.post_match

puts "\n\nNAMED CAPTURES\n\n"

matches = some_number.match( /(?<area_code>\d+)-(?<exchange_code>\d+)-(?<suffix_code>\d+)/ )
p matches[:area_code]
p matches[:exchange_code]
p matches[:suffix_code]

puts "\n\nANCHORS\n\n"
p " ruby " =~ /ruby/
p "ruby  " =~ /^ruby/
p " ruby " =~ /^ruby/
p "  ruby" =~ /ruby$/
p " ruby " =~ /ruby$/

puts "\n\nFLAGS\n\n"

p "RUBY" =~ /ruby/i

some_num = "Number: 202-555-1701."
matches = some_num.match(/
  (\d+)- # Area code
  (\d+)- # Exchange code
  (\d+) # Suffix code
/x)
p matches

matches = some_num.match(/
  (?<area>\d+)- # This should match 202
  (?<exchange>\d+)- # This should match 555
  (?<suffix>\d+) # This should match 1701
/x)
p matches
p matches[:area]

puts "\n\nGREEDY vs. RELUCTANT\n\n"

p "202-555-1701".match /(\d+).*(\d+).*(\d+)/
p "202-555-1701".match /(\d+).*?(\d+).*?(\d+)/

html = "<html><div></div></html>"
p html.match /<(.*)>/
p html.match /<(.*?)>/
