import './App.css';
import Carrossel from './components/carrossel.js';
import Navbar from './components/navbar.js';
import Dashboard from './components/dashboard.js';
import Equipe from './components/equipe.js';
import Footer from './components/footer.js';
import Inspiracao from './components/inspiracao.js';
import Beneficios from './components/beneficios.js';

function App() {
  return (
    <>
      <Navbar />
      <Beneficios />
      <Dashboard />
      <Inspiracao />
      <Carrossel />
      <Equipe />
      <Footer />
    </>
  );
}

export default App;
