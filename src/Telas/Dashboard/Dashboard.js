import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
      <p>Bem-vindo ao seu painel!</p>
      <div className="mt-4">
        <button className="btn btn-primary">Cadastrar</button>      
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
