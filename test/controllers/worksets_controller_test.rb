require 'test_helper'

class WorksetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @workset = worksets(:one)
  end

  test "should get index" do
    get worksets_url
    assert_response :success
  end

  test "should get new" do
    get new_workset_url
    assert_response :success
  end

  test "should create workset" do
    assert_difference('Workset.count') do
      post worksets_url, params: { workset: {  } }
    end

    assert_redirected_to workset_url(Workset.last)
  end

  test "should show workset" do
    get workset_url(@workset)
    assert_response :success
  end

  test "should get edit" do
    get edit_workset_url(@workset)
    assert_response :success
  end

  test "should update workset" do
    patch workset_url(@workset), params: { workset: {  } }
    assert_redirected_to workset_url(@workset)
  end

  test "should destroy workset" do
    assert_difference('Workset.count', -1) do
      delete workset_url(@workset)
    end

    assert_redirected_to worksets_url
  end
end
