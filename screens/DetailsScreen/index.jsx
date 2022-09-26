import React, { Component } from 'react';
import {
  ContainerView,
  HeaderView,
  TitleText,
} from '../../@styles'

export class DetailsScreen extends Component {
  render() {
    return (
      <ContainerView style={{backgroundColor: "#999"}}>
        <HeaderView>
          <TitleText>Details Screen</TitleText>
        </HeaderView>
      </ContainerView>
    )
  }
}

export default DetailsScreen