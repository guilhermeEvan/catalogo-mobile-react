import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { useRouter } from "expo-router";
import { styles } from "./styles";

export const TelaLoginScreen = () => {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = () => {

    console.log("Email:", email);
    console.log("Senha:", senha);

    // navega para a home
    router.push("/home");

  };

  return (

    <View style={styles.container}>

      <Image
        source={require('@/assets/images/caixa.png')}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Bem vindo</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.cadastro}>Criar conta</Text>
      </TouchableOpacity>

    </View>

  );
};