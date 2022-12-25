Feature: StudentsPage

  @ValidCase @SomeTags @Students
  Scenario Outline: Validate that User is able to navigate  to "Students page" from "Home Page"
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on "<Pagelink>" tab on Home page's navigation bar

    Examples:
      | Pagelink     |
      | For Students |

  @ValidCase @SomeTags @Students @Test5
  Scenario Outline: Validate that User is able to navigate  to "Students page" from "Home Page"
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on "<Pagelink>" tab on Home page's navigation bar
    When User Click on "<Item>" from "<Pagelink>"

    Examples:
      | Pagelink     |Item|
      | For Students |    |