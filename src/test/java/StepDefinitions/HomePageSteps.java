package StepDefinitions;

import PageObjects.HomePage;
import PageObjects.LoginPage;
import Utilities.PropertiesReader;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePageSteps {

    private WebDriver driver = Hooks.driver;
    private WebDriverWait wait;
    HomePage home = new HomePage(driver, wait);

    public HomePageSteps() throws Exception {

        PropertiesReader propertiesReader = new PropertiesReader();
        this.wait = new WebDriverWait(driver, propertiesReader.getTimeout());
    }

    @Given("^User is able to launch web browser and PDC website is loaded$")
    public void userIsAbleToLaunchWebBrowserAndPDCWebsiteIsLoaded() throws Exception {
        home.homePageIsDisplayed();
    }

    @When("^User clicks on \"(.*)\" tab on Home page's navigation bar$")
    public void userClicksOnTabOnHomePageNavigationBar(String pagelink) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        home.navigatebetweenheader(pagelink);
    }

    @Then("^User Clicks on Send Message button$")
    public void userClicksOnSendMessageButton() throws Exception {
        home.sendbutton();
    }

    @When("^User Enters \"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\" and \"(.*)\" in Contact Us form$")
    public void userEntersAndInContactUsForm(String firstName, String secondName, String category, String emailId, String message) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        home.setContactUs(firstName, secondName, category, emailId, message);
    }

    @When("^User clicks on all the members of our \"(.*)\" of PDC$")
    public void userClicksOnAllTheMembersOfOurOfPDC(String team) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        home.selectTheTeam(team);
    }

    @Then("^User Enters \"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\" and \"(.*)\" in Contact Us form through API$")
    public void userEntersAndInContactUsFormThroughAPI(String firstName, String secondName, String category, String emailId, String message) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        home.setContactUsAPI(firstName, secondName, category, emailId, message);
    }

    @When("^User clicks on \"(.*)\" on Home page$")
    public void userClicksOnlink(String link) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        home.clickOnButton(link);
    }

    @And("^User is navigated to \"(.*)\" page$")
    public void userIsNavigatedToPage(String link) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        home.validatePageUrl(link);
    }

    @When("^User Enters \"(.*)\",\"(.*)\",\"(.*)\",\"(.*)\" and \"(.*)\" in Subscribe form$")
    public void userEntersAndInSubscribeForm(String emailId, String firstName, String middleName, String secondName, String programOfStudy) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        home.setSubscribe(emailId, firstName, middleName, secondName, programOfStudy);
    }

    @And("^User Clicks on submit button$")
    public void userClicksOnSubmitButton(String submit) throws Exception {
        home.clickOnButton(submit);
    }
}