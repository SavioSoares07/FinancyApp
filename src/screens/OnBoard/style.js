import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
  },
  ContainerImg: {
    flex: 2,
  },
  image: {
    resizeMode: "contain",
    marginTop: 40,
    width: windowWidth, // Set the width to device width
    height: undefined, // Let the height adjust automatically to maintain aspect ratio
    aspectRatio: 16 / 15, // Proporção de aspecto 16:9
  },
  ContainerText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  TextPrimary: {
    textAlign: "center",
    color: "#438883",
    fontSize: 36,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  btnPrimary: {
    borderRadius: 40,
    backgroundColor: "#69AEA9",
    padding: 20,
    width: "100%",
    alignItems: "center",
  },

  BtnSingIn: {
    backgroundColor: "#69AEA9",
    borderRadius: 40,
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  BtnText: {
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
