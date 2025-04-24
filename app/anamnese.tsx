import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function AnamneseScreen() {
    const [name, setName] = useState('');
    const router = useRouter();

    const handleSubmit = () => {
        if (name.trim()) {
            router.push({ pathname: '/comunicar', params: { userName: name } });
        } else {
            Alert.alert('Erro', 'Digite o nome da criança.');
        }
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/home')}>
                <MaterialIcons name="arrow-back" size={24} color="#fff" />
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Anamnese</Text>

            <Text style={styles.label}>Nome da criança</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite aqui..."
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Salvar e Prosseguir</Text>
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
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        position: 'absolute',
        top: 60,
        left: 20,
    },
    backText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 40,
        textAlign: 'center',
    },
    label: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 14,
        fontSize: 16,
        marginBottom: 25,
    },
    button: {
        backgroundColor: '#60CE4F',
        padding: 14,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
