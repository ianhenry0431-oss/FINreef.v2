import { ScrollView,Text } from "react-native";
import { Theme } from "../theme/theme";

export default function LessonScreen(){

return(

<ScrollView

style={{

flex:1,

backgroundColor:Theme.colors.background,

padding:20,

paddingTop:60

}}

>

<Text

style={{

fontSize:32,

fontWeight:"700",

color:"white"

}}

>

Budgeting Basics

</Text>

<Text

style={{

marginTop:25,

color:"#DDDDDD",

fontSize:18,

lineHeight:30

}}

>

This screen will eventually load lesson content dynamically.

For now it acts as the reading page.

</Text>

</ScrollView>

)
}
