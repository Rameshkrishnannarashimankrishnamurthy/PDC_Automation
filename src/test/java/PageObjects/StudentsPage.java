package PageObjects;

import PageActions.StudentsPageActions;
import Utilities.BaseClass;
import Utilities.Utility;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public class StudentsPage extends BaseClass {

    public StudentsPage(WebDriver driver, WebDriverWait wait) {
        super(driver, wait);
        PageFactory.initElements(driver, this);
    }

    private WebDriverWait wait;

    StudentsPageActions spa = new StudentsPageActions(driver,wait);
    Utility utility = new Utility();

    @FindBy(id = "joinTeam-forStudents")
    private WebElement lnk_joinTeamforStudents;

    @FindBy(id = "createActivateAssociation-forStudents")
    private WebElement lnk_Create_Activate_Association;

    @FindBy(id = "uOttawaStudentAssociations-forStudents")
    private WebElement lnk_uOttawaStudentAssociationsforStudents;

    @FindBy(id = "FSWEPPrograms-forStudents")
    private WebElement lnk_FSWEPProgramsforStudents;

    @FindBy(id = "usefulResources-forStudents")
    private WebElement lnk_usefulResourcesforStudents;

    @FindBy(id = "resumeWritingGuidelines-forStudents")
    private WebElement lnk_resumeWritingGuidelinesforStudents;

    @FindBy(id = "resumeReviewSession-forStudents")
    private WebElement lnk_resumeReviewSessionforStudents;

    @FindBy(xpath = "//a[contains(@href,'industry')]")
    private WebElement lnk_industryInternshipProject;

    @FindBy(xpath = "//a[contains(@href,'FAQs')]")
    private WebElement lnk_fAQs;

    public void pageItems(String item) throws Exception {

        switch (item)
        {
            case "Join the club as a Volunteer":
                try {
                    lnk_joinTeamforStudents.click();
                    spa.joinTheClubAsAVolunteer();
                }
                catch (Exception e)
                {
                    throw new Exception("Unable to navigate to join the team page");
                }
                break;
            case "Create or Activate Association":
                lnk_Create_Activate_Association.click();
                utility.pageWait();
                break;
            case "uOttawa Student Associations":
                lnk_uOttawaStudentAssociationsforStudents.click();
                utility.pageWait();
                break;
            case "Programs Recognized by FSWEP":
                lnk_FSWEPProgramsforStudents.click();
                utility.pageWait();
                break;
            case "Useful Resources for New Students":
                lnk_usefulResourcesforStudents.click();
                utility.pageWait();
                break;
            case "Industry Internship Project":
                lnk_industryInternshipProject.click();
                utility.pageWait();
                break;
            case "Resume Writing Guidelines":
                lnk_resumeWritingGuidelinesforStudents.click();
                utility.pageWait();
                break;
            case "Ask for Resume review session with us":
                lnk_resumeReviewSessionforStudents.click();
                break;
            case "Frequently Asked Questions":
                lnk_fAQs.click();
                utility.pageWait();
                break;
        }


    }
}
