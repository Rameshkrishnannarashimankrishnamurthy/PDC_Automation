Feature: EventsPage

  @ValidCase @SomeTags @Test3
  Scenario Outline: Validate that User is able to navigate  to "Events page" from "Home Page"
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on all the members of our "<Team>" of PDC
    And Validate the PDC team "<Team>" list

    Examples:
      | Team           |
      | Our Volunteers |