import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function login(email: string, senha: string) {
    const response = await api.post('/login', { email, senha });

    const token = response.data.token;
    await AsyncStorage.setItem('@token', token);

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return response.data;
}

export async function register(nome: string, email: string, senha: string) {
    await api.post('/register', { nome, email, senha });
}
