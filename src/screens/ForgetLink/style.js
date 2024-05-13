import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    marginTop: 66,
    padding: 27,
    gap: 24,
  },
  TextPrimary: {
    color: "#438883",
    fontSize: 36,
    fontWeight: "700",
    lineHeight: 38,
  },
  Image: {
    width: 300,
    height: 200,
    aspectRatio: 1 / 1,
    resizeMode: "contain",
  },
  TextSecondary: {
    color: "#444444",
    fontSize: 16,
    textAlign: "cenmter",
  },
  InputElement: {
    width: "100%",
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
});
