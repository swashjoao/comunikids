import api from './api';

export async function criarFrase(texto: string) {
    return api.post('/frases', { texto });
}

export async function listarFrases() {
    const response = await api.get('/frases');
    return response.data;
}
