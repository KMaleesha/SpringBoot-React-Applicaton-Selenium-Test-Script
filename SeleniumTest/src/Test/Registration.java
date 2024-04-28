package Test;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

public class Registration {

    private ChromeDriver driver;

    public Registration(ChromeDriver driver) {
        this.driver = driver;
    }

    public void registerStudent(String indexNo, String nicNo, String name, String address, String contactNo, String email, String password) {
        driver.get("http://localhost:3000/addStudent");

        driver.findElement(By.id("index-no")).sendKeys(indexNo);
        driver.findElement(By.id("nic-no")).sendKeys(nicNo);
        driver.findElement(By.id("name")).sendKeys(name);
        driver.findElement(By.id("address")).sendKeys(address);
        driver.findElement(By.id("contact-no")).sendKeys(contactNo);
        driver.findElement(By.id("email")).sendKeys(email);
        driver.findElement(By.id("password")).sendKeys(password);

        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div[2]/div/button[1]")).click();
    }
}
