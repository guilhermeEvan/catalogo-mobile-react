import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

import { useDispatch, useSelector } from "react-redux";

import { api } from "@/src/services/api";
import { setProdutos } from "@/src/store/productSlice";
import { useRouter } from "expo-router";

export default function Home() {

  const router = useRouter()

  const dispatch = useDispatch();

  const produtos = useSelector((state: any) => state.products.lista);

  async function buscarMasculino() {
    try {
      const resposta = await api.get("/products/category/men's clothing")
      dispatch(setProdutos(resposta.data))
    } catch (error) {
      console.log("Erro ao buscar produtos masculinos", error)
    }
  }

  async function buscarFeminino() {
    try {
      const resposta = await api.get("/products/category/women's clothing")
      dispatch(setProdutos(resposta.data))
    } catch (error) {
      console.log("Erro ao buscar produtos femininos", error)
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Bem vindo ao Catálogo</Text>

      <Text style={styles.subTitulo}>Escolha uma categoria</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 20 }}>

        <TouchableOpacity style={styles.catBotao}onPress={buscarMasculino}>
          <Text style={styles.textBotao}>Masculino</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.catBotao} onPress={buscarFeminino}>
          <Text style={styles.textBotao}>Feminino</Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={produtos}
        numColumns={2}
        keyExtractor={(item: any) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => (

          <TouchableOpacity style={styles.card} onPress={() => router.push({
            pathname: "/produto/[id]",
            params: { id: item.id }
          })}>

            <Image
              source={{ uri: item.image }}
              style={styles.imagem}
            />

            <Text numberOfLines={2}>{item.title}</Text>

            <Text style={styles.price}>${item.price}</Text>

          </TouchableOpacity>

        )}
      />

    </View>
  );

}