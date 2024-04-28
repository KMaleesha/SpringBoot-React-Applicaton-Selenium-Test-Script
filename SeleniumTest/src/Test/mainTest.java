package Test;

import org.openqa.selenium.chrome.ChromeDriver;

public class mainTest {

    public static void main(String[] args) {

        System.setProperty("webdriver.chrome.driver", "C:\\browserDrivers\\chromedriver-win64\\chromedriver.exe");
        ChromeDriver driver = new ChromeDriver();

        Registration registration = new Registration(driver);
        Login login = new Login(driver);

        System.out.println("Starting Student Registration test.");
        registration.registerStudent("IT12345678", "Kamal Perera", "Colombo, SriLanka", "1234567890v", "1234567890", "name@gmail.com", "secret_sauce");
        System.out.println("Student Registration Test Completed.");

        System.out.println("Starting Student Login Test.");
        login.login("name@gmail.com", "secret_sauce");
        System.out.println("Student Login Test Completed.");

        driver.close();
    }
}
