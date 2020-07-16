module Api
  module V1
    class SessionsController < ApplicationController
      skip_before_action :check_is_signed_in, only: [:create]
      def create
        user = User.find_by(name: params[:name])
        
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: { message: "login success" }
        else
          render json: { message: "login failed" }
        end
      end
    end
  end
end
