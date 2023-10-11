Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the GED login page

    Scenario: Success Login with fixture data
        When A user enters the username, password, and clicks on the login button
        Then The url will contains the "admin" subdirectory

    Scenario: Incorrect Login with faker data
        When A user provides incorrect credentials, and clicks on the login button
        Then The alert message "Invalid credentials." is displayed
    
    Scenario: Success Login
        When A user enter the "#user-email" "test-account@gmail.com"
        And A user enter the "#user-password" "password"
        And Click on the submit button
        Then The url will contains the "admin" subdirectory

    Scenario: Incorrect Login
        When A user enter the "#user-email" "test-account@gmail.com"
        And A user enter the "#user-password" "password"
        And Click on the submit button
        Then The alert message "Invalid credentials." is displayed
    