import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import * as Speech from 'expo-speech';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const phrases = [
    { id: '1', label: 'Estou com fome', icon: 'food' },
    { id: '2', label: 'Quero beber água', icon: 'cup-water' },
    { id: '3', label: 'Estou feliz', icon: 'emoticon-happy' },
];

export default function CommunicationScreen() {
    const { userName } = useLocalSearchParams();
    const router = useRouter();

    const speak = (text: string) => {
        Speech.speak(text, { language: 'pt' });
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/home')}>
                <MaterialIcons name="arrow-back" size={24} color="#fff" />
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

            <Text style={styles.header}>Olá {userName ?? 'Usuário'}</Text>

            <FlatList
                data={phrases}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={{ paddingBottom: 40 }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.button} onPress={() => speak(item.label)}>
                        <MaterialIcons name="arrow-back" size={24} color="#fff" />
                        <Text style={styles.buttonText}>{item.label}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5A4FCF',
        padding: 20,
        paddingTop: 60,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    header: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#60CE4F',
        width: '47%',
        aspectRatio: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    buttonText: {
        marginTop: 8,
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
