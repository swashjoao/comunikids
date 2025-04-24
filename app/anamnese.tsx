import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ScrollView,
} from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function AnamneseScreen() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [notes, setNotes] = useState('');
    const router = useRouter();

    const handleSubmit = () => {
        if (!name.trim() || !age.trim() || !gender.trim()) {
            Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
            return;
        }

        router.push({
            pathname: '/comunicar',
            params: { userName: name },
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Stack.Screen options={{ headerShown: false }} />

            <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/home')}>
                <MaterialIcons name="arrow-back" size={24} color="#fff" />
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Anamnese</Text>

            <Text style={styles.label}>Nome da criança *</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite aqui..."
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Idade *</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 6"
                keyboardType="numeric"
                placeholderTextColor="#999"
                value={age}
                onChangeText={setAge}
            />

            <Text style={styles.label}>Gênero *</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: Feminino, Masculino, Outro"
                placeholderTextColor="#999"
                value={gender}
                onChangeText={setGender}
            />

            <Text style={styles.label}>Observações (opcional)</Text>
            <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Descreva necessidades específicas, preferências, etc."
                placeholderTextColor="#999"
                multiline
                value={notes}
                onChangeText={setNotes}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Salvar e Prosseguir</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#5A4FCF',
        padding: 20,
        paddingTop: 100,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
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
        marginBottom: 30,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 6,
        marginTop: 12,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 14,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#60CE4F',
        padding: 14,
        borderRadius: 10,
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
