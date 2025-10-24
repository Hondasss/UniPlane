import React, { useState, useEffect } from 'react';
// Importamos as funções de API que criamos
import { getAirports, createAirport } from '../../services/airportsApi';

// Este é o estado inicial do nosso formulário (vazio)
const initialState = {
  sigla: '',
  nome: '',
  cidade: '',
  estado: '',
  pas: '',
};

function AdminAirportsPage() {
  // --- ESTADO (STATE) ---
  // 'airports' guarda a lista de aeroportos que vem da API
  const [airports, setAirports] = useState([]);
  
  // 'formData' guarda o que o usuário está digitando no formulário
  const [formData, setFormData] = useState(initialState);
  
  // 'error' guarda mensagens de erro para mostrar ao usuário
  const [error, setError] = useState(null);

  // --- EFEITOS (EFFECTS) ---
  // useEffect com '[]' no final roda UMA VEZ quando a página carrega.
  // Perfeito para buscar os dados iniciais.
  useEffect(() => {
    loadAirports();
  }, []);

  // --- FUNÇÕES DE DADOS ---
  // Função para carregar a lista de aeroportos da API
  const loadAirports = async () => {
    try {
      const data = await getAirports();
      setAirports(data); // Atualiza o estado com a lista
      setError(null); // Limpa erros antigos
    } catch (err) {
      setError('Falha ao carregar a lista de aeroportos.');
      console.error(err);
    }
  };

  // --- FUNÇÕES DE EVENTO (HANDLERS) ---
  // Chamada toda vez que o usuário digita em um 'input'
  const handleChange = (e) => {
    // 'name' é o nome do input (ex: "sigla")
    // 'value' é o que o usuário digitou
    const { name, value } = e.target;
    
    // Atualiza o estado do formulário
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Chamada quando o usuário clica no botão "Adicionar Aeroporto"
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    setError(null); // Limpa erros

    try {
      // Envia os dados do formulário para a API
      await createAirport(formData);
      
      alert('Aeroporto criado com sucesso!'); // Feedback
      setFormData(initialState); // Limpa o formulário
      loadAirports(); // Recarrega a lista para mostrar o novo aeroporto
    } catch (err) {
      // Mostra o erro da API (ex: erro de validação do NestJS)
      const errorMsg = err.response?.data?.message || 'Falha ao criar aeroporto.';
      setError(Array.isArray(errorMsg) ? errorMsg.join(', ') : errorMsg);
    }
  };

  // --- RENDERIZAÇÃO (JSX) ---
  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestão de Aeroportos (Requisito F7)</h1>

      {/* Formulário de Criação */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <h3>Adicionar Novo Aeroporto</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            name="sigla"
            value={formData.sigla}
            onChange={handleChange}
            placeholder="Sigla (ex: GRU)"
            required
            maxLength="3"
          />
          <input
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome (ex: Guarulhos)"
            required
          />
          <input
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
            placeholder="Cidade"
            required
          />
          <input
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            placeholder="Estado"
            required
          />
          <input
            name="pas"
            value={formData.pas}
            onChange={handleChange}
            placeholder="País"
            required
          />
          <button type="submit">Adicionar Aeroporto</button>
        </div>
      </form>

      {/* Exibição de Erro */}
      {error && <p style={{ color: 'red' }}><strong>Erro:</strong> {error}</p>}

      {/* Lista de Aeroportos */}
      <h2>Aeroportos Cadastrados</h2>
      <ul>
        {airports.map((airport) => (
          // React exige uma 'key' única para cada item da lista
          <li key={airport.sigla}>
            <strong>{airport.sigla}</strong> - {airport.nome} ({airport.cidade}, {airport.pas})
            {/* Você adicionaria botões de "Editar" e "Excluir" aqui no futuro */}
          </li>
        ))}
      </ul>
      {airports.length === 0 && <p>Nenhum aeroporto cadastrado ainda.</p>}
    </div>
  );
}

export default AdminAirportsPage;