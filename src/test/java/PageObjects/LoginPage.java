package PageObjects;

import Utilities.BaseClass;
import Utilities.Util;
import Utilities.Utility;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import static Utilities.Utility.waituntillElementVisibleByXpath;

public class LoginPage extends BaseClass {

    public LoginPage(WebDriver driver, WebDriverWait wait) {

        super(driver, wait);
        PageFactory.initElements(driver, this);
    }

    Util util = new Util();
   // Utility utility = new Utility();

    @FindBy(xpath = "//*[@class='microsoft icon']")
    private WebElement btn_student;

    @FindBy(xpath = "//*[@class='ui button ui linkedin button']")
    @CacheLookup
    private WebElement btn_Employers;

    @FindBy(xpath = "//input[@type='email']")
    private WebElement txt_Email;

    @FindBy(xpath = "//input[@type='submit']")
    private WebElement btn_Next;

    @FindBy(xpath = "//input[@type='password']")
    private WebElement txt_Password;

    @FindBy(xpath = "//input[@type='submit']")
    private WebElement btn_Signin;

    @FindBy(xpath = "//input[@name='DontShowAgain']")
    private WebElement chk_DontShowAgain;

    @FindBy(xpath = "//input[@type='submit']")
    private WebElement btn_Yes;

    String box = "//*[@id = 'lightbox']";

    public void clickSignInWithMicrosoftButton(String userName) throws Exception {

        try {
           // WaitUntilElementVisible(btn_student);
           // btn_student.isEnabled();
            btn_student.click();
            enterTheCredetials(userName);
        }
        catch (Exception e)
        {
            throw new Exception("Unable to Click on Sign in with microsoft account");
        }

    }

    public void enterTheCredetials(String userName) throws Exception {
        try {
            txt_Email.sendKeys(userName);
            btn_Next.click();
            Thread.sleep(5000);
            txt_Password.sendKeys(util.jsonRead(userName));
            Thread.sleep(5000);
            btn_Signin.click();
            waituntillElementVisibleByXpath(box);
            Thread.sleep(10000);
            waituntillElementVisibleByXpath(box);
            chk_DontShowAgain.click();
            btn_Yes.click();
        }
        catch (Exception e)
        {
            throw new Exception(e);
        }
    }

}