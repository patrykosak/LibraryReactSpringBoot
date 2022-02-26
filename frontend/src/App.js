import "./App.css";
import { Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import AdminPanel from "./pages/AdminPanel";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/books/details/:id" element={<BookDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
