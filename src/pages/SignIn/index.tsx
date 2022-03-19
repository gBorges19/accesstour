import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import * as S from './styles';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

const AnimatedContainerTitle = Animatable.createAnimatableComponent(S.ContainerTitle)

export default function SignIn(){


    type Nav = {
        navigate: (value: string) => void;
      }

    const navigation = useNavigation<Nav>();

    return(
        
        <S.Container>

            <AnimatedContainerTitle animation="fadeInLeft" delay={600}>
                <S.Title>Já possui uma conta?</S.Title>
            </AnimatedContainerTitle>

            <S.ContainerImage>
                <Animatable.Image
                    animation="fadeInRight"
                    delay={1000}
                    source={require('../../assets/login.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"
                />
            </S.ContainerImage>

            <S.ContainerForm>

                <S.ContainerInput>
                    <S.Input
                        placeholder="Email"
                        placeholderTextColor="#FF4600"
                    />
                </S.ContainerInput>

                <S.ContainerInput>
                    <S.Input
                        placeholder="Password"
                        placeholderTextColor="#FF4600"
                    />
                </S.ContainerInput>

            </S.ContainerForm>

            <S.ContainerButtons>

                <S.LoginButton>
                    <S.ButtonText>Login</S.ButtonText>
                </S.LoginButton>

                <S.RegisterButton onPress={() => navigation.navigate('SignUp')}>Novo usuário? Registre-se agora</S.RegisterButton>

            </S.ContainerButtons>

        </S.Container>
    );
}
