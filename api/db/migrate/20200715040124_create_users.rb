class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :user, null: false, comment: 'ユーザ名'
      t.string :email, null: false, comment: 'email'
      t.string :password_digest, null: false, comment: 'パスワード'

      t.index :email, unique: true
      t.timestamps
    end
  end
end
