import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import ContactScreen from "./ContactScreen";
import HomeScreen from "./HomeScreen";


export default function AboutScreen( navigation ) {
  return (
    <View>
      <Text>Essa é a página sobre.</Text>
      <Button mode="contained" onPress={() => navigation(ContactScreen)}>
        Ir para Contact screen
      </Button>
      <Button mode="contained" onPress={() => navigation(HomeScreen)}>
        Ir para Home screen
      </Button>
    </View>
  );
}
