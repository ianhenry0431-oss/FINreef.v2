import { View,Text,TouchableOpacity } from "react-native";
import { Theme } from "../theme/theme";
import { Lesson } from "../types/Lesson";

export default function LessonCard({

lesson,

onPress

}:{

lesson:Lesson;

onPress:()=>void;

}){

return(

<TouchableOpacity

onPress={onPress}

style={{

backgroundColor:Theme.colors.surface,

padding:20,

borderRadius:20,

marginBottom:16

}}

>

<Text

style={{

fontSize:20,

fontWeight:"700",

color:"white"

}}

>

{lesson.title}

</Text>

<Text

style={{

color:"#BBBBBB",

marginTop:8

}}

>

{lesson.description}

</Text>

<View

style={{

flexDirection:"row",

justifyContent:"space-between",

marginTop:18

}}

>

<Text style={{color:"#F4C542"}}>

⭐ {lesson.xp} XP

</Text>

<Text style={{color:"#8F8F8F"}}>

{lesson.minutes} min

</Text>

</View>

</TouchableOpacity>

)

}
