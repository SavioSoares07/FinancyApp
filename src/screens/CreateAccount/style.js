import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get("window").width;

export const Styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  ContainerInfo: {
    marginTop: 66,
  },
  TextInfo: {
    fontWeight: "700",
    fontSize: 36,
    color: "#438883",
    textTransform: "capitalize",
  },
  Image: {
    width: 300,
    height: 200,
    aspectRatio: 1 / 1,
    resizeMode: "contain",
  },
  ContainerInputs: {
    width: "80%",
    marginTop: 32,
    gap: 14,
  },
  BtnSingIn: {
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 40,
    backgroundColor: "#69AEA9",
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  ContainerButtons: {
    width: "80%",
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
  btnSingContainer: {
    alignContent: "center",
  },
  ContainerTextBtn: {
    flexDirection: "row",
    gap: 5,
  },
  textAccount: {
    fontWeight: "400",
    textTransform: "capitalize",
    alignItems: "center",
    justifyContent: "center",
  },
  textSing: {
    color: "#438883",
    textTransform: "capitalize",
  },
});
