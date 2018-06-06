package stepDef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;
import pages.PageOne;
import utility.TestBase;

import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.FindBy;

public class Wwisteps extends TestBase {

PageOne pageone = new PageOne();
	
@Given("^user is on Weightwatchers page$")
public void user_is_on_Weightwatchers_page() throws Throwable  {
		TestBase.initialization();
		//Thread.sleep(2000);
		
	}

	@Then("^verify the given text$")
	public void verify_the_given_text() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String title = pageone.VerifyHomePage();
		System.out.println(title);
		Assert.assertEquals("Weight Loss Program, Recipes & Help | Weight Watchers", title);
		
//		boolean flag = pageone.VerifyHomePage();
//		
//		Assert.assertTrue(flag);
		
	}

	@Then("^click on find a meeting link$")
	public void click_on_find_a_meeting_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^verify if title contains desired text$")
	public void verify_if_title_contains_desired_text() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^click submit$")
	public void click_submit() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	
	
	
}
