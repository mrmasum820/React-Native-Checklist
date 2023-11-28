import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function CustomButton({ title, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightblue',
                borderRadius: 20,
                padding: 10,
            }}
        >
            <Text style={{ color: 'purple', fontSize: 20 }}>{title}</Text>
        </Pressable>
    )
}