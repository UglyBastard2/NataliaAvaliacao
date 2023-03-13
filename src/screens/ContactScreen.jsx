import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import HomeScreen from "./HomeScreen";


export default function ContactScreen( navigation ) {
  return (
    <View>
      <Text>A suposta página de contatos.</Text>
      <Button mode="contained" onPress={() => navigation(HomeScreen)}>
        Ir para Home screen
      </Button>
    </View>
  );
}
