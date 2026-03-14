import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function ProdutoDetalhe() {

  const { id } = useLocalSearchParams<{ id: string }>();

  const produtos = useSelector((state: any) => state.products.lista);

  const produto = produtos.find((p: any) => p.id === Number(id));

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>

      <Image
        source={{ uri: produto.image }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>{produto.title}</Text>

      <Text style={styles.preco}>${produto.price}</Text>

      <Text style={styles.descricao}>{produto.description}</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  imagem: {
    width: 200,
    height: 200,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 20
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },

  preco: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10
  },

  descricao: {
    fontSize: 14
  }

});