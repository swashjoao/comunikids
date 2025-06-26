import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            <Text style={styles.title}>ComuniKids</Text>

            <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push('/anamnese')}>
                <Text style={styles.buttonText}>Iniciar Anamnese</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push('/comunicar')}>
                <Text style={styles.buttonText}>Comunicar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonTertiary} onPress={() => router.push('/adicionarFrase')}>
                <Text style={styles.buttonText}>Adicionar Frase</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5A4FCF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 40,
    },
    buttonPrimary: {
        backgroundColor: '#60CE4F',
        padding: 16,
        borderRadius: 10,
        width: '100%',
        marginBottom: 20,
    },
    buttonSecondary: {
        backgroundColor: '#FFB84C',
        padding: 16,
        borderRadius: 10,
        width: '100%',
    },
    buttonTertiary: {
        backgroundColor: '#4FC3F7',
        padding: 16,
        borderRadius: 10,
        width: '100%',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
