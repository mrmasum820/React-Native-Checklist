import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BoxModel() {
    return (
        <View>
            <View style={[styles.box, styles.lightblueBg]}>
                {/* borderRadius for Text is only applicable in android */}
                <Text style={{ backgroundColor: 'red', borderRadius: 5 }}>Lightblue box</Text>
            </View>
            <View style={[styles.box, styles.lightgreenBg]}>
                <Text>Lightgreen box</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '25%',
        height: '25%',
        // padding: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5
    },
    lightblueBg: {
        backgroundColor: 'lightblue'
    },
    lightgreenBg: {
        backgroundColor: 'lightgreen'
    }
})