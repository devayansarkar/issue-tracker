class AddIssueNumberToIssues < ActiveRecord::Migration[6.1]
  def change
    add_column :issues, :issue_number, :integer
  end
end
