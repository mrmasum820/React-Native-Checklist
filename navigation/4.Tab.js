import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CourseListScreen from './navigation/screens/CourseListScreen';
import ProfileScreen from './navigation/screens/ProfileScreen';
import SettingsScreen from './navigation/screens/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Course List" component={CourseListScreen} />
      <Tab.Screen
       name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={20} />
            ),
            tabBarBadge: 3,
        }}
        />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}