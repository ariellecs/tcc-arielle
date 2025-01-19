import React, { useEffect, useState } from 'react';
import './home.css'; //Adiciona folha de estilo
import supabase from '../config/supabaseClient';

function Home() {

  const [fetchError, setFetchError] = useState(null);
  const [sites, setSites] = useState(null);

  useEffect(() => {
    const fetchSites = async () => {
      const {data, error} = await supabase.from('sites').select('*');

      if (error){
        setFetchError('Could not fetch the sites');
        setSites(null);
        console.log(error)
      }
      if (data){
        setSites(data);
        setFetchError(null);
      }
    }

    fetchSites();
  }, []);

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

  console.log(sites);

  return (
    <div className="Home">
      {fetchError && (<p>{fetchError}</p>)}
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
        <h1>title</h1>
        <p>subtitle</p>
      </div>
      {/* Formulário */}
      <div className="form-container">
        {submitted ? (
          <h2>thanksMessage, {formData.name}!</h2>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">labelName</label>
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
              <label htmlFor="email">labelEmail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">sendButton</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Home;