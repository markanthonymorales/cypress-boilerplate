Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the GED login page

    Scenario: Success Login with fixture data
        When A user enters the username, password, and clicks on the login button
        Then the url will contains the "admin" subdirectory

    Scenario: Incorrect Login with faker data
        When A user provides incorrect credentials, and clicks on the login button
        Then the alert message "Invalid credentials." is displayed
    
    Scenario: Success Login
        When a user enter the "#user-email" "dev@itfaq.global"
        And a user enter the "#user-password" "password"
        And click on the submit button
        Then the url will contains the "admin" subdirectory

    Scenario: Incorrect Login
        When a user enter the "#user-email" "dev2@itfaq.global"
        And a user enter the "#user-password" "password"
        And click on the submit button
        Then the alert message "Invalid credentials." is displayed
    