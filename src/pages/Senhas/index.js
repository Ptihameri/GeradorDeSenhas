import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect} from "react";
import { Text, View, StyleSheet,FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useStorage from "../../hooks/useStorage";
import { SenhaItem } from "./senhaComponente/senhas";


export function Senhas({senha,}) {
    const [listaSenhas, setListaSenhas] = useState([]);
    const focado = useIsFocused();
    const {getItem, removerItem} = useStorage();

    useEffect(()=>{
        async function carregarSenhas(){
            const senhas = await getItem('@senhas');
            setListaSenhas(senhas);
        }
        carregarSenhas();
    },[focado])
   
      
    
    async function deletarSenha(item){
        
        const senhas = await removerItem('@senhas',item);
        setListaSenhas(senhas);
    }
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}> 
                <Text style={styles.titulo}>Minhas Senhas</Text>
            </View> 
            <View style ={styles.Senhas}> 
                <FlatList
                style={{flex:1,paddingTop:14}}
                data={listaSenhas}
                keyExtractor={(item) => String(item)}
                renderItem={({item}) => (
                    <SenhaItem data={item} removerSenha ={() => deletarSenha(item)}/>
                )}
                />
            </View> 
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#392DE9',
        paddingTop:60,
        padding:14,

    },titulo:{
        fontSize:22,
        fontWeight:'bold',
        color:'#fff',
    },Senhas:{
        flex:1,
        padding : 19,

    },
    
    campoSenha:{
        width:'90%',
        borderRadius:8,
        backgroundColor:'#0e0e0e',
        padding:14,


    },
    password:{
      color:'#fff',
      fontSize: 16,
      fontWeight:'bold',
    }
    
})