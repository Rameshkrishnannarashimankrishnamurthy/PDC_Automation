Feature: ProjectsPage

  @ValidCase @SomeTags
  Scenario Outline: Validate that User is able to navigate  to "<Pagelink>" from "Home Page"
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on "<Pagelink>" tab on Home page's navigation bar

    Examples:
      | Pagelink |
      | Projects |

  @ValidCase @SomeTags
  Scenario Outline: Validate that the user is able to filter projects based on "<Project Type>","<Hosted By>","<Tags>" selected
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on "<Pagelink>" tab on Home page's navigation bar
    When User Selects "<Project Type>","<Hosted By>","<Tags>" from the drop-down
    Then Validate the results are based on filters applied

    Examples:
      | Pagelink | Project Type | Hosted By | Tags              |
      | Projects | Past Project | GES-PDC   | Quality Assurance |