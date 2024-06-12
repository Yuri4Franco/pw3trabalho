import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './telas/home/home'
import Cadastro from './telas/cadastro/cadastro';
import Login from './telas/login/login';
import Dashboard from './telas/dashboard/dashboard';
import CadastroImoveis from './telas/cadastro/cadastroImoveis';
import { AuthProvider } from './auth/AuthContext';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/CadastroImoveis" element={<CadastroImoveis />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
