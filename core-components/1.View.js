import {View} from 'react-native';

export default function App() {
    return (
        <View style={{flex: 1, backgroundColor: 'plum'}}>
            <View style={{width: 200, height: 200, backgroundColor: 'red'}} />
            <View style={{width: 200, height: 200, backgroundColor: 'green'}} />
            <View style={{width: 200, height: 200, backgroundColor: 'blue'}} />
        </View>
    )
}