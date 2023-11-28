import { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView, TextInput } from 'react-native'

// textInput props
// multiline textInput

export default function Textinput() {
    const [name, setName] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <TextInput 
            style={styles.input} 
            value={name} onChangeText={setName}
            placeholder='email@example.com' 
            // secureTextEntry
            // keyboardType='numeric'
            autoCorrect={false}
            autoCapitalize='none'
            />

            <TextInput 
                style={[styles.input, styles.multilineText]}
                placeholder='Message'
                multiline
            />

            <Text style={styles.text}>My name is: {name}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 10
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    multilineText: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
})