package PageObjects;

import Enums.Context;
import Utilities.BaseClass;
import Utilities.PropertiesReader;
import Utilities.RequestClass;
import Utilities.Util;
import org.junit.Assert;
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

    Util util = new Util();

    String lst_OurVolunteers = "//div[@class='content']/div[@class='header']";

    String lst_OurTeam = "//*[@class='titleName']";

    String lst_alumni = "//*[@class='titleFont']";

    static List<WebElement> lst_name = new ArrayList<>();

    static List<String> name = new ArrayList<>();
    static List<String> result_lst = new ArrayList<>();

    RequestClass request = new RequestClass();

    public void getOurVolunteers(String team) throws Exception {
        try {
            String Team_Value = null;
            String property = null;
            String message;
            name.clear();
            lst_name.clear();
            if (team.contentEquals("Our Volunteers")) {
                Team_Value = "ourVolunteers";
                lst_name = driver.findElements((By.xpath(lst_OurVolunteers)));
            }
            else if (team.contentEquals("Alumni"))
            {
                Team_Value = "allAlumni";
                lst_name = driver.findElements((By.xpath(lst_alumni)));
                property = "founder";
            }else if(team.contentEquals("Team"))
            {
                Team_Value = "ourTeam";
                lst_name = driver.findElements((By.xpath(lst_OurTeam)));
            }
            for (WebElement name_lst : lst_name) {
                name.add(name_lst.getText());
            }
            message = request.getMethod(PropertiesReader.getValue(Team_Value));
            result_lst = util.stringToJsonToList(message,property);

            Assert.assertTrue("There is mismatch in the volunteer displayed", name.containsAll(result_lst));

        } catch (Exception e) {
            throw new Exception("Unable to get our volunteers list from web");
        }
    }
}