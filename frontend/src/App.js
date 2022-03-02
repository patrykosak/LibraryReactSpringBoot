import "./App.css";
import { Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import AdminPanel from "./pages/AdminPanel";
import BookDetails from "./pages/BookDetails";
import Borrows from "./pages/Borrows";
import Login from "./pages/Login";
import Statue from "./pages/Statue";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/borrows" element={<Borrows />} />
        <Route path="/login" element={<Login />} />
        <Route path="/statue" element={<Statue />} />
        <Route path="/books/details/:id" element={<BookDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
