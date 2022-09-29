package selenium.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import selenium.config.WebDriverWrapper;

import static selenium.common.Urls.*;

public class HomePage extends BasePage {

    public HomePage() {
        super(WebDriverWrapper.initChromeDriver());
        navigate(HOME);
        initElements();
    }

    private final String BOOKS_BUTTON_ID = "booksLink";
    private final String LOGIN_BUTTON_ID = "loginButton";
    private final String BTN_ADMIN_PANEL = "adminPanel";

    @FindBy(how = How.ID, using = BTN_ADMIN_PANEL)
    private WebElement btnAdminPanel;

    @FindBy(how = How.ID, using = BOOKS_BUTTON_ID)
    private WebElement btnBooks;
    @FindBy(how = How.ID, using = LOGIN_BUTTON_ID)
    private WebElement btnLogin;

    public BookPage clickBtnBooks() {
        waitUntil(By.id(BOOKS_BUTTON_ID));
        btnBooks.click();
        return new BookPage(driver);
    }

    public AdminPanelPage clickBtnAdminPanel() {
        waitUntil(By.id(BTN_ADMIN_PANEL));
        btnAdminPanel.click();
        return new AdminPanelPage(driver);
    }

    public LoginPage clickBtnLogin() {
        waitUntil(By.id(LOGIN_BUTTON_ID));
        btnLogin.click();
        return new LoginPage(driver);
    }

}