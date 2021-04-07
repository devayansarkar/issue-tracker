class User < ApplicationRecord
    has_secure_password
    has_many :issues
    has_many :comments
end
