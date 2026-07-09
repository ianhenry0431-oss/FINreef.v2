import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#121212",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold"
        }}
      >
        🪸 FINreef
      </Text>

      <Text style={{ color: "#F4C542", marginTop: 15 }}>
        Dive Into Smarter Money
      </Text>
    </View>
  );
}
