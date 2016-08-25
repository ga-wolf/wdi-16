class CreateGenresSongs < ActiveRecord::Migration
  def change
    create_table :genres_songs, :id => false do |t|
      t.integer :genre_id
      t.integer :song_id
    end
  end
end

# A join table needs to be in alphabetical order and plural
  # Only has foreign keys (genre_id and song_id)
  # It doesn't need an ID as we will never search this database, it is only used by ActiveRecord behind the scenes
