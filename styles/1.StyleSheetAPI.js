import { View, Text } from 'react-native'
import React from 'react'

export default function StyleSheetAPI() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>StyleSheetAPI</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'plum', padding: 60 },
    title: { color: 'white', fontSize: 30, fontWeight: 'bold' }
})