require "application_system_test_case"

class WorksetsTest < ApplicationSystemTestCase
  setup do
    @workset = worksets(:one)
  end

  test "visiting the index" do
    visit worksets_url
    assert_selector "h1", text: "Worksets"
  end

  test "creating a Workset" do
    visit worksets_url
    click_on "New Workset"

    click_on "Create Workset"

    assert_text "Workset was successfully created"
    click_on "Back"
  end

  test "updating a Workset" do
    visit worksets_url
    click_on "Edit", match: :first

    click_on "Update Workset"

    assert_text "Workset was successfully updated"
    click_on "Back"
  end

  test "destroying a Workset" do
    visit worksets_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Workset was successfully destroyed"
  end
end
