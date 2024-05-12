import { Image, Text, View } from "react-native";
import { Styles } from "./style";
import ImgUser from "../../../assets/login-img.png";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={Styles.Container}>
      <View style={Styles.ContainerImg}>
        <Text style={Styles.textWelcome}>Welcome Back!</Text>
        <Image source={ImgUser} style={Styles.ImgPerson} />
      </View>
      <View style={Styles.ContaienrInputs}>
        <TextInput
          label="YOUR EMAIL"
          value={email}
          mode="outlined"
          style={Styles.inputModified}
          outlineColor="#438883"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="YOUR PASSWORD"
          mode="outlined"
          outlineColor="#438883"
          labelStyle={Styles.labelStyle}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={Styles.ContainerBtnForgetPassword}>
        <TouchableHighlight style={Styles.btnForget}>
          <Text style={Styles.btnTextForget}>Forgot password?</Text>
        </TouchableHighlight>
      </View>
      <View style={Styles.ContainerButtons}>
        <TouchableHighlight style={Styles.BtnSingIn}>
          <Text style={Styles.BtnText}>sign in</Text>
        </TouchableHighlight>

        <TouchableHighlight style={Styles.btnSingContainer}>
          <View style={Styles.ContainerTextBtn}>
            <Text style={Styles.textAccount}>Don’t have Account?</Text>
            <Text
              style={Styles.textSing}
              onPress={() => navigation.navigate("Login")}
            >
              sign up
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
