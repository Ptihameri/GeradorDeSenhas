import { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ModalSenha } from '../../modal';
import Slider from '@react-native-community/slider';
 
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*-_+';

export function Home()  {
  const [valor, setValor] = useState(12);
  const [senha, setSenha] = useState('');
  const [modalVisible,setModalVisible ] = useState(false);
  function gerarSenha(){
    let password = '';
    for(let i = 0, n = charset.length; i < valor; ++i){
      password += charset.charAt(Math.floor(Math.random() * n));
      
      
    }
    setSenha(password);
    setModalVisible(true);
  }


    return (
      <View style = {styles.contanier}>
          <Image style={styles.logo} source={require("../../../assets/logo.png")} />
        <Text style={styles.titulo}>{valor} caracteres </Text>
        <View style={styles.area}>
        <Slider style={{height: 20}}
        step={1}
        value={valor}
        minimumTrackTintColor="#000"
        maximumTrackTintColor="#ffff"
        thumbTintColor="#392DE9"
        minimumValue={6}
        maximumValue={20}
        onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
        />

        </View>
        <TouchableOpacity style={styles.buton} onPress={gerarSenha}>
          <Text style={styles.senha}>Gerar senha</Text>
        </TouchableOpacity>
        <Modal visible = {modalVisible} animationType='fade' transparent={true}>
          <ModalSenha senha={senha} fechar={()=> setModalVisible(false)}/>
        </Modal>
      </View>
    )
}

const styles = StyleSheet.create({
  contanier :{
    flex:1,
    backgroundColor: "#F3F3FF",
    justifyContent : 'center',
    alignItems: 'center',
    
  },
  logo: {
    width: 140, 
    height: 180,
    marginBottom: 32,
  },
  titulo: {
    fontSize: 26,
    color: "#000000",
    marginBottom: 24,
    fontWeight : 'bold',

  },area: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    marginBottom: 24,
    borderRadius: 8,
    padding: 8,
  },
  buton:{
    backgroundColor: "#392DE9",
    width: "80%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  senha: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#FFFFFF",
  }

}) 
