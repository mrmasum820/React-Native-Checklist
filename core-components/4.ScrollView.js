import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
const logoImg = require('../assets/adaptive-icon.png');

export default function App() {
    return (
        <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
            <ScrollView>
                <Image source={logoImg} style={{width: 300, height: 300}} />
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, officiis distinctio placeat quos assumenda mollitia asperiores omnis autem, nesciunt voluptate, perferendis ullam! Hic at corporis modi voluptas, facilis voluptatum quaerat, repellat blanditiis nam deserunt, doloremque magni omnis. Excepturi dignissimos blanditiis nulla expedita cupiditate, laboriosam exercitationem ducimus amet magnam illo animi id totam ipsum a aperiam reiciendis corporis fuga. Molestias beatae praesentium fuga voluptatem totam! Inventore, cupiditate corporis. Consectetur magnam dolorum ea vitae doloribus natus obcaecati, culpa distinctio reprehenderit corrupti rerum atque blanditiis impedit id necessitatibus aut temporibus quasi. Ad et, rerum nihil quos distinctio tempore culpa tempora ex amet illum id sed fugiat temporibus sint aspernatur facilis commodi tenetur cum. Obcaecati quae consequuntur in quos voluptatibus labore iusto soluta aspernatur, iure dicta rerum debitis quasi, dolores suscipit explicabo expedita exercitationem? Eius ex inventore cum molestias! Aut ipsa quia quisquam esse ea sunt reprehenderit obcaecati, accusamus laboriosam minus nemo!</Text>
            </ScrollView>
        </View>
    )
}