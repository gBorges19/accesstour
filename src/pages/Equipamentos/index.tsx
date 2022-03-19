import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import * as E from './styles';

import { useNavigation } from '@react-navigation/native';


export default function Home(){

    type Nav = {
        navigate: (value: string) => void;
      }

    const navigation = useNavigation<Nav>();
      
    return(
        
        <E.Container>
            <E.ContainerTitle>
                <E.Title>EQUIPAMENTOS</E.Title>
            </E.ContainerTitle>
            <E.ContainerInput>
                <E.Input
                    placeholder='PESQUISE O PRODUTO'
                >    
                </E.Input>
            </E.ContainerInput>
        </E.Container>
    );
}