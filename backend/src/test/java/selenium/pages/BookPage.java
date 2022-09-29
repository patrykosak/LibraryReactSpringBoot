package selenium.pages;

import org.openqa.selenium.WebDriver;

public class BookPage extends BasePage {

    public BookPage(WebDriver webDriver) {
        super(webDriver);
        initElements();
    }
}