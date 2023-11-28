import { useState } from 'react';
import {View, Text, Image, ScrollView, Pressable, Modal} from 'react-native';
const logoImg = require('../assets/adaptive-icon.png');

export default function App() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
            <Button 
            title="Click me" 
            onPress={() => isModalVisible(true)} 
            color="red"
            />

            <Modal visible={isModalVisible} onRequestClose={()=> setIsModalVisible(false)} animationType="slide" presentationStyle='pageSheet'>
                <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
                    <Text>Modal content</Text>
                    <Button 
                    title="Close me" 
                    onPress={() => isModalVisible(false)} 
                    color="red"
                    />
                </View>
            </Modal>

        </View>
    )
}