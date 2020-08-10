class CreateCellars < ActiveRecord::Migration[5.2]
  def change
    create_table :cellars do |t|
      t.belongs_to :vineyard
      t.belongs_to :varietal
    end
  end
end
