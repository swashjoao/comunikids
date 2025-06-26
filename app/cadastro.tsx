import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { register } from './services/auth';

export default function RegisterScreen() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter();

    const handleRegister = async () => {
        if (nome.trim() && email.trim() && senha.trim()) {
            try {
                await register(nome, email, senha);
                Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
                router.replace('/'); // volta para tela de login
            } catch (error: any) {
                console.error(error);
                Alert.alert('Erro', 'Não foi possível cadastrar. E-mail já existe?');
            }
        } else {
            Alert.alert('Erro', 'Preencha todos os campos');
        }
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <Text style={styles.heading}>Cadastre-se para começar</Text>

            <View style={styles.inputContainer}>
                <MaterialIcons name="person" size={20} color="#999" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nome completo"
                    placeholderTextColor="#999"
                    value={nome}
                    onChangeText={setNome}
                />
            </View>

            <View style={styles.inputContainer}>
                <MaterialIcons name="email" size={20} color="#999" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <MaterialIcons name="lock" size={20} color="#999" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                <Text style={styles.loginText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5A4FCF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: 540,
        height: 540,
        marginBottom: -150,
        marginTop: -270,
    },
    heading: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        width: '100%',
        height: 50,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: '100%',
    },
    loginButton: {
        backgroundColor: '#60CE4F',
        padding: 14,
        borderRadius: 8,
        width: '100%',
        marginBottom: 15,
    },
    loginText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16,
    },
});
