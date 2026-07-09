import { TouchableOpacity,Text } from "react-native";
import { Theme } from "../theme/theme";

export default function PrimaryButton({
title,
onPress
}:any){

return(

<TouchableOpacity

onPress={onPress}

style={{

backgroundColor:Theme.colors.primary,

padding:18,

borderRadius:18,

alignItems:"center"

}}

>

<Text

style={{

color:"white",

fontWeight:"700",

fontSize:18

}}

>

{title}

</Text>

</TouchableOpacity>

)

}
