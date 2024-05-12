import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get("window").width;

export const Styles = StyleSheet.create({
  Container: {
    backgroundColor: "#EEF8F7",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ContainerImg: {
    textAlign: "center",
    alignItems: "center",
  },
  textWelcome: {
    fontWeight: "700",
    fontSize: 36,
    color: "#438883",
  },
  ImgPerson: {
    width: 300,
    height: 200,
    aspectRatio: 1 / 1,
    resizeMode: "contain",
  },
  ContaienrInputs: {
    width: "80%",
    gap: 37,
  },
  labelStyle: {
    fontSize: 12,
  },

  ContainerBtnForgetPassword: {
    width: "80%", // Adicione uma largura ao contêiner para que ele possa ocupar o espaço disponível
    alignItems: "flex-end", // Alinhe o conteúdo do contêiner à direita
    marginTop: 10, // Adicione um espaçamento superior para separá-lo dos campos de entrada
  },

  btnTextForget: {
    color: "#444444",
  },

  ContainerButtons: {
    width: "80%",
    marginTop: 30,
    justifyContent: "center",
  },
  BtnSingIn: {
    borderRadius: 40,
    backgroundColor: "#69AEA9",
    padding: 20,
    alignItems: "center",
  },
  BtnText: {
    fontWeight: "600",
    color: "#fff",
    textTransform: "capitalize",
  },
  btnSingContainer: {
    alignContent: "center",
  },
  ContainerTextBtn: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
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
