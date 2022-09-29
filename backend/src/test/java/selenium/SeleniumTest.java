package selenium;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import selenium.pages.AdminPanelPage;
import selenium.pages.BookPage;
import selenium.pages.HomePage;
import selenium.pages.LoginPage;

class SeleniumTest {

    HomePage homePage = new HomePage();
    BookPage bookPage;
    LoginPage loginPage;
    AdminPanelPage adminPanelPage;

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
        loginPage.login("johns@pros.com", "JohnDoe123");
    }

    @Test
    @DisplayName("Add new book happy path")
    void AddNewBook() {
        loginPage = homePage.clickBtnLogin();
        loginPage.login("johns@pros.com", "JohnDoe123");
        adminPanelPage = homePage.clickBtnAdminPanel();
        adminPanelPage.clickBtnBooks();
        adminPanelPage.createBook("AAAAAAAAAAAAA",
                "Znachor",
                "5",
                "https://s.lubimyczytac.pl/upload/books/4963000/4963229/890867-352x500.jpg",
                "2010",
                "Znany chirurg, profesor Rafał Wilczur, dowiaduje się, że porzuciła go żona. " +
                        "Zrozpaczony mężczyzna upija się i pada ofiarą bandytów. Ciężko pobity doznaje amnezji. Nie wie," +
                        " kim jest, wędruje po wsiach i podejmuje się przypadkowych prac.");
    }

}
