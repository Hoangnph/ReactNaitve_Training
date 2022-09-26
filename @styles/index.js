import styled from "styled-components";
import {View,Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeAreaViewRoot = styled(SafeAreaView)`
    flex: 1;
    flex-direction: row;
    background-color: #FFFFFF;
` 
// View part
const ContainerView = styled(View)`
    flex: 1;
    background-color: #fff;
`

const HeaderView = styled(View)`  
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 60px;
    margin-top: 60px;
`

// Text part
const TitleText = styled(Text)`
    flex: 1;
    text-align: center;
    font-size: 24px;
    font-family: "SFProDisplay-Semibold";
    font-weight: 600;
    color: #000;
`

// export
export {
    SafeAreaViewRoot,
    ContainerView,
    TitleText,
    HeaderView,
}