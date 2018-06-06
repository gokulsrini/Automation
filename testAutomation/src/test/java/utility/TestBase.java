package utility;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class TestBase {
	
	public static WebDriver driver;

	public static void initialization()
	{
		System.setProperty("webdriver.ie.driver", System.getProperty("user.dir") + "/WebDriver/IEDriverServer.exe");
		driver = new InternetExplorerDriver();
		
		driver.manage().window().maximize();
		
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
		
		driver.get("https://www.weightwatchers.com/us/");
		
		
		
	}
	
	
}
