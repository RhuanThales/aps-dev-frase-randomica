import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const phraseAPI = [
  'Não desista, não há vergonha em cair! A verdadeira vergonha é não se levantar novamente!',
  'Se você não consegue fazer algo, então não faça. Foque naquilo que consegue fazer.',
  'Somente aqueles que sofreram por muito tempo conseguem ver luz através das sombras.',
  'Se você aceita tudo sem ao menos questionar, vai acabar perdendo a capacidade de pensar.',
  'Erga-se',
  'Se você não gosta do seu destino, não o aceite. Em vez disso, tenha a coragem para transformá-lo naquilo que você quer que ele seja.',
  'Você não conhece as pessoas, você conhece apenas o que elas permitem que você veja.',
  'Um sonho vale menos que nada se você não tem ninguém com quem compartilhá-lo.',
  'O medo não é malvado. Ele te mostra qual é a sua franqueza. E quando você conhece a sua franqueza, então pode se tornar mais forte e mais gentil.',
  'Omae wa mou shindeiru!',
  'Os limites só existem se você os deixar existir.',
  'Veja como é fácil e descanse. Não faça hoje o que pode deixar para amanhã.',
  'Não é que eu sou solitário, conheço a estupidez humana e não quero me contagiar.'
]

export default function App() {

  let closedBook = "https://image.flaticon.com/icons/png/512/85/85528.png";
  let openedBook = "https://i.pinimg.com/originals/2a/74/94/2a7494e0f5522c30601d930e4596c62e.png";
  const [image, setImage] = useState(closedBook)
  const [phrase, setPhrase] = useState()

  function showPhrase() {
    const size = phraseAPI.length
    setImage(openedBook)
    setPhrase(phraseAPI[Math.floor(Math.random()*size)])
  }

  function closePhrase() {
    setImage(closedBook)
    setPhrase()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: image }} 
      style= {{width: 250, height: 250 }}
      />
      <View>
        <Text style={styles.phrase}>{phrase}</Text>
        <TouchableOpacity style={styles.stlButton} onPress={() => showPhrase()}> <Text style={styles.textButton}>Mostrar frase do dia</Text> </TouchableOpacity>
        <TouchableOpacity style={styles.stlButton} onPress={() => closePhrase()}>  <Text style={styles.textButton}>Fechar frase do dia</Text> </TouchableOpacity>
        <StatusBar style="auto"/>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#FFF',
    width: '100%',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center'
  },
  stlButton: {
    backgroundColor: '#836FFF',
    borderRadius: 4,
    padding: 6
  },
  phrase: {
    fontSize: 20,
    fontWeight: 400,
    backgroundColor: '#ADD8E6'
  },
  textButton: {
    fontSize: 18,
    fontWeight: 400,
  }
});
