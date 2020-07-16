class ApplicationController < ActionController::API
  before_action :check_is_signed_in

  def check_is_signed_in
    if current_user.blank?
      render_401_error("unauthorized")
      return
    end

    @user = User.find(session[:user_id])
  end

  def render_401_error(error = nil)
    render json: { message: "unauthorized" }, status: 401
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
