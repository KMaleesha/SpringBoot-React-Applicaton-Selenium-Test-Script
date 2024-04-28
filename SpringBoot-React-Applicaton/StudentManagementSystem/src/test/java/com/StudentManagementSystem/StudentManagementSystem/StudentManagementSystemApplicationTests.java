package com.StudentManagementSystem.StudentManagementSystem;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class StudentManagementSystemApplicationTests {

	@Test
	void testSaveStudent() {

		System.out.println("Starting SaveStudentTest...");

		System.setProperty("webdriver.chrome.driver","C:\\browserDrivers\\chromedriver-win64\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:8080/addstudent");

		String indexNo = "IT12345678";
		String name = "Kamal Perera";
		String address = "Colombo, SriLanka";
		String nic = "1234567890v";
		String contactNo = "1234567890";

		WebElement indexNoInput = driver.findElement(By.id("indexNo"));
		WebElement nameInput = driver.findElement(By.id("name"));
		WebElement addressInput = driver.findElement(By.id("address"));
		WebElement nicInput = driver.findElement(By.id("nic"));
		WebElement contactNoInput = driver.findElement(By.id("contactNo"));

		indexNoInput.sendKeys(indexNo);
		nameInput.sendKeys(name);
		addressInput.sendKeys(address);
		nicInput.sendKeys(nic);
		contactNoInput.sendKeys(contactNo);

		WebElement registerButton = driver.findElement(By.id("Register"));
		registerButton.click();

		WebElement studentIndexNo = driver.findElement(By.id("studentIndexNo"));
		WebElement studentName = driver.findElement(By.id("studentName"));
		WebElement studentAddress = driver.findElement(By.id("studentAddress"));
		WebElement studentNIC = driver.findElement(By.id("studentNIC"));
		WebElement studentContactNo = driver.findElement(By.id("studentContactNo"));

		assertEquals(name, studentName.getText());
		assertEquals(address, studentAddress.getText());
		assertEquals(indexNo, studentIndexNo.getText());
		assertEquals(nic, studentNIC.getText());
		assertEquals(contactNo, studentContactNo.getText());

		System.out.println("SaveStudentTest completed.");

		driver.quit();

	}

}
