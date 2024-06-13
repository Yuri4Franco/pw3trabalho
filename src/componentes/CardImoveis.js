import React from 'react';
import { FaBed, FaUser } from 'react-icons/fa';

const ImovelCard = ({ imovel }) => {
  const { descricao, quartos, vagas, imagem } = imovel;

  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={imagem} className="card-img-top" alt="Imagem do imóvel" />
      <div className="card-body">
        <h5 className="card-title">{descricao}</h5>
        <p className="card-text">
          <FaBed /> {quartos} Quartos
        </p>
        <p className="card-text">
          <FaUser /> {vagas} Vagas
        </p>
      </div>
    </div>
  );
};

export default ImovelCard;

