import { Image, Text, View, TouchableHighlight } from "react-native";
import { Styles } from "./style";
import ImgMain from "../../../assets/register-img.png";
import { TextInput } from "react-native-paper";
import { useState } from "react";

export function CreateAccount({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  return (
    <View style={Styles.Container}>
      <View style={Styles.ContainerInfo}>
        <Text style={Styles.TextInfo}>Start saving{"\n"}Your Money!</Text>
        <Image source={ImgMain} style={Styles.Image} />
      </View>
      <View style={Styles.ContainerInputs}>
        <TextInput
          label="YOUR NAME"
          value={name}
          mode="outlined"
          style={Styles.inputModified}
          outlineColor="#438883"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          label="YOUR EMAIL"
          mode="outlined"
          outlineColor="#438883"
          labelStyle={Styles.labelStyle}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="CHOOSE YOUR PASSWORD"
          mode="outlined"
          outlineColor="#438883"
          labelStyle={Styles.labelStyle}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          label="CONFIRM YOUR PASSWORD"
          mode="outlined"
          outlineColor="#438883"
          labelStyle={Styles.labelStyle}
          value={checkPassword}
          onChangeText={(text) => setCheckPassword(text)}
        />
      </View>

      <View style={Styles.ContainerButtons}>
        <TouchableHighlight
          style={Styles.BtnSingIn}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={Styles.btnText}>Sign Up</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight style={Styles.btnSingContainer}>
        <View style={Styles.ContainerTextBtn}>
          <Text style={Styles.textAccount}>Already have account?</Text>
          <Text
            style={Styles.textSing}
            onPress={() => navigation.navigate("Login")}
          >
            sign in
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
