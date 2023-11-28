import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function HomeScreen({ navigation }) {
    // const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title="Go to about" onPress={()=>navigation.navigate('About')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
    }
})