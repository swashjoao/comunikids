import { View, Text, Button, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'ComuniKids' }} />
            <Text style={styles.title}>ComuniKids</Text>
            <Button title="Iniciar Anamnese" onPress={() => router.push('/anamnese')} />
            <Button title="Comunicar" onPress={() => router.push('/comunicar')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
});
