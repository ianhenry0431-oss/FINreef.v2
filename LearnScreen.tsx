import { ScrollView, Text } from "react-native";
import Card from "../components/Card";
import { Theme } from "../theme/theme";

export default function LearnScreen(){

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

fontSize:34,

fontWeight:"700",

color:"white"

}}

>

Learn

</Text>

<Card>

<Text style={{color:"white",fontSize:20,fontWeight:"700"}}>

Beginner Course

</Text>

<Text style={{color:"#bbb",marginTop:10}}>

• Budgeting Basics

{"\n"}• Saving Money

{"\n"}• Banking 101

{"\n"}• Needs vs Wants

</Text>

</Card>

<Card>

<Text style={{color:"white",fontSize:20,fontWeight:"700"}}>

Intermediate

</Text>

<Text style={{color:"#bbb",marginTop:10}}>

• Credit Scores

{"\n"}• Investing

{"\n"}• Taxes

{"\n"}• Insurance

</Text>

</Card>

</ScrollView>

)

}
