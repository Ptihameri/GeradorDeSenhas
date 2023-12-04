import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    const getItem = async (key) => {
        try {
            const senhas = await AsyncStorage.getItem(key);
            return JSON.parse(senhas) || [];
        } catch (err) {
            console.log("erro ao buscar",err)
            return [];
            
        }
    }
    const salverItem = async (key,valor) => {
        try {
            let senhas = await getItem(key);
            senhas.push(valor);
            await AsyncStorage.setItem(key,JSON.stringify(senhas));

        } catch (error) {
         console.log("erro ao salvar",err)

        }
    }
    const removerItem = async (key,valor) => {
        try {

            let senha = await getItem(key);

            let minhasSenhas= senha.filter((password) => {
                return (password !== valor)
            });

            await AsyncStorage.setItem(key,JSON.stringify(minhasSenhas));

            return minhasSenhas;
            
        } catch (error) {
            console.log("erro ao remover",err)
            
        }
    }
    return { getItem, salverItem, removerItem }

}

export default useStorage;