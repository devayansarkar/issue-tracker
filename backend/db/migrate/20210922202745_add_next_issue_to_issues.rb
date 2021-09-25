class AddNextIssueToIssues < ActiveRecord::Migration[6.1]
  def change
    add_column :issues, :next_issue, :bigint
  end
end
