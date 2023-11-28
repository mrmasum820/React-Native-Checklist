import {View, Button, Alert} from 'react-native';

export default function App() {
    return (
        <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
            <Button title='Alert' onPress={()=> Alert.alert('Inavlid data', 'DOB is incorrect')} />

            <Button title='Alert 2' onPress={()=> Alert.alert('Inavlid data', 'DOB is incorrect', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                }
            ])} />
        </View>
    )
}