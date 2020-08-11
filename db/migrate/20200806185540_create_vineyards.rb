class CreateVineyards < ActiveRecord::Migration[5.2]
  def change
    create_table :vineyards do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :wines_available, null: false
      t.string :region_location, null: false

      t.timestamps null: false

      t.belongs_to :region, null: false
    end
  end
end
