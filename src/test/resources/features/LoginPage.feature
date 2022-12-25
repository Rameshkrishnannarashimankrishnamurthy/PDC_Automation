Feature: LoinPage

  @ValidCase @SomeTags @Test4
  Scenario Outline: Validate that User is able to Login to PDC
    Given User is able to launch web browser and PDC website is loaded
    When User clicks on "<Pagelink>" tab on Home page's navigation bar
    When User Click on Sign in with "<User>" microsoft account

    Examples:
      | Pagelink | User                |
      | Login    | rnara103@uottawa.ca |