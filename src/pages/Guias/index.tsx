import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';

import * as T from './styles';

import { useNavigation } from '@react-navigation/native';


export default function Guias(){

    type Nav = {
        navigate: (value: string) => void;
      }

    const navigation = useNavigation<Nav>();

    return(
        
    <T.Container>
        <T.ContainerTitle>
            <T.BackButton onPress={() => navigation.navigate('GuiasPesquisa')}>
                <T.BackImage
                    source={require('../../assets/backbutton.png')}
                />
            </T.BackButton>
            <T.Title>GUIAS</T.Title>
        </T.ContainerTitle>
        <T.ImageGuia
            source={require('../../assets/indianajones.png')}
        />
        <T.SubTitle>Indiana Jones</T.SubTitle>
        <T.Texto>Além de um pacato professor de Arqueologia, também sou um guia de turismo em Foz do Iguaçu e de toda a Tríplice Fronteira. Sei falar libras e com meu chicote defendo os idosos enquanto empurro suas cadeiras de rodas. </T.Texto>
        <T.ContainerRow>
            <T.SubTitle>R$ 30,00/h</T.SubTitle>
            <T.ImageStatus source={require('../../assets/StatusGuia.png')}/>
        </T.ContainerRow>
        <T.ContainerButton>
                <T.MessageButton onPress={()=>{ Linking.openURL('https://contate.me/accesstour')}}>
                    <T.ButtonText>ENVIAR MENSAGEM</T.ButtonText>
                </T.MessageButton>
        </T.ContainerButton>
    </T.Container>

    );
}