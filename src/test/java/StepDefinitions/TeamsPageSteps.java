package StepDefinitions;

import Enums.ScenarioContext;
import PageObjects.ProjectsPage;
import PageObjects.TeamsPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TeamsPageSteps {

    private WebDriver driver = Hooks.driver;
    private WebDriverWait wait;

    TeamsPage teamsPage = new TeamsPage(driver, wait);

    ScenarioContext scenarioContext = new ScenarioContext();

    @And("^Validate the PDC team \"(.*)\" list$")
    public void validateThePDCTeamList(String team) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        teamsPage.getOurVolunteers();
    }
}
