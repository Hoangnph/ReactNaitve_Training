import styled from "styled-components";
import {View,TouchableOpacity, Text} from 'react-native';
import {colors} from '../../../assets';

import * as Animatable from 'react-native-animatable';

export const TabButtonTouchOpacity = styled(TouchableOpacity)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const BtnAnimate_Style1 = Animatable.createAnimatableComponent(styled(View)`
    flex:1;
    justify-content: center;
    align-items: center;
`
)
export const BtnAnimate_Style2 = Animatable.createAnimatableComponent(styled(View)`
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    borderRadius: 25px;
    borderWidth: 4px;
    borderColor: ${colors.white};
`
)

export const BtnAnimate_Circle_BG = Animatable.createAnimatableComponent(styled(View)`
    position: absolute;
    backgroundColor: ${colors.secondary};
    borderRadius: 25px;
`)

export const BtnAnimate_Label_Text = Animatable.createAnimatableComponent(styled(Text)`
    font-family: SFProDisplay-Regular;
    font-size: 13px;
    color: ${colors.secondary};
    text-align: center;
`)