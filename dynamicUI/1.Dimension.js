import { StyleSheet, View, Text, Dimensions } from 'react-native'
import React from 'react'

// test on iPad -> use box width and height as %
// responsive styles based on apis

export default function Dimension() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Dimensions API</Text>
            </View>
        </View>
    )
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'plum',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: windowWidth > 500 ? "70%" : "80%",
        height: windowHeight > 600 ? "60%" : "70%",
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: windowWidth > 500 ? 50 : 30,
    }
})