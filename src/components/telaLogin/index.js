import React from "react";
import {View, Text, TextInput, Image, TouchableOpacity} from "react-native";
import styles from "./styles";


export default function TelaLogin() {
    return (
        <View style={styles.boxLogin}>
                <Image source={require('./img/logo.png')} />
                <Text style={styles.textTitle}>F U L L B O D Y</Text>
                <TextInput style={styles.Input}
                //onChange={setUsername}
                //value={username}
                placeholder="Digite seu E-mail"></TextInput>
                <TextInput style={styles.Input}
                //onChange={setUsername}
                //value={username}
                secureTextEntry={true}
                placeholder="Digite sua senha"></TextInput>
                <TouchableOpacity style={styles.bntEntrar}>
                    <Text style={styles.TextBntEntrar}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textRecSenha}>Esqueceu a senha ?</Text>
                </TouchableOpacity>
                <Text style={styles.textCopy}>Desenvolvido por equipe</Text>
        </View>
    );
}