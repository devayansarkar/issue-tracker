class CreateIssues < ActiveRecord::Migration[6.1]
  def change
    create_table :issues do |t|
      t.string :title
      t.string :description
      t.date :end_date
      t.string :category
      t.string :status

      t.timestamps
    end
  end
end
