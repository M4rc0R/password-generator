import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from '../../hooks/useStorage'

export function ModalPassword({ password, handleClose }) {

  const {saveItem} = useStorage();


  async function handleCopyPass() {
    await Clipboard.setStringAsync(password);
    await saveItem("@pass", password)
    alert("Senha salva com sucesso");
    handleClose();
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.texto}>Senha gerada</Text>

        <Pressable style={styles.innerPass} onLongPress={handleCopyPass}>
          <Text style={styles.senha}>{password}</Text>
        </Pressable>

        <View style={styles.btArea}>
          <TouchableOpacity style={styles.buton} onPress={handleClose}>
            <Text style={styles.btTexto}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buton, styles.SaveBt]} onPress={handleCopyPass}>
            <Text style={styles.btSave}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24,24,24,0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#FFFF",
    width: "85%",
    paddingTop: 25,
    paddingBottom: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  texto: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    marginBottom: 24,
  },
  innerPass: {
    backgroundColor: "#993676",
    width: "90%",
    padding: 14,
    borderRadius: 10,
  },
  senha: {
    color: "#fff",
    textAlign: "center",
  },
  btArea: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  buton: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
  },
  SaveBt: {
    backgroundColor: "#1aab95",
  },
  btSave: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
