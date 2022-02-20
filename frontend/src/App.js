import './App.css';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Layout from './components/Layout';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/books" element={<Books />} />
      </Routes>
      </Layout>
  );
}

export default App;
