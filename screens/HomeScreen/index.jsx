import React from 'react';
import {View} from 'react-native';
import {
    ContainerView,
    TitleText,
    HeaderView
} from '../../@styles'
import {icons} from '../../assets/images/';


export default function HomeScreen({navigation}) {
  return (
    <ContainerView style={{backgroundColor: "#999"}}>
        <HeaderView>
          <TitleText>Home Screen</TitleText>
        </HeaderView>
    </ContainerView>
  )
}