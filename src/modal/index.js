import * as Clipboard from "expo-clipboard";
import { View, Text ,StyleSheet,TouchableOpacity,Pressable } from "react-native";
import useStorage from '../hooks/useStorage';


export function ModalSenha({senha,fechar}) {  

    const {salverItem} = useStorage();

    async function copiarSenha(){
        await Clipboard.setStringAsync(senha);
        alert('Senha copiada com sucesso');
        await salverItem('@senhas',senha);
        fechar();
    
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.titulo}>Senha gerada</Text>
                <Text style={styles.subTitulo}>Para copiar a senha, segure em cima da senha por 2 segundos</Text>
                <Pressable style={styles.campoSenha} onLongPress={copiarSenha}>
                    <Text style={styles.password}>{senha}</Text>
                </Pressable>
                <View style = {styles.area}>
                    
                <TouchableOpacity style={styles.buton} onPress={fechar}>
                    <Text style={styles.voltar}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buton,styles.butonSalvar]} onPress={copiarSenha}>
                    <Text style={styles.salver}>Salvar senha</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(24,24,24,0.6)',
    },
    content:{

        width:"85%",
        backgroundColor:'#fff',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20,
        paddingBottom:20,
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20,
        color:'#000',
    },
    subTitulo:{
        fontSize:12,
        marginBottom:20,
        color:'#8c8c8c',
        textAlign:'center',
    },
    campoSenha:{
        width:'90%',
        borderRadius:8,
        backgroundColor:'#0e0e0e',
        padding:14,

    },
    password:{
      color:'#fff',
      textAlign:'center',
    },
    buton:{
        width:'90%',
        height:50,
        backgroundColor:'#fff',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        flex: 1,
    },
    voltar:{
        fontSize:16,
        fontWeight:'bold',
        color:'#000',
    },
    butonSalvar:{
        width:'90%',
        height:50,
        backgroundColor:'#392DE9',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        flex: 1,
    },
    salver:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff',
    }
    ,
    area:{
        width:'90%',
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:8,
    }
}
)