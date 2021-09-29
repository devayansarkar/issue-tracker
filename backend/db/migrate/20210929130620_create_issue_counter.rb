class CreateIssueCounter < ActiveRecord::Migration[6.1]
  def change
    create_table :issue_counters do |t|
      t.integer :next_issue_number
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
