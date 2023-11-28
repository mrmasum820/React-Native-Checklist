import { StyleSheet, View, Text, ScrollView, StatusBar } from 'react-native'
import pokemonLists from '.././data.json'

export default function Lists() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {pokemonLists.map(pokemon => {
                    return (
                        <View style={styles.card} key={pokemon.id}>
                            <Text style={styles.cardText}>
                                {pokemon.name}
                            </Text>
                            <Text style={styles.cardText}>
                                {pokemon.type}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    cardText: {
        fontSize: 26,
    }
})