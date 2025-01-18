import React, { useState } from 'react';
import './home.css'; //Adiciona folha de estilo


function Home() {

  const backgroundImage = null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Atualiza os dados do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manipula o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    setSubmitted(true);
  };

  return (
    <div className="Home">
      {/* Descrição */}
      <div 
        className="header" 
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none', /* Se tem imagem de fundo, insere no topo do site */
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1>Bem-vindo ao nosso site!</h1>
        <p>Inscreva-se para receber as nossas últimas atualizações diretamente no seu email.</p>
      </div>
      {/* Formulário */}
      <div className="form-container">
        {submitted ? (
          <h2>Obrigado por se inscrever, {formData.name}!</h2>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Inscrever-se</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Home;