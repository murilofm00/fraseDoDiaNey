import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

interface IProps {}
interface IState {
  frases: string[];
  fraseSelecionada: number;
}

export default class App extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.random = this.random.bind(this);
    this.changeFrase = this.changeFrase.bind(this);
    let frases = [
      "que isso .. muito cansado ! rsrs .. alguem tem um corpo novo ai ? kkkk",
      "ai na moral .. hoje eu to bobo !! kkkkkkkkkkkkkkkkkkkkkkk",
      "Só tuitada Violenta !",
      "o ousado chegouu !!! kkkk",
      "Nossa que saudade de comer um lanche do Mc Donald's ... voltando pro Brasil, primeira coisa que eu quero é #mcDonald's kkkkkkkkk",
      "Aqui ta muito frio .... #xôFrio",
    ];
    let random = this.random(frases.length);
    this.state = {
      frases: frases,
      fraseSelecionada: random,
    };
  }

  render() {
    return (
      <View style={[styles.container, { padding: 25 }]}>
        <Image
          style={{ paddingBottom: 20 }}
          source={{
            height: 100,
            width: 200,
            uri:
              "https://i0.statig.com.br/bancodeimagens/2a/f3/mg/2af3mgb8rm1bybhexew447rxi.jpg",
          }}
        />
        <Text style={[styles.frase]}>
          "{this.state.frases[this.state.fraseSelecionada]}"
        </Text>
        <TouchableOpacity style={styles.botao} onPress={this.changeFrase}>
          <Text style={styles.botaoTexto}>Abrir frase do dia</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }

  changeFrase() {
    this.setState({
      fraseSelecionada: this.random(this.state.frases.length),
    });
  }

  random(max: number): number {
    let min: number = 0;
    return Math.floor(Math.random() * (max - min) + min);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  frase: {
    fontSize: 18,
    margin: 10,
    color: "#FF3823",
  },
  botao: {
    backgroundColor: "white",
    borderColor: "#FF3823",
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  botaoTexto: {
    color: "#FF3823",
    fontWeight: "bold",
  },
});
