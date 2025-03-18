import { SafeAreaView, Text, StyleSheet } from "react-native";

import Header from "../components/Header";
import Card from "../components/Card";

export default function HomScreen( navigation) {
 const professores = [
    {id: '1', name: 'João', role: 'Professor'},
    {id: '2', name: 'Maria', role: 'Professora'},
    {id: '3', name: 'José', role: 'Professor'},
    {id: '4', name: 'Ana', role: 'Professora'},

 ];

 const alunos = [
    {id: '1', name: 'João', role: 'Aluno'},
    {id: '2', name: 'Maria', role: 'Aluna'},
    {id: '3', name: 'José', role: 'Aluno'},
    {id: '4', name: 'Ana', role: 'Aluna'},
    {id: '5', name: 'João', role: 'Aluno'},
    {id: '6', name: 'Maria', role: 'Aluna'},    
 ];
}

const styles = StylesSheet.create({

})

return

<SafeAreaView>
    <Header />

    <Text style={styles.sectionTitle}>Professores</Text>

    <FlatList 
        style={styles.horizontalList}
        data={professores}
        horizontal
        showsHorizontalScrollIndicator={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <Card item={item} />
        )}

</SafeAreaView>