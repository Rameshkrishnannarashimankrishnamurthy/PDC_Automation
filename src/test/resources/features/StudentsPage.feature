Feature: StudentsPage

  @ValidCase @SomeTags @Students
  Scenario Outline: Validate that User is able to navigate  to "<Pagelink>" from "Home Page"
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on "<Pagelink>" tab on Home page's navigation bar

    Examples:
      | Pagelink     |
      | For Students |

  @ValidCase @SomeTags @Students @Test5
  Scenario Outline: Validate that User is able to navigate "<Item>" in "Students page" from "Home Page"
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on "<Pagelink>" tab on Home page's navigation bar
    When User Click on "<Item>" from "<Pagelink>" in students page

    Examples:
      | Pagelink     | Item                              |
      | For Students | Create or Activate Association    |
      | For Students | uOttawa Student Associations      |
      | For Students | Programs Recognized by FSWEP      |
      | For Students | Useful Resources for New Students |
      | For Students | Industry Internship Project       |
      | For Students | Frequently Asked Questions (FAQs) |