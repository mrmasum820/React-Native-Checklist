import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Box from './Box'

// flex: 1 -> fill the entire space
// flex direction -> row, column, row-reverse, column-reverse
// justifyContent -> flex-start, flex-end, center, space-between, space-around, space-evenly
// alignItems -> flex-start, flex-end, center, stretch, baseline
// alignSelf -> flex-start, flex-end, center, stretch, baseline
// flexWrap -> wrap, nowrap, wrap-reverse
// alignContent -> flex-start, flex-end, center, stretch, space-between, space-around
// gap -> row-gap, column-gap, gap
// flexBasis -> 100px, '100%', 'auto'
// flexShrink -> 0, 1  // horizontally overflow and default value is 0
// flexGrow -> 0, 1 // horizontally overflow and default value is 1

export default function Flex() {
    return (
        <View style={styles.container}>
            <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
            <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
            <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
            <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
            <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
            <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
            <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        // alignItems: 'flex-start',
        // flexWrap: 'wrap',
        // alignContent: 'space-between',
        // rowGap: 20,
        // columnGap: 20,
        // height: 300,
        // width: 300,
        // gap: 20,
        borderWidth: 6,
        borderColor: 'red',
    }
})