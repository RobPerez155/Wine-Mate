# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_14_162901) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cellars", force: :cascade do |t|
    t.bigint "vineyard_id"
    t.bigint "varietal_id"
    t.index ["varietal_id"], name: "index_cellars_on_varietal_id"
    t.index ["vineyard_id"], name: "index_cellars_on_vineyard_id"
  end

  create_table "preferences", force: :cascade do |t|
    t.bigint "varietal_id"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_preferences_on_user_id"
    t.index ["varietal_id"], name: "index_preferences_on_varietal_id"
  end

  create_table "regions", force: :cascade do |t|
    t.string "name", null: false
    t.string "image_url", null: false
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "overall", null: false
    t.string "comment"
    t.string "varietal", null: false
    t.string "username", default: "Unsubscribed Wine Enthusiast", null: false
    t.bigint "vineyard_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_reviews_on_user_id"
    t.index ["vineyard_id"], name: "index_reviews_on_vineyard_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "varietals", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "vineyards", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "wines_available", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "region_id", null: false
    t.index ["region_id"], name: "index_vineyards_on_region_id"
  end

end
