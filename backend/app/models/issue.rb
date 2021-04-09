class Issue < ApplicationRecord
  belongs_to :user
  has_many :comments
  validates :status, inclusion: { in: %w(TODO INPROGRESS DONE), message: "%{value} is not a valid status for an issue. Must be one of these values: [TODO, INPROGRESS and DONE], in upper case." }

end
