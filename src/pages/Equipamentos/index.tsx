import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

import * as E from './styles';

import { useNavigation } from '@react-navigation/native';


export default function Equipamentos(){

    type Nav = {
        navigate: (value: string) => void;
      }

    const navigation = useNavigation<Nav>();
      
    return(
        <ScrollView>
            <E.Container>

                
                <E.ContainerTitle>
                    <E.BackButton onPress={() => navigation.navigate('Menu')}>
                        <E.BackImage
                            source={require('../../assets/backbutton.png')}
                        />
                    </E.BackButton>
                    <E.Title>EQUIPAMENTOS</E.Title>
                </E.ContainerTitle>
                <E.ContainerInput>
                    <E.Input
                        placeholder='PESQUISE O PRODUTO'
                        placeholderTextColor="#FF4600"
                    >    
                    </E.Input>
                </E.ContainerInput>

                <E.ContainerTodos>

                    <E.ContainerProdutos>
                        <E.ContainerRow>
                            <E.TitleProduto>Cadeira de Rodas Motorizada</E.TitleProduto>
                            <E.Logo
                                source={require('../../assets/empresa.png')}
                            />
                        </E.ContainerRow>

                        <E.ContainerRow>
                            <Image
                                source={require('../../assets/cadeira.png')}
                            />
                            <E.ContainerColumn>
                                <E.Descrição>- Fechamento em duplo "X"</E.Descrição>
                                <E.Descrição>- Apoio de braços removíveis</E.Descrição>
                                <E.Descrição>- Apoio de pés escamoteáveis</E.Descrição>
                            </E.ContainerColumn>
                        </E.ContainerRow>
                        <E.Price> R$ 200/24h</E.Price>
                        <E.ContainerButton>
                            <E.BuyButton>
                                <E.ButtonText onPress={()=>{ Linking.openURL('http://www.seatmobile.com.br/sm1.asp')}}>ALUGAR</E.ButtonText>
                            </E.BuyButton>
                        </E.ContainerButton>


                    </E.ContainerProdutos>

                    <E.ContainerProdutos>
                        <E.ContainerRow>
                            <E.TitleProduto>Cadeira de Rodas Motorizada</E.TitleProduto>
                            <E.Logo
                                source={require('../../assets/empresa.png')}
                            />
                        </E.ContainerRow>

                        <E.ContainerRow>
                            <Image
                                source={require('../../assets/scooter.png')}
                            />
                            <E.ContainerColumn>
                                <E.Descrição>- Guidão Regulável</E.Descrição>
                                <E.Descrição>- Freio eletromagnético</E.Descrição>
                                <E.Descrição>- Em aço reforçado</E.Descrição>
                            </E.ContainerColumn>
                        </E.ContainerRow>
                        <E.Price> R$ 500/24h</E.Price>
                        <E.ContainerButton>
                            <E.BuyButton>
                                <E.ButtonText onPress={()=>{ Linking.openURL('http://www.seatmobile.com.br/scooterstandard.asp')}}>ALUGAR</E.ButtonText>
                            </E.BuyButton>
                        </E.ContainerButton>


                    </E.ContainerProdutos>

                </E.ContainerTodos>
            </E.Container>
        </ScrollView>
    );
}