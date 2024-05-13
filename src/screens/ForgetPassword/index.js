import { Image, TouchableHighlight, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import ImgMain from "../../../assets/Forgot-img.png";

import { useState } from "react";
import { Styles } from "./style";

export function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    <View style={Styles.Container}>
      <Text style={Styles.TextPrimary}>Reset your{"\n"}Password</Text>
      <Image source={ImgMain} style={Styles.Image} />
      <Text style={Styles.TextSecondary}>
        Enter your email address and a link will be sent to reset your password.
      </Text>
      <TextInput
        style={Styles.InputElement}
        label="YOUR EMAIL"
        value={email}
        mode="outlined"
        outlineColor="#438883"
        onChangeText={(text) => setEmail(text)}
      />

      <TouchableHighlight
        style={Styles.btnPrimary}
        onPress={() => navigation.navigate("ForgotLink")}
      >
        <Text style={Styles.BtnText}>Send link</Text>
      </TouchableHighlight>

      <TouchableHighlight style={Styles.btnSingContainer}>
        <View style={Styles.ContainerTextBtn}>
          <Text style={Styles.textAccount}>Don't have account ?</Text>
          <Text
            style={Styles.textSing}
            onPress={() => navigation.navigate("SingUp")}
          >
            sign up
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
