import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Aula mobile</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        alignItems: 'center',
        paddingVertical: 10,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
    },
});