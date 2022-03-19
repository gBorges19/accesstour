import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import * as C from './styles';

import { useNavigation } from '@react-navigation/native';


export default function Home(){

    type Nav = {
        navigate: (value: string) => void;
      }

    const navigation = useNavigation<Nav>();

    return(
        
        <C.Container>
            <Text>Configurações</Text>
        </C.Container>
    );
}