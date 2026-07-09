import { ScrollView } from "react-native";
import LessonCard from "../components/LessonCard";
import { lessons } from "../data/lessons";

export default function LearnScreen(){

return(

<ScrollView

style={{

flex:1,

backgroundColor:"#121212",

padding:20,

paddingTop:60

}}

>

{lessons.map((lesson)=>(

<LessonCard

key={lesson.id}

lesson={lesson}

onPress={()=>{}}

/>

))}

</ScrollView>

)

}
