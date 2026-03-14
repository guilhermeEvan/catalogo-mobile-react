import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  titulo: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign:"center"
  },


  subTitulo: {
    fontSize:25
  },

  catBotao: {
    backgroundColor: "#1f6cc3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
    marginBottom: 20
  },


  textBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },

  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3
  },

  imagem: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: "contain"
  },

  price: {
    fontWeight:"bold"
  }

})