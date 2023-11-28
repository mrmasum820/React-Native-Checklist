import { View, Text, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function PlatformModule() {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.text}>Platform Specific</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'plum'
    },
    container: {
        flex: 1,
        backgroundColor: 'plum',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    box: {
        // padding: 20
    },
    text: {
        ...Platform.select({
            ios: {
                fontSize: 30,
                color: 'blue'
            },
            android: {
                fontSize: 28,
                color: 'red'
            }
        }),
        fontWeight: 'bold',
        textAlign: 'center'
    }
})