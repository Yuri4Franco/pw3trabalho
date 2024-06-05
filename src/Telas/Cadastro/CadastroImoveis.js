import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import axios from 'axios';

const CadastroImoveis = () => {
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const [descricao, setDescricao] = useState('');
  const [quartos, setQuartos] = useState('');
  const [vagas, setVagas] = useState('');
  const [imagem, setImagem] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = localStorage.getItem('userId'); // Recupera o ID do usuário do localStorage
    const token = localStorage.getItem('token'); // Recupera o token do localStorage

    try {
      setSpinner(true);
      const formData = new FormData();
      formData.append('descricao', descricao);
      formData.append('quartos', quartos);
      formData.append('vagas', vagas);
      formData.append('imagem', imagem);
      formData.append('userId', userId); // Adiciona o ID do usuário ao formulário

      const response = await axios.post('http://localhost:8080/public/cadastro-imoveis', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}` // Adiciona o token no cabeçalho
        },
      });

      if (response.status === 200) {
        navigate('/sucesso');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSpinner(false);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="card w-100" style={{ maxWidth: '420px' }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">Cadastrar Imóvel</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">Descrição:</label>
              <input
                type="text"
                className="form-control"
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quartos" className="form-label">Quartos:</label>
              <input
                type="number"
                className="form-control"
                id="quartos"
                value={quartos}
                onChange={(e) => setQuartos(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="vagas" className="form-label">Vagas:</label>
              <input
                type="number"
                className="form-control"
                id="vagas"
                value={vagas}
                onChange={(e) => setVagas(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="imagem" className="form-label">Fotos:</label>
              <input
                type="file"
                className="form-control"
                id="imagem"
                onChange={(e) => setImagem(e.target.files[0])}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
          </form>

          {spinner && (
            <div className="d-flex justify-content-center mt-4">
              <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#0d6efd"
                ariaLabel="tail-spin-loading"
                radius="1"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CadastroImoveis;
