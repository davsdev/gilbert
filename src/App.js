import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Carrossel from './components/carrossel.js';
import Navbar from './components/navbar.js';
import Dashboard from './components/dashboard.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Dashboard />
      <Carrossel />
    </BrowserRouter>
  );
}

export default App;
