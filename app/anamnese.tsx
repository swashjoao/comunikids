import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function AnamneseScreen() {
    const [name, setName] = useState('');
    const router = useRouter();

    const handleSubmit = () => {
        router.push({ pathname: '/comunicar', params: { userName: name } });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome da criança:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome"
                value={name}
                onChangeText={setName}
            />
            <Button title="Salvar e Prosseguir" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    label: { fontSize: 18, marginBottom: 10 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
    },
});
