package StepDefinitions;

import PageObjects.StudentsPage;
import Utilities.PropertiesReader;
import cucumber.api.PendingException;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class StudentsPageSteps {

    private WebDriver driver = Hooks.driver;
    private WebDriverWait wait;
    StudentsPage studentsPage = new StudentsPage(driver, wait);

    public StudentsPageSteps() throws Exception {

        PropertiesReader propertiesReader = new PropertiesReader();
        this.wait = new WebDriverWait(driver, propertiesReader.getTimeout());
    }

    @When("^User Click on \"(.*)\" from \"(.*)\" in students page$")
    public void userClickOnFrom(String item,String pagelink) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        studentsPage.pageItems(item);
    }
}
