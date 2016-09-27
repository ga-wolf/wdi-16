# Modify the previous program to allow Fred to match as well.

require 'pry'

ARGF.each do |line|
  if line =~ /[Ff]red/
    puts line
  end
end
