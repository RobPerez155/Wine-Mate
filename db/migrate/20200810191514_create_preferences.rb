class CreatePreferences < ActiveRecord::Migration[5.2]
  def change
    create_table :preferences do |t|
      t.belongs_to :varietal
      t.belongs_to :user
    end
  end
end
