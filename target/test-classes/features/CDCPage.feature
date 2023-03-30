Feature: CDCPage

  @ValidCase @SomeTags @CDCPage @SmokeTest
  Scenario Outline: Validate that User is able to navigate  to "<Pagelink>" from "Home Page"
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on "<Pagelink>" tab on Home page's navigation bar
    When User is able to Book appointments for Mock Interviews

    Examples:
      | Pagelink                  |
      | Career Development Centre |