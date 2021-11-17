# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_17_153358) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comment_counters", force: :cascade do |t|
    t.integer "next_comment_number"
    t.bigint "issues_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["issues_id"], name: "index_comment_counters_on_issues_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "description"
    t.bigint "issue_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "comment_number"
    t.index ["comment_number", "issue_id", "user_id"], name: "unique_identifier_with_user_issue_and_comment_number", unique: true
    t.index ["issue_id"], name: "index_comments_on_issue_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "issue_counters", force: :cascade do |t|
    t.integer "next_issue_number"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_issue_counters_on_user_id"
  end

  create_table "issues", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.date "end_date"
    t.string "category"
    t.string "status"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "next_issue"
    t.integer "issue_number"
    t.index ["issue_number", "user_id"], name: "unique_identifier_with_user_and_issue_number", unique: true
    t.index ["user_id"], name: "index_issues_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "name"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "comment_counters", "issues", column: "issues_id"
  add_foreign_key "comments", "issues"
  add_foreign_key "comments", "users"
  add_foreign_key "issue_counters", "users"
  add_foreign_key "issues", "users"
end
