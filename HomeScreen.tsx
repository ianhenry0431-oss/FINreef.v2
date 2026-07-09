import {
ScrollView,
Text,
View
} from "react-native";

import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import { Theme } from "../theme/theme";

export default function HomeScreen(){

return(

<ScrollView

style={{

flex:1,

backgroundColor:Theme.colors.background

}}

contentContainerStyle={{

padding:20,

paddingTop:60,

paddingBottom:80

}}

>

<Text

style={{

color:"white",

fontSize:34,

fontWeight:"800"

}}

>

🪸 FINreef

</Text>

<Text

style={{

color:Theme.colors.secondary,

marginTop:5,

fontSize:16

}}

>

Dive Into Smarter Money

</Text>

<Card>

<Text

style={{

color:"white",

fontWeight:"700",

fontSize:22

}}

>

Daily Financial Tip

</Text>

<Text

style={{

color:"#cccccc",

marginTop:12,

lineHeight:24

}}

>

Saving even $10 every week can grow into hundreds of dollars over time. Small habits create big results.

</Text>

</Card>

<Card>

<Text

style={{

fontSize:22,

fontWeight:"700",

color:"white"

}}

>

Continue Learning

</Text>

<Text

style={{

marginTop:8,

color:"#aaa"

}}

>

Resume "Budgeting Basics"

</Text>

<View style={{marginTop:20}}>

<PrimaryButton

title="Continue"

onPress={()=>{}}

/>

</View>

</Card>

<View

style={{

flexDirection:"row",

justifyContent:"space-between"

}}

>

<View

style={{

width:"48%"

}}

>

<Card>

<Text

style={{

color:"#999"

}}

>

XP

</Text>

<Text

style={{

fontSize:34,

color:"white",

fontWeight:"700"

}}

>

245

</Text>

</Card>

</View>

<View

style={{

width:"48%"

}}

>

<Card>

<Text

style={{

color:"#999"

}}

>

Streak

</Text>

<Text

style={{

fontSize:34,

color:"white",

fontWeight:"700"

}}

>

7🔥

</Text>

</Card>

</View>

</View>

<Card>

<Text

style={{

fontSize:22,

fontWeight:"700",

color:"white"

}}

>

Learning Categories

</Text>

<Text

style={{

marginTop:20,

color:"#ccc"

}}

>

💵 Budgeting

</Text>

<Text

style={{

marginTop:10,

color:"#ccc"

}}

>

🏦 Banking

</Text>

<Text

style={{

marginTop:10,

color:"#ccc"

}}

>

📈 Investing

</Text>

<Text

style={{

marginTop:10,

color:"#ccc"

}}

>

💳 Credit

</Text>

<Text

style={{

marginTop:10,

color:"#ccc"

}}

>

🏠 Home Buying

</Text>

<Text

style={{

marginTop:10,

color:"#ccc"

}}

>

💼 Retirement

</Text>

</Card>

</ScrollView>

)

}
