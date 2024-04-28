package Test;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

public class Login {

    private ChromeDriver driver;

    public Login(ChromeDriver driver) {
        this.driver = driver;
    }

    public void login(String email, String password) {
        driver.get("http://localhost:3000/login");

        driver.findElement(By.id("email-login")).sendKeys(email);
        driver.findElement(By.id("password-login")).sendKeys(password);

        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/div[3]/button")).click();
    }
}
