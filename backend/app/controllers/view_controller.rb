class ViewController < ActionController::Base
    
  def render_ui
    render :file => Rails.root.join('public/index.html')
  end

end
