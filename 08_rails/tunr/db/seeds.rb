User.destroy_all
u1 = User.create :name => "Craig", :email => "craigsy@ga.co", :password => "chicken", :password_confirmation => "chicken"
u2 = User.create :name => "Jonesy", :email => "jonesy@ga.co", :password => "chicken", :password_confirmation => "chicken"
u3 = User.create :name => "Badger", :email => "badger@ga.co", :password => "chicken", :password_confirmation => "chicken"
p "User count: #{User.all.count}"
p u1

m1 = Mixtape.create :title => "Fire"
m2 = Mixtape.create :title => "Easter tunes"
m3 = Mixtape.create :title => "Code jams"

u1.mixtapes << m1
u2.mixtapes << m2
u3.mixtapes << m3

p "User one mixtape count: #{u1.mixtapes.count}"
p "User two mixtape count: #{u2.mixtapes.count}"
p "User three mixtape count: #{u3.mixtapes.count}"

p "Mixtape one, user name: #{m1.user.name}"
p "Mixtape two, user name: #{m2.user.name}"
p "Mixtape three, user name: #{m3.user.name}"

Song.destroy_all
s1 = Song.create :name => "All by electricity"
s2 = Song.create :name => "Marianas Trench"
s3 = Song.create :name => "Have a safe trip, dear"
p "Song count: #{Song.all.count}"

Album.destroy_all
a1 = Album.create :name => "All by electricity"
a2 = Album.create :name => "From the vapor to the gasoline"
a3 = Album.create :name => "Systems/Layers"
p "Album count: #{Album.all.count}"

# Song belongs_to an album, and an album has_many songs
  # The append operator will change the album_id on the song, then save it
  # The .songs method is created by the has_many :songs on the Album model
a1.songs << s1
a2.songs << s2
a3.songs << s3

p "Song count on the first album: #{a1.songs.count}"
p "Song count on the second album: #{a2.songs.count}"
p "Song count on the third album: #{a3.songs.count}"

p "Album name for the first song: #{s1.album.name}"
p "Album name for the second song: #{s2.album.name}"
p "Album name for the third song: #{s3.album.name}"

Artist.destroy_all
r1 = Artist.create :name => "June of 44"
r2 = Artist.create :name => "The Mercury Program"
r3 = Artist.create :name => "Rachels"
p "Artist count: #{Artist.all.count}"

r1.songs << s1
r2.songs << s2
r3.songs << s3

p "First artist song count: #{r1.songs.count}"
p "Second artist song count: #{r2.songs.count}"
p "Third artist song count: #{r3.songs.count}"

p "Artist name for song one: #{s1.artist.name}"
p "Artist name for song two: #{s2.artist.name}"
p "Artist name for song three: #{s3.artist.name}"

p "Artist one's album count: #{r1.albums.count}"
p "Artist two's album count: #{r2.albums.count}"
p "Artist three's album count: #{r3.albums.count}"

# Create a Genre model (connected to a genres table)
  # We need a name field that saves text
  # Work out the association between Artist and Genre
