Feature: Profile page

    Continuous Scenarios

    Background:
        Given A web browser is at the GED login page
    
    Scenario: Success Update Profile

    ################################ steps 1 ################################
        When A user enters the username, password, and clicks on the login button
        Then the url will contains the "admin" subdirectory

    ################################ steps 2 ################################
        Given A web browser is at the profile settings page
        When a user enter the 'input[type="tel"]' '23461212431'
        And click on the submit button
        Then the alert message "Account updated successfully" is displayed

    ################################ steps 3 ################################
        Given A web browser is at the profile settings page
        And click on the button with have a text "Password"
    
    ################################ steps 4 ################################
        Given A web browser is at the profile settings page
        And click on the button with have a text "Logout"
        Then I see this sentence "Are you sure to log out?" in the page
        And click on the "#modal-unsaved-confirm-btn" button
        Then the url will not contains the "admin" subdirectory
