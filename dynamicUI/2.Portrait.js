import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { useState, useEffect } from 'react'

export default function Portrait() {
    const [dimensions, setDimensions] = useState({ window: Dimensions.get('window') })

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setDimensions({ window })
        })
        return () => subscription?.remove()
    }, [])

    const { window } = dimensions;
    const windowWidth = window.width;
    const windowHeight = window.height;

    return (
        <View style={styles.container}>
            <View style={[styles.box, { width: windowWidth > 500 ? "70%" : "90%", height: windowHeight > 600 ? "60%" : "90%" }]}>
                <Text style={{ fontSize: windowWidth > 500 ? 50 : 30 }}>Landscape orentation</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'plum',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center'
    }
})