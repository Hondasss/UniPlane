import axios from 'axios';

// Este é o "conector" principal.
// Ele cria uma instância do axios já apontando para o seu back-end NestJS,
// que (por padrão) está rodando em http://localhost:3000

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;