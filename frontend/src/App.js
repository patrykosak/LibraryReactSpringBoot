import "./App.css";
import { Route, Routes,Navigate } from "react-router-dom";
import Books from "./pages/Books";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import AdminPanel from "./pages/AdminPanel";
import BookDetails from "./pages/BookDetails";
import Borrows from "./pages/Borrows";
import Login from "./pages/Login";
import Statue from "./pages/Statue";
import Contact from "./pages/Contact";
import AuthContext from "./contexts/AuthContext";
import { useContext } from "react";
import Payment from "./components/Payment";

function App() {

  const {roles} = useContext(AuthContext)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/adminpanel" element={roles?.includes("ADMIN") ? <AdminPanel /> : <Navigate to="/" /> } />
        <Route path="/borrows" element={roles?.includes("ADMIN") ? <Borrows /> : <Navigate to="/" /> } />
        <Route path="/login" element={!roles ? <Login /> : <Navigate to="/" /> } />
        <Route path="/statue" element={<Statue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/books/details/:id" element={<BookDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
