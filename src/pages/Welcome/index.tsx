import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import * as W from './styles'
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Welcome(){
    
    const AnimatedContainer = Animatable.createAnimatableComponent(W.ContainerForm)

    type Nav = {
        navigate: (value: string) => void;
      }

    const navigation = useNavigation<Nav>();

    return(
        <W.Container>
            <W.ContainerLogo>
                <Animatable.Image
                animation="flipInY"
                source={require('../../assets/logo.png')}
                style={{width: '85%'}}
                resizeMode="contain"
                />
            </W.ContainerLogo>

            <AnimatedContainer animation="fadeInUp" delay={600}>
                <W.SubTitle>Seja bem-vindo(a) ao</W.SubTitle>
                <W.Title>AccessTour</W.Title>

                <W.Button onPress={() => navigation.navigate('SignIn')}>
                    <W.ButtonText>Acessar</W.ButtonText>
                </W.Button>
            </AnimatedContainer>

        </W.Container>
    );
}