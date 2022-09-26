import styled from "styled-components";
import { SafeAreaView } from 'react-native-safe-area-context';
import {View,TouchableOpacity, Text} from 'react-native';
import {colors} from '../assets';
import * as Animatable from 'react-native-animatable';


// Common styles
export const SafeAreaViewRoot = styled(SafeAreaView)`
    flex: 1;
    flex-direction: row;
    background-color: #FFFFFF;
` 
// View part
export const ContainerView = styled(View)`
    flex: 1;
    background-color: #fff;
`

export const HeaderView = styled(View)`  
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 64px;
    margin-top: 60px;
`

// Text part
export const TitleText = styled(Text)`
    flex: 1;
    text-align: center;
    font-size: 24px;
    font-family: "SFProDisplay-Semibold";
    font-weight: 600;
    color: #000;
`


// Sytles for Bottom Tab Navigator
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
    position: absolute;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    borderRadius: 18px;
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

export const BtnAnimate_Label_EmptyText = Animatable.createAnimatableComponent(styled(Text)``)