require 'date'
class SignupController < ApplicationController
    rescue_from ActiveRecord::RecordNotUnique, with: :user_not_unqiue
  def create
    user = User.new(user_params)

    if user.save
      payload = {user_id: user.email}
      session = JWTSessions::Session.new(payload: payload, refresh_by_access_allowed: true)
      tokens = session.login

      response.set_cookie(JWTSessions.access_cookie, value: tokens[:access], httponly: true, secure: Rails.env.production?)
      
      create_dummy_issues(user)

      render json: tokens
    else
      render json: {error: user.erorrs.full_messages.join(' ')}, status: :bad_request
    end
  end

  private

  def user_not_unqiue
    render json:{error: 'User already exists!. Please try logging in.'}, status: :bad_request
  end

  def user_params
    params.permit(:email, :name, :password, :password_confirmation)
  end

=begin

This method creates some sample issues so that the new user has some example issues to work with. 

Creates :
1) TODO issue with deadline
2) TODO issue without a deadline
3) INPROGRESS issue 
4) DONE issue

=end
  def create_dummy_issues(user)
    
    issue_todo_with_far_deadline = user.issues.create(
      title: 'Issue with a deadline in the future',
      description: 'This issue has a deadline in the future. The right had side bar provides as estimate of the time left. Green bar signifies that there is enough time for handling the issue. Yellow bar signifies that time is short. Red bar signifies that time is about to run out.',
      end_date: Date.today + 180,
      category: 'deadline',
      status: 'TODO'
    )

    issue_todo_with_far_deadline.save()


    issue_todo_with_no_deadline = user.issues.create(
      title: 'Issue without a deadline',
      description: 'This issue does not have deadline. You can skip the deadline when creating issues. Later on if needed, you can add the deadline while editing the issue. Issues without deadline with always have green bars.',
      end_date: '',
      category: 'no-deadline',
      status: 'TODO'
    )

    issue_todo_with_no_deadline.save()

    issue_in_progress = user.issues.create(
      title: 'Issue in progress',
      description: 'You can mark issues in progress, signifying that the you are working on it. The right bar as always will keep you informed about the time remaining to finish the issue. You can change the status of the task either by dragging and dropping the issue in the particular lane or by selecting the status under the menu from top right.',
      end_date:  Date.today + 10,
      category: 'issue-in-progress',
      status: 'INPROGRESS'
    )

    issue_in_progress.save()

    issue_done = user.issues.create(
      title: 'Issue in progress',
      description: 'This is an issue that is done. Finished issue will have a green bar signifying the issue is complete. You can edit or view the issue by clicking on the eye icon. Once the issue is open, you can change all the options present in the issue.',
      end_date:  Date.today + 30,
      category: 'issue-done',
      status: 'DONE'
    )

    issue_done.save()

  end
end
