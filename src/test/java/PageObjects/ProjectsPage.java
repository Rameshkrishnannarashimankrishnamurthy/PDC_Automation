package PageObjects;

import Utilities.BaseClass;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static Utilities.Utility.currentDate;

public class ProjectsPage extends BaseClass {

    public ProjectsPage(WebDriver driver, WebDriverWait wait) {
        super(driver, wait);
        PageFactory.initElements(driver, this);
    }

    Actions action = new Actions(driver);

    @FindBy(id = "searchbar-Projects")
    private WebElement searchProject;

    @FindBy(id = "projectTypeFilter-Projects")
    private WebElement projectType;

    @FindBy(id = "hostedByFilter-Projects")
    private WebElement hostedBy;

    @FindBy(xpath = "//div[@id='tagsFilter-Projects']")
    private WebElement tagsFilter;

    static String postedDate = "//div[@Class = 'ui segment']";

    @FindBy(id = "react-select-2-input")
    private WebElement lst_projectType;

    @FindBy(id = "react-select-3-input")
    private WebElement lst_hostedBy;

    @FindBy(id = "react-select-4-input")
    private WebElement lst_tag;

    String projecttype = "//div[contains(@id,'react-select-2-option-')]";

    String hostedby = "//div[contains(@id,'react-select-3-option-')]";

    String tag = "//div[contains(@id,'react-select-4-option-')]";

    static List<String> lst_PostedDate = new ArrayList<>();
    static List<String> lst_ValidTillDate = new ArrayList<>();

    static List<Date> list = new ArrayList<Date>();

    public void userSelectsProjecttype(String type) throws Exception {
        try {
            lst_projectType.click();
            Thread.sleep(2000);
            List<WebElement> elements = driver.findElements(By.xpath(projecttype));
            for (WebElement element : elements) {
                if (element.getText().contains(type)) {
                    element.click();
                    break;
                }
            }
            Thread.sleep(3000);
        } catch (Exception e) {
            throw new Exception("Unable to select project type from the drop down");
        }
    }

    public void userSelectsHostedBy(String hostedBy) throws Exception {
        try {
            lst_hostedBy.click();
            Thread.sleep(2000);
            List<WebElement> elements = driver.findElements(By.xpath(hostedby));
            for (WebElement element : elements) {
                if (element.getText().contains(hostedBy)) {
                    element.click();
                    break;
                }
            }
            Thread.sleep(3000);
        } catch (Exception e) {
            throw new Exception("Unable to select Hosted By from the drop down");
        }
    }

    public void userSelectsTags(String tags) throws Exception {
        try {
            lst_tag.click();
            Thread.sleep(2000);
            List<WebElement> elements = driver.findElements(By.xpath(tag));
            for (WebElement element : elements) {
                if (element.getText().contains(tags)) {
                    element.click();
                    break;
                }
            }
            Thread.sleep(3000);
        } catch (Exception e) {
            throw new Exception("Unable to select Tags from the drop down");
        }
    }

    public static void projectsFilteredResult(String projectType, String hostedBy) throws Exception {

        try {
            projectType = projectType.toString();
            hostedBy = hostedBy.toString();

            List<WebElement> elements = driver.findElements(By.xpath(postedDate));
            if (!elements.isEmpty()) {
                for (WebElement PostedDate : elements) {
                    String Posted_Date = PostedDate.getText();
                    int value = Posted_Date.indexOf("|");
                    String Posted = Posted_Date.substring(8, value - 1);
                    String Valid = Posted_Date.substring(value + 14, Posted_Date.length());
                    if (!Posted.isEmpty()) {
                        lst_PostedDate.add(Posted);
                    }
                    if (!Valid.isEmpty()) {
                        lst_ValidTillDate.add(Valid);
                    }
                }
                String date = currentDate();
                validatedProjectsResults(date, lst_PostedDate, lst_ValidTillDate, projectType);
            }
            else {
                Assert.assertTrue("The results displays empty page",true);
            }

        } catch (Exception e) {
            throw new Exception(e);
        }

    }

    public static void validatedProjectsResults(String date, List<String> lst_postedDate, List<String> lst_validTillDate, String projectType) throws Exception {
        boolean result = false;
        ArrayList<LocalDate> dateList = new ArrayList<>();
        switch (projectType) {
            case "Past Project":
                try {
                    LocalDate currentDate = LocalDate.parse(date, DateTimeFormatter.ofPattern("dd/MM/yyyy"));

                    for (String validTillDate : lst_validTillDate) {
                        dateList.add(LocalDate.parse(validTillDate));
                    }
                    for (LocalDate tillDate : dateList) {
                        if (tillDate.compareTo(currentDate) < 0)
                            result = true;
                        else
                            result = false;
                    }
                    Assert.assertTrue("All Projects displayed on not based on validtill date",result);
                }
                catch (Exception E)
                {
                    throw new Exception("Unable to validate dates of past projects");
                }
                break;
            default:
                Assert.fail();
        }
    }

}
