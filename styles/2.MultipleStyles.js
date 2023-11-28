import { View, Text, StyleSheet } from 'react-native'

export default function MultipleStyles() {
    return (
        <View>
            <View style={[styles.lightblueBg, styles.box]}>
                <Text>Lightblue box</Text>
            </View>
            <View style={[styles.lightgreenBg, styles.box]}>
                <Text>Lightgreen box</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 300,
        height: 300,
        padding: 20
    },
    lightblueBg: {
        backgroundColor: 'lightblue'
    },
    lightgreenBg: {
        backgroundColor: 'lightgreen'
    }
})