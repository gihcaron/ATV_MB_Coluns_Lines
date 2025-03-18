import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Visualizar o arquivo package.json
import { NavigationContainer } from '@react-navigation/native'; // Modo de visuzlização de navegação

import HomeScreen from './pages/home'; // Visualizar o arquivo home.js

const Stack = createNativeStackNavigator(); // Visualizar a navegação do stake

export default function App() { // Visualizar o arquivo App.js
  return (
    <NavigationContainer>  Visualizar a navegação do container
      <Stack.Navigator>
        <Stack.Screen name="2TDS1" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}