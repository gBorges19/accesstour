import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import * as H from './styles';

import { useNavigation } from '@react-navigation/native';


export default function Home(){

    type Nav = {
        navigate: (value: string) => void;
      }

    const navigation = useNavigation<Nav>();

    return(
        
        <H.Container>
            <H.Menu>
                <H.ButtonText onPress={() => navigation.navigate('Menu')}>MENU</H.ButtonText>
            </H.Menu>
        </H.Container>
    );
}