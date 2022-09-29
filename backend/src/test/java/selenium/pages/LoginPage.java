package selenium.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage extends BasePage {

    public LoginPage(WebDriver driver) {
        super(driver);
        initElements();
    }

    private final String INPUT_EMAIL = "email";
    private final String INPUT_PASSWORD = "password";
    private final String BTN_LOGIN = "kc-login";

    @FindBy(how = How.ID, using = INPUT_EMAIL)
    private WebElement inputEmail;

    @FindBy(how = How.ID, using = INPUT_PASSWORD)
    private WebElement inputPassword;

    @FindBy(how = How.ID_OR_NAME, using = BTN_LOGIN)
    private WebElement btnLogin;

    public void login(String username, String password) {
        waitUntil(By.id(INPUT_EMAIL));
        inputEmail.sendKeys(username);
        inputPassword.sendKeys(password);
        btnLogin.submit();
    }

}
