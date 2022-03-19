import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import * as U from './styles';

import { useNavigation } from '@react-navigation/native';


export default function Home(){

    type Nav = {
        navigate: (value: string) => void;
      }

    const navigation = useNavigation<Nav>();

    return(
        
        <U.Container>
            <U.ContainerImagem>
                <Image
                    source={require('../../assets/imagem_perfil.png')}
                />
            </U.ContainerImagem>
            <U.ContainerTitle>
                <U.UserName>Gustavo Borges</U.UserName>
            </U.ContainerTitle>
            
            <U.ContainerDescrição>
                <U.Descrição>Uma pessoa que vive no planeta Terra e gosta de Pastel</U.Descrição>
            </U.ContainerDescrição>

            <U.ContainerButton>
                <U.PerfilButtons>
                    <U.ButtonText>AVALIAÇÕES FEITAS</U.ButtonText>
                </U.PerfilButtons>
            </U.ContainerButton>

            <U.ContainerButton>
                <U.PerfilButtons>
                    <U.ButtonText>LUGARES VISITADOS</U.ButtonText>
                </U.PerfilButtons>
            </U.ContainerButton>

            <U.ContainerButton>
                <U.PerfilButtons>
                    <U.ButtonText>GUIAS FAVORITOS</U.ButtonText>
                </U.PerfilButtons>
            </U.ContainerButton>


            <U.ContainerConquistas>
                <U.TextConquistas>CONQUISTAS</U.TextConquistas>
                <Image
                    source={require('../../assets/conquistas.png')}
                />
            </U.ContainerConquistas>

        </U.Container>
    );
}