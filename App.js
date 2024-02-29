import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";






const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela inicial</Text>

      <button title="Sobre"  onPress={()=>navigation.navigate("Sobre")}/>
    </View>
  );
}
function Sobre({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> sobre </Text>
      <Button title="voltar" onPress={ ()=> navigation.goBack()} />
    </View>

  );
}

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home" component={Sobre}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

