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
require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
