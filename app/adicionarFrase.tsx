import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { criarFrase } from './services/frases';

export default function AdicionarFraseScreen() {
    const router = useRouter();
    const [texto, setTexto] = useState('');

    const handleEnviar = async () => {
        if (!texto.trim()) {
            return Alert.alert('Erro', 'Digite uma frase');
        }

        try {
            await criarFrase(texto); // agora só envia o texto
            Alert.alert('Sucesso', 'Frase adicionada com sucesso!');
            setTexto('');
            router.replace('/comunicar');
        } catch (err) {
            console.error(err);
            Alert.alert('Erro', 'Erro ao enviar a frase');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Adicionar Frase</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite a frase"
                placeholderTextColor="#999"
                value={texto}
                onChangeText={setTexto}
            />

            <TouchableOpacity style={styles.button} onPress={handleEnviar}>
                <Text style={styles.buttonText}>Salvar Frase</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5A4FCF',
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
        color: '#000',
    },
    button: {
        backgroundColor: '#60CE4F',
        padding: 14,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
