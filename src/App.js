import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Carrossel from './components/carrossel.js';
import Navbar from './components/navbar.js';
import Dashboard from './components/dashboard.js';
import Equipe from './components/equipe.js';
import Footer from './components/footer.js';
import Inspiracao from './components/inspiracao.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Dashboard />
      <Inspiracao />
      <Carrossel />
      <Equipe id="equipe" /> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
