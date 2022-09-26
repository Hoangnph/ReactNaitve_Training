import { View, Text } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper';
import {
    ContainerView,
    HeaderView,
} from '../../../@styles'

export default function MainScreen({navigation}) {

  const navigator = (route) => navigation.navigate(route);

  return (
    <ContainerView>
      <HeaderView>
        <List.Accordion
          title="Choose TabType"
          left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="AnimateTab1" onPress={() => navigator('TabStyle1')} />
          <List.Item title="AnimateTab2" onPress={() => navigator('TabStyle2')} />
          <List.Item title="AnimateTab3" onPress={() => navigator('TabStyle3')} />
        </List.Accordion>
      </HeaderView>
    </ContainerView>
  )
}