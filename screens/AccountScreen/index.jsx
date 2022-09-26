import React from 'react'
import {
  ContainerView,
  HeaderView,
  TitleText,
} from '../../@styles';

export default function AccountScreen() {
  return (
    <ContainerView style={{backgroundColor: "#999"}}>
      <HeaderView>
        <TitleText>Account Screen</TitleText>
      </HeaderView>
    </ContainerView>
  )
}