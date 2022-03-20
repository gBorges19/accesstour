import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import * as G from './styles';

import { useNavigation } from '@react-navigation/native';


export default function GuiasPesquisa(){

    type Nav = {
        navigate: (value: string) => void;
      }

    const navigation = useNavigation<Nav>();

    return(
        
        <G.Container>
                <G.ContainerTitle>
                    <G.BackButton onPress={() => navigation.navigate('Menu')}>
                        <G.BackImage
                            source={require('../../assets/backbutton.png')}
                        />
                    </G.BackButton>
                    <G.Title>GUIAS</G.Title>
                </G.ContainerTitle>
                <G.Texto>Destino:</G.Texto>
                <G.ContainerInput>
                    <G.Input
                        placeholder='DIGITE SEU DESTINO'
                        placeholderTextColor="#FF4600"
                    >
                    </G.Input>
                </G.ContainerInput>
                <G.Texto>Experiência Desejável:</G.Texto>
                <G.ImageSelect
                    source={require('../../assets/Select.png')}
                />
            <G.ContainerButton>
                <G.ButtonSearch>
                    <G.ButtonText onPress={() => navigation.navigate('Guias')}>PESQUISAR</G.ButtonText>
                </G.ButtonSearch>
            </G.ContainerButton>
        </G.Container>
    );
}