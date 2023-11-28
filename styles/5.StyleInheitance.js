import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function StyleInheitance() {
    return (
        <View style={styles.darkMode}>
            <Text style={styles.darkText}>StyleInheitance <Text style={styles.boldText}>bold text</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    darkMode: { backgroundColor: 'black', padding: 10 },
    darkText: { color: 'white' },
    boldText: { fontWeight: 'bold' }
})