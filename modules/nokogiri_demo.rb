require 'nokogiri'
require 'open-uri'
require 'pry'

# # Store a URL in a variable. We'll call this 'base_url', since we might want to add a path (etc) to that 'base' url.
# base_url = "http://www.badtaxidermy.com"
#
# # open is a method of Ruby's OpenURI module which we can use to read the contents of a URL.
#
# # Nokogiri::HTML will parse an HTML document, returning an object with rich details about the HTML file, which we can then traverse using familiar methods.
#
# # Pass the html file returned by the open method into Nokogiri::HTML, store the object returned in a variable called 'index'. This will be the entire, parsed HTML of www.badtaxidermy.com
# index = Nokogiri::HTML(open(base_url))
#
# # Call the .css method on the Nokogiri object, passing in CSS selectors as arguments to return the elements we're after (in this case, all img descendants of elements with the class 'postimage')
# posts = index.css(".postimage img")
#
# # Create an empty array which we'll use to store the 'src' attributes of all the images on the page.
# image_urls = []
#
# posts.each do |post|
#   # For each post (each element in the posts array of image elements), get the 'src' attribute and push it to the image_url array.
#   image_urls << post.attr('src')
# end
#
# # Print out all the image urls.
# p image_urls
#
# # So, cool. But that only gives us 10 images. Lame. But I just noticed that we can use the query string page=[num] to return more pages of bad taxidermy! So let's get to work.


class Taxigiri

  def initialize
    @base_url = "http://www.badtaxidermy.com"
    @image_urls = []
    @query = "/?page="
    @num = 1
  end

  def get_images(index)
    posts = index.css(".postimage img")
    posts.each do |post|
      @image_urls << post.attr("src")
    end
  end

  def get_taxidermy
    10.times do
      query = @base_url + @query + @num.to_s
      page = Nokogiri::HTML(open(query))
      get_images(page)
      @num += 1
    end
    p @image_urls
  end
end

t = Taxigiri.new
t.get_taxidermy
