Feature: ContactUs

  @ContactUs @SmokeTest @Regression @Test2 @SmokeTest
  Scenario Outline: Validate that User is able to submit "Contact Us" form Home Page
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on "<Pagelink>" tab on Home page's navigation bar
    When User Enters "<FirstName>","<LastName>","<Category>","<Email>" and "<Message>" in Contact Us form
    Then User Clicks on Send Message button
    Examples:
      | FirstName      | LastName       | Category | Email                       | Message                                          | Pagelink  |
      | TestAutomation | TestAutomation | CDC      | testautomationpdc@gmail.com | This is a test automation scenario please ignore | ContactUs |


  @ContactUs @SmokeTest @Regression @Test3 @SmokeTest
  Scenario Outline: Validate that User is able to submit "Contact Us" form API
    Given User is able to launch web browser and PDC website is loaded
    Then User Enters "<FirstName>","<LastName>","<Category>","<Email>" and "<Message>" in Contact Us form through API

    Examples:
      | FirstName      | LastName       | Category | Email                       | Message                                          |
      | TestAutomation | TestAutomation | CDC      | testautomationpdc@gmail.com | This is a test automation scenario please ignore |