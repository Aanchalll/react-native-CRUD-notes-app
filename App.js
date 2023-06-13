
import { Text, View } from 'react-native';
import WelcomePage from './pages/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navbar from './pages/Navbar';
import ContactScreen from './pages/ContactUs';
import HomeScreen from './pages/HomeScreen';
import AboutScreen from './pages/AboutScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator tabBar={(props) => <Navbar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
