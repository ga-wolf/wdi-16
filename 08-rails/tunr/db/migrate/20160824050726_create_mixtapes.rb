class CreateMixtapes < ActiveRecord::Migration
  def change
    create_table :mixtapes do |t|
      t.string :title
      t.integer :user_id
      t.boolean :is_fire

      t.timestamps null: false
    end
  end
end
