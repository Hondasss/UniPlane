import apiClient from './apiClient';

// Esta é a camada de "serviço" do front-end.
// Ela esconde a complexidade do 'axios' e fornece
// funções simples que os componentes podem chamar.

/**
 * Busca todos os aeroportos da API.
 * Corresponde ao @Get() no AirportsController.
 */
export const getAirports = async () => {
  try {
    const response = await apiClient.get('/airports');
    return response.data; // Retorna a lista de aeroportos
  } catch (error) {
    console.error('Erro ao buscar aeroportos:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Cria um novo aeroporto.
 * @param {object} airportData - Os dados do DTO (sigla, nome, etc.)
 * Corresponde ao @Post() no AirportsController.
 */
export const createAirport = async (airportData) => {
  try {
    const response = await apiClient.post('/airports', airportData);
    return response.data; // Retorna o aeroporto recém-criado
  } catch (error) {
    // Se o NestJS retornar um erro de validação (ex: sigla de 4 letras),
    // ele virá aqui.
    console.error('Erro ao criar aeroporto:', error.response?.data || error.message);
    throw error;
  }
};

// ...você adicionaria aqui as funções de update e delete no futuro
// export const updateAirport = (sigla, data) => apiClient.patch(`/airports/${sigla}`, data);
// export const deleteAirport = (sigla) => apiClient.delete(`/airports/${sigla}`);