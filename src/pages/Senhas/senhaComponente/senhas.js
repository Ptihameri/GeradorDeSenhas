import React from "react";
import {Text, StyleSheet, Pressable,TouchableOpacity, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import * as Clipboard from "expo-clipboard";


export function SenhaItem({ data, removerSenha }) {
    const [mostrarSenha, setMostrarSenha] = React.useState(false);
  
    const alternarVisibilidadeSenha = () => {
      setMostrarSenha(!mostrarSenha);
    };
    async function copiarSenha(){
        await Clipboard.setStringAsync(data);
    
    }
    const senhaEscondida = mostrarSenha ? data.replace(/./g, '*') : data;
  
    return (
      <Pressable style={styles.botao} onLongPress={removerSenha} >
        <Text style={styles.texto}>{senhaEscondida}</Text>
        <View style = {styles.container}>
            <TouchableOpacity onPress={copiarSenha}>
                <Ionicons size={24} color="#fff" name={"copy-outline"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={alternarVisibilidadeSenha}>
                <Ionicons size={24} color="#fff" name={mostrarSenha ? "eye-off" : "eye"} />
            </TouchableOpacity>
        </View>
      </Pressable>
    );
  }

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "#0e0e0e",
        width: "100%",
        borderRadius: 10,
        padding: 14,
        marginBottom: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    texto: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#fff",
    },container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:50,
    }
}
)