import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import * as M from './styles';

import { useNavigation } from '@react-navigation/native';


export default function Menu(){

    type Nav = {
        navigate: (value: string) => void;
      }

    const navigation = useNavigation<Nav>();


    return(
        
        <M.Container>
            <M.ContainerTitle>
                <M.Title>MENU</M.Title>
            </M.ContainerTitle>

            <M.ContainerButton>
                <M.MenuButtons>
                    <M.ButtonText onPress={() => navigation.navigate('Home')}>MAPA</M.ButtonText>
                </M.MenuButtons>
            </M.ContainerButton>

            <M.ContainerButton>
                <M.MenuButtons>
                    <M.ButtonText onPress={() => navigation.navigate('UserProfile')}>PERFIL</M.ButtonText>
                </M.MenuButtons>
            </M.ContainerButton>

            <M.ContainerButton>
                <M.MenuButtons>
                    <M.ButtonText onPress={() => navigation.navigate('GuiasPesquisa')}>GUIAS</M.ButtonText>
                </M.MenuButtons>
            </M.ContainerButton>

            <M.ContainerButton>
                <M.MenuButtons>
                    <M.ButtonText onPress={() => navigation.navigate('Equipamentos')}>EQUIPAMENTOS</M.ButtonText>
                </M.MenuButtons>
            </M.ContainerButton>

            <M.ContainerButton>
                <M.MenuButtons>
                    <M.ButtonText onPress={() => navigation.navigate('Configurações')}>CONFIGURAÇÕES</M.ButtonText>
                </M.MenuButtons>
            </M.ContainerButton>
        </M.Container>
    );
}