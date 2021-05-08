class CreateRegions < ActiveRecord::Migration[5.2]
  def change
    create_table :regions do |t|
      t.string :name, null: false
      t.string :image_url, null: false
      t.string :description, null: false
      t.float  :position, array: true, default: []

      t.timestamps null: false
    end
  end
end
