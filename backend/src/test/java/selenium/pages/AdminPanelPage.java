package selenium.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AdminPanelPage extends BasePage {

    public AdminPanelPage(WebDriver driver) {
        super(driver);
        initElements();
    }

    private final String BTN_BOOKS_ID = "left-tabs-example-tab-books";
    private final String INPUT_ISBN = "inputISBN";
    private final String INPUT_TITLE = "inputTitle";
    private final String INPUT_AMOUNT = "inputAmount";
    private final String INPUT_URL = "inputUrl";
    private final String INPUT_RELEASE_YEAR = "relYear";
    private final String INPUT_DESCRIPTION = "inputDescription";
    private final String SELECT_AUTHOR = "selectAuthor";
    private final String SELECT_CATEGORY = "selectCategory";
    private final String SELECT_PUBLISHING_HOUSE = "selectHouse";
    private final String BTN_ADD_BOOK = "addBook";


    @FindBy(how = How.ID, using = BTN_BOOKS_ID)
    private WebElement btnBooks;
    @FindBy(how = How.ID, using = INPUT_ISBN)
    private WebElement inputISBN;
    @FindBy(how = How.ID, using = INPUT_TITLE)
    private WebElement inputTitle;
    @FindBy(how = How.ID, using = INPUT_AMOUNT)
    private WebElement inputAmount;
    @FindBy(how = How.ID, using = INPUT_URL)
    private WebElement inputUrl;
    @FindBy(how = How.ID, using = INPUT_RELEASE_YEAR)
    private WebElement inputReleaseYear;
    @FindBy(how = How.ID, using = INPUT_DESCRIPTION)
    private WebElement inputDescription;

    @FindBy(how = How.ID, using = SELECT_AUTHOR)
    private WebElement selectAuthor;

    @FindBy(how = How.ID, using = SELECT_CATEGORY)
    private WebElement selectCategory;

    @FindBy(how = How.ID, using = SELECT_PUBLISHING_HOUSE)
    private WebElement selectPublishingHouse;

    @FindBy(how = How.ID, using = BTN_ADD_BOOK)
    private WebElement btnAddBook;

    public void clickBtnBooks() {
        waitUntil(By.id(BTN_BOOKS_ID));
        btnBooks.click();
    }

    public void createBook(String ISBN, String title, String amount, String url, String releaseYear, String description) {
        waitUntil(By.id(INPUT_ISBN));
        Actions action = new Actions(driver);
        action.click(selectPublishingHouse)
                .sendKeys(Keys.ARROW_DOWN)
                .sendKeys(Keys.ENTER)
                .click()
                .perform();
        action.click(selectAuthor)
                .sendKeys(Keys.ARROW_DOWN)
                .sendKeys(Keys.ENTER)
                .click()
                .perform();
        inputISBN.sendKeys(ISBN);
        inputTitle.sendKeys(title);
        inputAmount.sendKeys(amount);
        inputUrl.sendKeys(url);
        inputReleaseYear.sendKeys(releaseYear);
        inputDescription.sendKeys(description);
        Actions action2 = new Actions(driver);
        action2.click(selectCategory)
                .sendKeys(Keys.ENTER)
                .click()
                .perform();
        btnAddBook.submit();
    }

}
