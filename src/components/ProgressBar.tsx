import { View } from "react-native";
import { Theme } from "../theme/theme";

export default function ProgressBar({

progress

}:{

progress:number

}){

return(

<View

style={{

height:12,

backgroundColor:"#333",

borderRadius:20,

overflow:"hidden"

}}

>

<View

style={{

height:12,

width:`${progress}%`,

backgroundColor:Theme.colors.primary

}}

>

</View>

</View>

)

}
