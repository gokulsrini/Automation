package pages;

import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import stepDef.Wwisteps;
import utility.TestBase;

public class PageOne extends TestBase {
	
	
	//@FindBy(xpath="//span[contains(.,'Weight Watchers Home')]")
	@FindBy(xpath = "//a[@class='find-a-meeting']")
	WebElement lnkWeightpage;
	
	//To initialize page object
	public PageOne()
	{
		PageFactory.initElements(driver, this);
	}
	
	public String VerifyHomePage()
	{
		try {
			TimeUnit.SECONDS.sleep(2);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return driver.getTitle();
		//System.out.println(jim);
		
	}
	
	

}
