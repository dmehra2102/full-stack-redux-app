import { Route, Routes } from 'react-router';
import Navbar from './Navbar';
import './App.css';
import Books from './components/Books';
import Login from './components/Login';
import SingleBooks from './components/SingleBooks';
import Editbook from './components/Editbook';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<SingleBooks />} />
        <Route path="/books/:id/edit" element={<PrivateComponent><Editbook /></PrivateComponent>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </div>
  );
}

export default App;
