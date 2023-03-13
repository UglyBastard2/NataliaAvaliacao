import { View } from "react-native";
import { Button, Text } from "react-native-paper";


export default function HomeScreen( navigation ) {
  return (
    <View>
      <Text>Página principal.</Text>
      <Button mode="contained" onPress={() => navigation(AboutScreen)}>
        Ir para about screen
      </Button>
    </View>
  );
}
