package StepDefinitions;

import Enums.ScenarioContext;
import PageObjects.HomePage;
import PageObjects.ProjectsPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import static Enums.Context.*;

public class ProjectPageSteps {


    private WebDriver driver = Hooks.driver;
    private WebDriverWait wait;

    ProjectsPage projectsPage = new ProjectsPage(driver, wait);

    ScenarioContext scenarioContext = new ScenarioContext();

    @When("^User Selects \"(.*)\",\"(.*)\",\"(.*)\" from the drop-down$")
    public void userSelectsFromTheDropDown(String type,String hostedBy, String Tags) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        scenarioContext.setContext(Project_Type,type);
        scenarioContext.setContext(HostedBy,hostedBy);
        projectsPage.userSelectsProjecttype(type);
        projectsPage.userSelectsHostedBy(hostedBy);
        projectsPage.userSelectsTags(Tags);
    }

    @Then("^Validate the results are based on filters applied$")
    public void validateTheResultsAreBasedOnFiltersApplied() throws Exception {

        String ProjectType = scenarioContext.getContext(Project_Type).toString();
        String Hosted_by = scenarioContext.getContext(HostedBy).toString();
        ProjectsPage.projectsFilteredResult(ProjectType, Hosted_by);
    }
}
