import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const usuario_id = localStorage.getItem('usuario_id');
  console.log(usuario_id);
  const token = localStorage.getItem('token');
  console.log(token);



  const handleNavigate = (path) => {
    if (user) {
      navigate(path);
    } else {
      alert('Por favor, faça login primeiro.');
      navigate('/login');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
      <p>Bem-vindo ao seu painel!</p>
      <div className="mt-4">
        <button className="btn btn-primary" onClick={() => handleNavigate('/CadastroImoveis')}>Cadastrar</button>
      </div>
      <div className="mt-4">
        <button className="btn btn-primary">Meus imóveis</button>
      </div>
      <div className="mt-4">
        <button className="btn btn-primary">Minhas ofertas</button>
      </div>
    </div>
  );
};

export default Dashboard;
