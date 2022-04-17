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
<<<<<<< HEAD
import Payment from "./components/Payment";
=======
import MyBorrows from "./pages/MyBorrows";
>>>>>>> 73ce9d93cf0a6b05a68343ed8b387d4c5db3a79b

function App() {

  const {roles} = useContext(AuthContext)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/adminpanel" element={roles?.includes("ADMIN")||roles?.includes("WORKER") ? <AdminPanel /> : <Navigate to="/" /> } />
        <Route path="/borrows" element={roles?.includes("ADMIN")||roles?.includes("WORKER") ? <Borrows /> : <Navigate to="/" /> } />
        <Route path="/login" element={!roles ? <Login /> : <Navigate to="/" /> } />
        <Route path="/myborrows" element={roles ? <MyBorrows /> : null } />
        <Route path="/statue" element={<Statue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/books/details/:id" element={<BookDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
