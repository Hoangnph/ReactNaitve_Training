import React, { Component, useRef } from 'react';
import {
    ContainerView,
} from '../../@styles'
import {
    animation
} from '../../assets';
import Lottie from 'lottie-react-native';
import MainScreen from '../../router/partTabRoute/MainScreen';
import TabRouter from '../../router/TabRouter';



export function SplashScreen ({navigation}) {
    const [isLoaded, setIsLoaded] = React.useState(false)

    if (!isLoaded) {
        return (
            <ContainerView>
                      <Lottie
                          style={{
                              flex: 1,
                              resizeMode: "contain",
                          }}
                          duration={3000}
                          source={animation.animation_task}
                          autoPlay
                          loop={false}
                          resizeMode="cover"
                          onAnimationFinish={() => {
                              setIsLoaded(true);
                          }}
                      />
            </ContainerView>
          )
    } 
    return(
        <MainScreen navigation={navigation}/>
    )
}

export default SplashScreen