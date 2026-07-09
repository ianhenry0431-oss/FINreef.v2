import { View } from "react-native";
import { Theme } from "../theme/theme";

export default function Card({
    children
}:any){

    return(

        <View
            style={{
                backgroundColor:Theme.colors.surface,
                borderRadius:20,
                padding:20,
                marginVertical:10
            }}
        >

            {children}

        </View>

    )

}
