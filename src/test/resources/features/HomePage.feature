Feature: HomePage

  @HomePage @SmokeTest @Regression @Test1
  Scenario Outline: Validate that User is able to navigate to "<Pagelink>" Page from Home Page
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on "<Pagelink>" tab on Home page's navigation bar
    Examples:
      | Pagelink                  |
      | Career Development Centre |
      | For Students              |
      | Events                    |
      | Projects                  |
      | Feedback                  |
      | Join the Team             |

  @HomePage @SmokeTest @Regression @Test2
  Scenario Outline: Validate that User is able to submit "Contact Us" form Home Page
    Given User is able to launch web browser and PDC website is loaded
    When User Enters "<FirstName>","<LastName>","<Category>","<Email>" and "<Message>" in Contact Us form
    Then User Clicks on Send Message button
    Examples:
      | FirstName      | LastName       | Category | Email                       | Message                                          |
      | TestAutomation | TestAutomation | CDC      | testautomationpdc@gmail.com | This is a test automation scenario please ignore |


  @HomePage @SmokeTest @Regression @Test3
  Scenario Outline: Validate that User is able to submit "Contact Us" form API
    Given User is able to launch web browser and PDC website is loaded
    Then User Enters "<FirstName>","<LastName>","<Category>","<Email>" and "<Message>" in Contact Us form through API

    Examples:
      | FirstName      | LastName       | Category | Email                       | Message                                          |
      | TestAutomation | TestAutomation | CDC      | testautomationpdc@gmail.com | This is a test automation scenario please ignore |



