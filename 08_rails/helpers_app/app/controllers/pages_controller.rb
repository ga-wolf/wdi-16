class PagesController < ApplicationController
  def numbers
    @large_number = 19219129828
    @phone_number = 2125551212
    @price = 22424.112492814921
  end

  def text
    @numbers = (1..50).to_a.shuffle
    @friends = 2
    @enemies = 1212
    @fairytale = "A very, very, very long time ago " * 150
  end

  def date
  end

  def railsassets
  end

  def url
    @single_number = 10
    @x = 1
    @y = 4
  end

  def home
  end

  def random
  end

  def single_number
  end

  def two_numbers
  end
end
