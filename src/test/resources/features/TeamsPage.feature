Feature: TeamsPage

  @ValidCase @SomeTags @Teams
  Scenario Outline: Validate that User is able to navigate  to "<Pagelink>" from "Home Page"
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on all the members of our "<Team>" of PDC
    And Validate the PDC team "<Team>" list

    Examples:
      | Team   |
      | Team   |
      | Alumni |