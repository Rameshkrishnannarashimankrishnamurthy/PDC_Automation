package StepDefinitions;

import PageObjects.LoginPage;
import Utilities.PropertiesReader;
import Utilities.Util;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.io.IOException;

public class LoginPageSteps {


    private WebDriver driver = Hooks.driver;
    private WebDriverWait wait;
    LoginPage login = new LoginPage(driver, wait);
    Util util = new Util();

    public LoginPageSteps() throws Exception {

        PropertiesReader propertiesReader = new PropertiesReader();
        this.wait = new WebDriverWait(driver, propertiesReader.getTimeout());
    }

    @When("^User Click on Sign in with \"(.*)\" microsoft account$")
    public void userClickOnSignInWithMicrosoftButton(String username) throws Exception {
            login.clickSignInWithMicrosoftButton(username);
    }
}
