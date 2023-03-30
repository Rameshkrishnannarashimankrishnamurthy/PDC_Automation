Feature: HomePage

  @HomePage @SmokeTest @Regression @Home @SmokeTest
  Scenario Outline: Validate that User is able to navigate to "<Pagelink>" Page from Home Page headers
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on "<Pagelink>" tab on Home page's navigation bar
    Examples:
      | Pagelink                  |
      | Career Development Centre |
      | Events                    |
      | Projects                  |
      | ContactUs                 |
      | Join the Team             |


  @HomePage @Regression @Home
  Scenario Outline: Validate that User is able to navigate to "<Button>" Page from Home Page
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on "<Button>" on Home page
    And User is navigated to "<Button>" page
    Examples:
      | Button         |
      | Find a Project |
      | All Events     |

  @HomePage @Regression @Home
  Scenario: Validate that User is able to subscribe to PDC Monthly Newsletter
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on "<Button>" on Home page
    When User is navigated to "<Button>" page
    When User Enters "<Email>","<FirstName>","<MiddleName>","<LastName>" and "<ProgramOfStudy>" in Subscribe form
    And User Clicks on submit button




