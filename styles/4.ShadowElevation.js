import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ShadowElevation() {
  return (
    <View>
      <View style={[styles.box, styles.lightblueBg, styles.shadow]}>
        <Text>Lightblue box</Text>
      </View>
      {/* shadow is not applicable for android so, we need to create elevation for android */}
      <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 200,
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
  },
  shadow: {
    shadowColor: '#333',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  androidShadow: {
    elevation: 10
  }
})