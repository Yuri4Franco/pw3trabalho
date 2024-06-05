import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Telas/Home/Home'
import Cadastro from './Telas/Cadastro/Cadastro';
import Login from './Telas/Login/Login';
import Dashboard from './Telas/Dashboard/Dashboard';
import CadastroImoveis from './Telas/Cadastro/CadastroImoveis';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/CadastroImoveis" element={<CadastroImoveis />} />
      </Routes>
    </Router>
  );
}

export default App;
