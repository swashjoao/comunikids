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

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if (email.trim() && senha.trim()) {
            router.replace('/home'); // redireciona para a tela principal
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

            <Text style={styles.heading}>Faça login ou{'\n'}realize o cadastro</Text>

            <View style={styles.inputContainer}>
                <MaterialIcons name="email" size={20} color="#999" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui..."
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
                    placeholder="Digite aqui..."
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
            </View>

            <Text style={styles.forgot}>Esqueci a senha</Text>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerText}>Cadastre-se</Text>
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
    forgot: {
        alignSelf: 'flex-end',
        color: '#fff',
        marginBottom: 20,
        fontSize: 13,
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
    registerButton: {
        backgroundColor: '#FFB84C',
        padding: 14,
        borderRadius: 8,
        width: '100%',
    },
    registerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16,
    },
});
