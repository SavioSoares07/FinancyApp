import { Image, TouchableHighlight, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { Styles } from "./style";
import ImgMain from "../../../assets/ForgetLink-img.png";

export function ForgotLink({ navigation }) {
  return (
    <View style={Styles.Container}>
      <Text style={Styles.TextPrimary}>Check your{"\n"}Email</Text>
      <Text style={Styles.TextSecondary}>
        All set! Follow the instructions on your email to reset your password.
        Don't forget to check the spam box!
      </Text>
      <Image source={ImgMain} style={Styles.Image} />
      <TouchableHighlight
        style={Styles.btnPrimary}
        onPress={() => navigation.navigate("SingUp")}
      >
        <Text style={Styles.BtnText}>Login</Text>
      </TouchableHighlight>
    </View>
  );
}
