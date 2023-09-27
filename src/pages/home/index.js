import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Modal,
  } from "react-native";
  import { useState } from "react";
  import Slider from "@react-native-community/slider";
  import React from "react";
  import { ModalPassword } from "../../components/modal";
  
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
  
  export function Home() {
    const [size, setSize] = useState(10);
    const [passwordValue, setPasswordValue] = useState("");
    const [modalvisible, setModalVisible] = useState(false);
  
    function generatePassword() {
      let password = "";
  
      for (let i = 0, n = charset.length; i < size; i++) {
        password += charset.charAt(Math.floor(Math.random() * n));
      }
  
      setPasswordValue(password);
      setModalVisible(true);
    }
  
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
        <Text style={styles.frase}>Combatendo a desigualdade no Brasil</Text>
  
        <Text style={styles.title}>{size} caracteres</Text>
  
        <View style={styles.area}>
          <Slider
            style={{ height: 50 }}
            minimumValue={6}
            maximumValue={20}
            maximumTrackTintColor="#D9692E"
            minimumTrackTintColor="#993676"
            thumbTintColor="#1aab95"
            value={size}
            onValueChange={(value) => setSize(value.toFixed(0))}
          />
        </View>
  
        <TouchableOpacity style={styles.button} onPress={generatePassword}>
          <Text style={styles.textoBotao}>Gerar Senha</Text>
        </TouchableOpacity>
  
        <Modal visible={modalvisible} animationType="fade" transparent={true}>
          <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}></ModalPassword>
        </Modal>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F6F0E3",
      justifyContent: "center",
      alignItems: "center",
    },
  
    image: {
      width: 250,
      height: 100,
      marginBottom: 20,
    },
  
    frase: {
      textTransform: "uppercase",
      marginBottom: 50,
    },
  
    title: {
      fontSize: 30,
      fontWeight: "600",
      color: "#993676",
      marginBottom: 25,
    },
  
    area: {
      marginTop: 20,
      marginBottom: 20,
      width: "80%",
      backgroundColor: "#ffff",
      borderRadius: 10,
      padding: 3,
    },
  
    button: {
      backgroundColor: "#1aab95",
      padding: 20,
      borderRadius: 10,
      width: "60%",
      alignItems: "center",
      marginTop: 50,
    },
  
    textoBotao: {
      color: "white",
      textTransform: "uppercase",
      fontWeight: "600",
    },
  });
  