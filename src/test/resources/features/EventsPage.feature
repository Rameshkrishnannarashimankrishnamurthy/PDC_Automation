Feature: EventsPage

  @ValidCase @SomeTags
  Scenario Outline: Validate that User is able to navigate  to "<Pagelink>" from "Home Page"
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on "<Pagelink>" tab on Home page's navigation bar

    Examples:
      | Pagelink |
      | Events   |