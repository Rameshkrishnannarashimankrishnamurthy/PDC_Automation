package PageObjects;

import Utilities.BaseClass;
import Utilities.RequestClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;

public class TeamsPage extends BaseClass {

    public TeamsPage(WebDriver driver, WebDriverWait wait) {
        super(driver, wait);
        PageFactory.initElements(driver, this);
    }

   /* @FindBy(xpath = "//div[@class='content']/div[@class='header']")
    private WebElement OurVolunteers;*/

    String OurVolunteers = "//div[@class='content']/div[@class='header']";

    static List<WebElement> lst_name = new ArrayList<>();

    static List<String> name = new ArrayList<>();

    RequestClass request = new RequestClass();

    public void getOurVolunteers() throws Exception {
        try
        {
            lst_name = driver.findElements((By.xpath(OurVolunteers)));
            for(WebElement name_lst:lst_name)
            {
                name.add(name_lst.getText());
            }
            request.method();

        }
        catch (Exception e)
        {
            throw new Exception("unalbe to get our volunteers list from web");
        }
    }
}
