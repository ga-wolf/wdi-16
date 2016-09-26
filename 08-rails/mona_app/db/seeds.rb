Artist.destroy_all
a1 = Artist.create({
  :name => "Joan Miro",
  :nationality => "Spanish",
  :dob => "1893/04/20",
  :period => "20th century",
  :image => "http://www.joan-miro.net/images/joan-miro.jpg"
})

Work.destroy_all
w1 = Work.create({
  :title => "The Flight of the Dragonfly in Front of the Sun",
  :year => '1968',
  :medium => 'oil on canvas',
  :style => 'abstract',
  :image => 'http://www.joan-miro.net/images/paintings/the-flight-of-the-dragonfly-in-front-of-the-sun.jpg',
  :artist_id => a1.id
})

p a1
p w1
