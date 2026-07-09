import { View, Text } from "react-native";

export default function LearnScreen() {
  return (
    <View
      style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#121212"
      }}
    >
      <Text style={{color:"white",fontSize:28}}>
        Learn
      </Text>
    </View>
  );
}
