# == Schema Information
#
# Table name: users
#
#  id                          :bigint           not null, primary key
#  email(email)                :string(255)      not null
#  name                        :string(255)      not null
#  password_digest(パスワード) :string(255)      not null
#  created_at                  :datetime         not null
#  updated_at                  :datetime         not null
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#
FactoryBot.define do
  factory :user do
    user { "MyString" }
    email { "MyString" }
    password_digest { "MyString" }
  end
end
