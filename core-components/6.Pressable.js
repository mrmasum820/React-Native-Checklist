import {View, Text, Image, ScrollView, Pressable} from 'react-native';
const logoImg = require('../assets/adaptive-icon.png');

export default function App() {
    return (
        <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
            <Button 
            title="Click me" 
            onPress={() => console.log('button pressed')} 
            color="red"
            disabled
            />

            <Pressable onPress={()=> console.log('image pressed')}>

                <Image source={logoImg} style={{width: 300, height: 300}} />
            </Pressable>
            <Pressable onPress={()=> console.log('text pressed')}>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, officiis distinctio placeat quos assumenda mollitia asperiores omnis autem, nesciunt voluptate, perferendis ullam! Hic at corporis modi voluptas, facilis voluptatum quaerat, repellat blanditiis nam deserunt, doloremque magni omnis.</Text>
                </Pressable>
        </View>
    )
}