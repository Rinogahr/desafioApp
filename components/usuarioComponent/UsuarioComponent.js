import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';


export default function Usuario(){
    const {user, setUser} = useState();
    const {prof, setProf} = useState();

    return(
        <View style={myStyle.usuarioContainer}>

            <View style={myStyle.usuarioInputContainer}>
                <TextInput style={myStyle.usuarioInput}>Qual é o seu nome?</TextInput>
            </View>

            <View style={myStyle.usuarioText}>
            
                <Text>Bem vindo {user}</Text>
            
            </View>

            <View style={myStyle.proficaoInputContainer}>
                <TextInput style={myStyle.proficaoInput}>Qual é a sua profissão?</TextInput>
            </View>

            <View style={myStyle.proficaoText}>
            
                <Text>Bem vindo {prof}</Text>
            
            </View>

            <View style={myStyle.usuarioFooter}>
            
                <Text>Criado por: Rodrigo-P-Maciel</Text>
            
            </View>

        </View>
    );
}

const myStyle = StyleSheet.create({
    usuarioContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    usuarioInputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    usuarioInput: {
    //    backgroundColor: "#fbff00",
       width: '100%',
    },
    usuarioText: {
        flex: 5,
    },
    proficaoText: {
        flex: 5,
    },
    usuarioFooter: {},
});