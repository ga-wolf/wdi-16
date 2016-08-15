def hello
  puts "Hello"
end
hello()


def say_hello( name = "World" ) # Default parameters
  puts "Hello #{name}"
end
say_hello("Badger")
say_hello("The Blade")
say_hello() # Hello World


def add_two_numbers( x, y = 0 )
  x + y # implicit return
end

result = add_two_numbers( 10, 20 )
p result

p add_two_numbers( 10, 100 )

def say_hi( name = "World" )
  # return "You are supposed to be a rude today"
  "Hello #{name}!"
end
p say_hi()
p say_hi("Serge")
p say_hi "Jane"
