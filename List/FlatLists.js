import { StyleSheet, View, Text, StatusBar, FlatList, SafeAreaView } from 'react-native'
import pokemonLists from '.././data.json'

// KeyExtractor - used to identify each item in the list uniquely
// ItemSeparatorComponent - used to add a separator between each item in the list
// ListEmptyComponent - used to render a component when the list is empty
// ListHeaderComponent - used to render a component at the top of the list
// ListFooterComponent - used to render a component at the bottom of the list

export default function FlatLists() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollView}>
                <FlatList
                    data={pokemonLists}
                    renderItem={({ item }) => {
                        // console.log(item.id);
                        return (
                            <View style={styles.card}>
                                <Text style={styles.cardText}>
                                    {item.name}
                                </Text>
                                <Text style={styles.cardText}>
                                    {item.type}
                                </Text>
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={<View style={{ height: 16 }} />}
                    ListEmptyComponent={<Text>No data found</Text>}
                    ListHeaderComponent={<Text style={{ fontSize: 26 }}>Pokemon Lists</Text>}
                    ListFooterComponent={<Text style={{ fontSize: 26 }}>End of List</Text>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight
    },
    scrollView: {
        paddingHorizontal: 15
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
    },
    cardText: {
        fontSize: 26,
    }
})