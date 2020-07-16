module Api
  module V1
    class UsersController < ApplicationController
      def index
        result = User.all
        render json: { users: result, current_user: current_user }
      end
    end
  end
end
