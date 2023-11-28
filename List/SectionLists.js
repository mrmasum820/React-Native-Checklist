import { StyleSheet, View, Text, StatusBar, FlatList, SafeAreaView, SectionList } from 'react-native'
import groupedPokemonData from '.././grouped-data.json'

export default function SectionLists() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollView}>

                <SectionList
                    sections={groupedPokemonData}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.cardText}>
                                    {item}
                                </Text>
                            </View>
                        )
                    }}
                    // renderSectionHeader={({ section }) => {
                    //     <Text style={styles.sectionHeaderText}>{section.type}</Text>
                    // }}
                    ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
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
    },
    sectionHeaderText: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})