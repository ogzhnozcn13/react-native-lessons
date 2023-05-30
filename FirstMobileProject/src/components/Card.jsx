import { View,Text,TouchableOpacity, Alert } from "react-native";
import styles from "./Card.style"


const Card=({title})=>{
    // const {title,text}=props
    return (
      <View style={styles.container}>
        <View style={styles.card_container}>
          <View style={styles.card_body}>
            <Text style={styles.card_title}>{title}</Text>
            <Text style={styles.card_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eligendi?</Text>
          </View>
          <TouchableOpacity style={styles.card_button_container} onPress={()=>Alert.alert("merhaba")}>
            <Text style={styles.card_button_title}>I liked</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
export default Card