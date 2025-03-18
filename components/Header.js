import {View, Text, StyleSheet} from 'react-native';
export default function Header() {
    return (
        <View style={StyleSheet.header}>
            <Text style={StyleSheet.title}>Aula tods</Text>
        </View>
    );
}

const styles = Stylesjeet.create({
    header: {
        height: 80,
        padding: 38,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
