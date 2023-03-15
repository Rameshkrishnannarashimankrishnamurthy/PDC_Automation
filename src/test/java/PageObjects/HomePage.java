package PageObjects;

import Utilities.BaseClass;
import Utilities.PropertiesReader;
import Utilities.RequestClass;
import Utilities.Utility;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;


public class HomePage extends BaseClass {

    public HomePage(WebDriver driver, WebDriverWait wait) {

        super(driver, wait);
        PageFactory.initElements(driver, this);
    }

    RequestClass request = new RequestClass();

    @FindBy(xpath = "//div[@class='text']")
    private WebElement theTeamheader;

    @FindBy(xpath = "//*[@id='PDCHome-header']")
    private WebElement Pdcheaderlogo;

    @FindBy(id = "CDC-header")
    private WebElement lnk_CareerDevelopmentCentre;

    @FindBy(id = "forStudents-header")
    private WebElement lnk_ForStudents;

    @FindBy(id = "Events-header")
    private WebElement lnk_Events;

    @FindBy(id = "Projects-header")
    private WebElement lnk_Projects;

    @FindBy(id = "Feedback-header")
    private WebElement lnk_Feedback;

    @FindBy(id = "joinTeam-header")
    private WebElement btn_JointheTeam;

    @FindBy(xpath = "//div[@class='right item']/button[@class = 'ui basic inverted button']")
    private WebElement btn_Login;

    @FindBy(xpath = "//input[@placeholder = 'Enter First Name']")
    private WebElement txt_firstName;

    @FindBy(xpath = "//input[@placeholder = 'Enter Last Name']")
    private WebElement txt_lastName;

    @FindBy(xpath = "//input[@placeholder = 'Enter Email']")
    private WebElement txt_email;

    @FindBy(xpath = "//input[@placeholder = 'Enter Message']")
    private WebElement txt_message;

    @FindBy(xpath = "//div[@id = 'category']")
    private WebElement lst_category;

    @FindBy(xpath = "//div[@class = 'visible menu transition']")
    private WebElement lst_categoryvisible;

    @FindBy(xpath = "//button[@id = 'submitQuery-homepage']")
    private WebElement btn_sendMessage;

    @FindBy(xpath = "//*[@class='takeMeThereButton']")
    private WebElement btn_popUp;

    String lst_categoryvalues = "//div[@id = 'category']/div[2]/div[@role='option']";
    String acceptCookies = "//button[@id='rcc-confirm-button' and @aria-label='Accept cookies']";


    public boolean homePageIsDisplayed() throws Exception {
        try {
            boolean visible = Pdcheaderlogo.isDisplayed();
            /*if(driver.findElement(By.xpath(acceptCookies)).isDisplayed()) {
                Utility.waituntillElementVisibleAndClick(acceptCookies);
            }
            if (btn_popUp.isDisplayed())
            {
                btn_popUp.click();
            }*/
            return visible;
        } catch (Exception e) {
            throw new Exception(e);
        }
    }

    public void navigatebetweenheader(String pagelink) throws Exception {

        switch (pagelink) {
            case "Career Development Centre":
                try {
                    lnk_CareerDevelopmentCentre.click();
                } catch (Exception e) {
                    throw new Exception("Unable to navigate to Career Development Centre");
                }
                break;
            case "For Students":
                try {
                    lnk_ForStudents.click();
                } catch (Exception e) {
                    throw new Exception("Unable to navigate to For Students Page");
                }
                break;
            case "Events":
                try {
                    lnk_Events.click();
                } catch (Exception e) {
                    throw new Exception("Unable to navigate to Events Page");
                }
                break;
            case "Projects":
                try {
                    lnk_Projects.click();
                } catch (Exception e) {
                    throw new Exception("Unable to navigate to Projects Page");
                }
                break;
            case "Feedback":
                try {
                    lnk_Feedback.click();
                } catch (Exception e) {
                    throw new Exception("Unable to navigate to Feedback Page");
                }
                break;
            case "Join the Team":
                try {
                    btn_JointheTeam.click();
                } catch (Exception e) {
                    throw new Exception("Unable to navigate to Join the Team page");
                }
                break;
            case "Login":
                try
                {
                    btn_Login.click();
                }
                catch (Exception e) {
                    throw new Exception("Unable to navigate to Login page");
                }
                break;
        }
        Thread.sleep(5000);
    }

    public void setContactUs(String firstName, String secondName, String category, String emailId, String message) throws Exception {
        try {

            Utility.scrollUntillElementVisible(btn_sendMessage);
            txt_firstName.sendKeys(firstName);
            txt_lastName.sendKeys(secondName);
            txt_email.sendKeys(emailId);
            txt_message.sendKeys(message);
            lst_category.click();
            if (lst_categoryvisible.isDisplayed()) {
                List<WebElement> categoryValues = driver.findElements(By.xpath(lst_categoryvalues));

                for (WebElement Value : categoryValues) {
                    String value = Value.getText();
                    if (value.contentEquals(category))
                        Value.click();
                }
            }

        } catch (Exception e) {
            throw new Exception("Unable to Submit Contact Us form");
        }
    }

    public void setContactUsAPI(String firstName, String secondName, String category, String emailId, String message) throws Exception {
        try {

            String query = "{\"fname\":\"%s\",\"lname\":\"%s\",\"category\":\"%s\",\"email\":\"%s\",\"message\":\"%s\"}";
            query = String.format(query, firstName, secondName, category, emailId, message);
            String requestMessage = request.postMethod(PropertiesReader.getValue("ContactUs"), query);
            System.out.println(requestMessage);

        } catch (Exception e) {
            throw new Exception("Unable to Submit Contact Us form");
        }
    }

    public void sendbutton() throws Exception {
        Utility.scrollUntillElementVisible(btn_sendMessage);
        btn_sendMessage.click();
    }

    public void selectTheTeam(String team) throws Exception {
        try {
            theTeamheader.click();
            if(driver.findElement(By.xpath("//div[@class='menu transition visible']")).isDisplayed())
            {
                team = team.replaceAll("\\s", "");
                String lst_teamdropdown = "//div[@name='"+team+"']";
                driver.findElement(By.xpath(lst_teamdropdown)).click();
            }
        }
        catch (Exception e)
        {
            throw new Exception("Unable to select the team from the drop down");
        }
    }
}