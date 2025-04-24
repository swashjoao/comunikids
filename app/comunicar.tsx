import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import * as Speech from 'expo-speech';

const phrases = [
    { id: '1', label: 'Estou com fome' },
    { id: '2', label: 'Quero beber água' },
    { id: '3', label: 'Estou feliz' },
];

export default function CommunicationScreen() {
    const { userName } = useLocalSearchParams();

    const speak = (text: string) => {
        Speech.speak(text, { language: 'pt' });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Olá {userName ?? 'Usuário'}</Text>
            <FlatList
                data={phrases}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.button} onPress={() => speak(item.label)}>
                        <Text style={styles.text}>{item.label}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    header: { fontSize: 20, marginBottom: 20 },
    button: {
        padding: 15,
        backgroundColor: '#eee',
        borderRadius: 8,
        marginBottom: 10,
    },
    text: { fontSize: 16 },
});
