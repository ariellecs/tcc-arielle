import React, {useState } from 'react';
import './home.css'; //Adiciona folha de estilo padrão
//import texts from '../static/sites/site1/text.json';
import texts from '../static/sites/site2/text.json';
import '../static/sites/site2/style.css';
import supabase from '../config/supabaseClient';

function Home() {

  const {home} = texts;

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
    
    const insertData = async () => {
      const { data, error } = await supabase
      .from('subscribers')
      .insert([
        { name: formData.name, email: formData.email },
      ])
      .select()
    }
    insertData();
    
    setSubmitted(true);
  };

  return (
    <div className="Home">
      {/* Descrição */}
      <div 
        className="header" 
        style={{
          backgroundImage: home.backgroundImage ? `url(${home.backgroundImage})` : 'none', /* Se tem imagem de fundo, insere no topo do site */
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1>{home.title}</h1>
        <p>{home.subtitle}</p>
      </div>
      {/* Formulário */}
      <div className="form-container">
        {submitted ? (
          <h2>{home.thanksMessage}, {formData.name}!</h2>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{home.labelName}</label>
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
              <label htmlFor="email">{home.labelEmail}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">{home.sendButton}</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Home;