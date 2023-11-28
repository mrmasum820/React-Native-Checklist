import { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView, Switch } from 'react-native'

export default function SwitchE() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.switchContainer}>
                <Text style={styles.text}>Dark Mode</Text>
                <Switch
                value={isDarkMode}
                onValueChange={()=> setIsDarkMode(previousState => !previousState)}
                trackColor={{ false: '#767577', true: 'lightblue' }}
                thumbColor={'#f4f3f4'}
            />
            </View>
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
    text: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})