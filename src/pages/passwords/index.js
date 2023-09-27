import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import {SafeAreaView} from 'react-native-safe-area-context'
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage"
import {PasswordItem} from './components/passwordItem'

export function Passwords() {


  const [listPasswords, setListPasswords] = useState([])
  const focused = useIsFocused();
  const {getItem, deleteItem} = useStorage();


  useEffect(() => {
    async function loadPasswords(){
      const passwords = await getItem("@pass")
      setListPasswords(passwords)
      
    }

    loadPasswords();
  }, [focused])


 async function handleDeletePassword(item){
  const passwords = await deleteItem ("@pass", item)
  setListPasswords(passwords)
}




  return (
    <SafeAreaView style={{flex:1, }}>
    <View style={styles.Header}>
      <Text style={styles.Tilte}>Minhas Senhas</Text>
    </View>
    <View style={styles.content}>
      <FlatList
      style={{flex:1, paddingTop: 14,}}
      data={listPasswords}
      keyExtractor={(item) => String(item)}
      renderItem={({item}) => <PasswordItem data={item} removePassword={()=>handleDeletePassword(item)}/>}
      />
    </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    Header:{
      backgroundColor: "#993667",
      paddingTop: 50,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
    },
    Tilte:{
      color: '#fff',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 20,
    },
    content:{
      flex:1,
      paddingLeft: 14,
      paddingRight: 14,
    }
})