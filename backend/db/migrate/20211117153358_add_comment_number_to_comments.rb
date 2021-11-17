class AddCommentNumberToComments < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :comment_number, :integer
    create_table :comment_counters do |t|
      t.integer :next_comment_number
      t.references :issues, null: false, foreign_key: true
      t.timestamps
    end
    add_index :comments, [:comment_number, :issue_id, :user_id], unique: true, name: 'unique_identifier_with_user_issue_and_comment_number'
  end
end
