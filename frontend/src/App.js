import './App.css';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Books from './pages/Books';


function App() {
  return (
      <Routes>
        <Route path="/books" element={<Books />} />
      </Routes>
  );
}

export default App;
