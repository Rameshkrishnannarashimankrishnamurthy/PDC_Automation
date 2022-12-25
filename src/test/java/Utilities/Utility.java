package Utilities;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import static StepDefinitions.Hooks.driver;

public class Utility {

    static WebDriverWait wait = new WebDriverWait(driver, 10);
    public static void scrollUntillElementVisible(WebElement Element)
    {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView();", Element);
    }

    public static void waituntillElementVisibleAndClick(String Element)
    {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Element))).click();
    }

    public static void scrollUntillElementVisiblebyXpath(String Xpathvalue)
    {
        WebElement Xpath = driver.findElement(By.xpath(Xpathvalue));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView();", Xpath);
    }

    public static void waituntillElementVisibleByXpath(String Xpathvalue)
    {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Xpathvalue)));
    }

    public static String currentDate()
    {

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDateTime now = LocalDateTime.now();
        String currentDate = dtf.format(now).toString();
        return currentDate;
    }

}
