class AddReviewTable < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :overall, null: false
      t.string :comment
      t.string :varietal, null: false
      t.string :username, null: false, default: "Unsubscribed Wine Enthusiast"

      t.belongs_to :vineyard
      t.belongs_to :user

      t.timestamps
    end 
  end
end
