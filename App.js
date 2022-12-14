import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native';
import {format} from "./screens/TelaPrincipal/css/Styles.js";
import TelaPrincipal from "./screens/TelaPrincipal";
import TelaCamera from "./screens/TelaCamera";
import TelaGaleria from "./screens/TelaGaleria";
import TelaCodeBar from "./screens/TelaCodeBar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{headerShown:false}}/>
        <Stack.Screen name="TelaCamera" component={TelaCamera} />
        <Stack.Screen name="TelaGaleria" component={TelaGaleria} />
        <Stack.Screen name="TelaCodeBar" component={TelaCodeBar} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

