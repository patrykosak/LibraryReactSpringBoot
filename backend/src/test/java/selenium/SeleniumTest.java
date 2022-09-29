package selenium;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import selenium.pages.BookPage;
import selenium.pages.HomePage;
import selenium.pages.LoginPage;

class SeleniumTest {

    HomePage homePage = new HomePage();
    BookPage bookPage;
    LoginPage loginPage;

    @Test
    @DisplayName("Navigate to books page happy path")
    void NavigateToBooksPage() {
        homePage.clickBtnBooks();
    }

    @Test
    @DisplayName("Navigate to login page happy path")
    void NavigateToLoginPage() {
        homePage.clickBtnLogin();
    }

    @Test
    @DisplayName("Login happy path")
    void Login() {
        loginPage = homePage.clickBtnLogin();
        loginPage.login("john@pros.com","JohnDoe123");
    }


}
