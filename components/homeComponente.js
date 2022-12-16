import React from 'react';
import { View, StyleSheet} from 'react-native';
import Usuario from '../components/usuarioComponent/UsuarioComponent.js';


export default function Home(){
    return(
        <View style={myStyles.conteinarView}>
            <Usuario></Usuario>
        </View>
    );
}

const myStyles = StyleSheet.create({
    conteinarView:{
        flex: 1,
        backgroundColor: '#cecece'
    }
});