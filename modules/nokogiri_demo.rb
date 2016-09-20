require 'nokogiri'
require 'open-uri'
require 'pry'

# Store a URL in a variable. We'll call this 'base_url', since we might want to add a path (etc) to that 'base' url.
base_url = "http://www.badtaxidermy.com"

# open is a method of Ruby's OpenURI module which we can use to read the contents of a URL like it's a file.

# Nokogiri::HTML will parse an HTML document, returning an object with rich details about the HTML file, which we can then traverse using familiar methods.

# Pass the html file returned by the open method into Nokogiri::HTML, store the object returned in a variable called 'index'. This will be the entire, parsed HTML of www.badtaxidermy.com
index = Nokogiri::HTML(open(base_url))

# Call the .css method on the Nokogiri object, passing in CSS selectors as arguments to return the elements we're after (in this case, all img descendants of elements with the class 'postimage')
posts = index.css(".postimage img")

# Create an empty array which we'll use to store the 'src' attributes of all the images on the page.
image_urls = []

posts.each do |post|
  # For each post (each element in the posts array of image elements), get the 'src' attribute and push it to the image_url array.
  image_urls << post.attr('src')
end

# Print out all the image urls.
p image_urls
