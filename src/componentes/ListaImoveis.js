import React from 'react';
import { FaBed, FaUser } from 'react-icons/fa';
import '../App.css'; 

const ImovelCard = ({ imovel }) => {
  const { descricao, quartos, vagas, imagem } = imovel;

  return (
    <div className="card">
      <img src={imagem} className="card-img-top" alt="Imagem do imóvel" />
      <div className="card-body">
        <h5 className="card-title">{descricao}</h5>
        <div className="card-text">
          <FaBed /> {quartos} Quartos
        </div>
        <div className="card-text">
          <FaUser /> {vagas} Vagas
        </div>
      </div>
    </div>
  );
};

export default ImovelCard;
