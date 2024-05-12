import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import onBoardImg from "../../../assets/onboard.png";
import { Styles } from "./style";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export function OnBoard({ navigation }) {
  return (
    <View style={Styles.Container}>
      <View style={Styles.ContainerImg}>
        <Image source={onBoardImg} style={Styles.image} />
      </View>
      <View style={Styles.ContainerText}>
        <Text style={Styles.TextPrimary}>spend smarter{"\n"} save more</Text>
        <TouchableHighlight
          style={Styles.btnPrimary}
          onPress={() => navigation.navigate("SingUp")}
        >
          <Text style={Styles.BtnText}>Get Started</Text>
        </TouchableHighlight>

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
    </View>
  );
}
