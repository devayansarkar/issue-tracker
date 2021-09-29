class AddUniquenessConstrainsToIssues < ActiveRecord::Migration[6.1]
  def change
    add_index :issues, [:issue_number, :user_id], unique: true, name: 'unique_identifier_with_user_and_issue_number'
  end
end
