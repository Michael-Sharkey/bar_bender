require 'test_helper'

class ToursControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get tours_show_url
    assert_response :success
  end

  test "should get workout" do
    get tours_workout_url
    assert_response :success
  end

  test "should get eat" do
    get tours_eat_url
    assert_response :success
  end

  test "should get note" do
    get tours_note_url
    assert_response :success
  end

end
