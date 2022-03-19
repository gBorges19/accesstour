import React, {useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import * as S from './styles';
import * as Animatable from 'react-native-animatable';

const AnimatedText = Animatable.createAnimatableComponent(S.Title)
import { useNavigation } from '@react-navigation/native';

export default function SignUp(){

    type Nav = {
        navigate: (value: string) => void;
      }

    const navigation = useNavigation<Nav>();

    return(
        
        <S.Container>

            <S.ContainerRow>
                <S.ContainerTitle>
                    <AnimatedText                         
                        animation="pulse"
                        easing="ease-out" 
                        iterationCount="infinite">
                        Sua Jornada começa aqui!
                    </AnimatedText>
                </S.ContainerTitle>
                <S.ContainerImage>
                    <S.Imagem source={require('../../assets/register.png')}/>
                </S.ContainerImage>
            </S.ContainerRow>
            <S.ContainerForm>
                <S.ContainerInput>
                    <S.Input 
                        placeholder="Nome"
                        placeholderTextColor="#FF4600">
                    </S.Input>
                </S.ContainerInput>

                <S.ContainerInput>
                    <S.Input 
                        placeholder="Telefone"
                        placeholderTextColor="#FF4600">
                    </S.Input>
                </S.ContainerInput>

                <S.ContainerInput>
                    <S.Input 
                        placeholder="Email"
                        placeholderTextColor="#FF4600">
                    </S.Input>
                </S.ContainerInput>

                <S.ContainerInput>
                    <S.Input 
                        placeholder="Senha"
                        placeholderTextColor="#FF4600">
                    </S.Input>
                </S.ContainerInput>

                <S.RegistroButton>
                    <S.ButtonText onPress={() => navigation.navigate('Home')}>Registre-se</S.ButtonText>
                </S.RegistroButton>
            </S.ContainerForm>

            
           
        </S.Container>
    );
;
}
