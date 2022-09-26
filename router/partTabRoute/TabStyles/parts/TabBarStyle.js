import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabArr from './TabBarArray';
import {
    TabBarButton1,
    TabBarButton2,
} from './TabBarBtnStyles';

export default function TabStyle(props) {

    const type = props.type;
    
    const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 80,
                position: 'absolute',
                borderRadius: 10,
                borderColor: "#444",
            }
        }}
      >
        {TabArr.map((item,index) => {
            return(
                <Tab.Screen 
                    key={`tab${index}`}
                    name={item.route} 
                    component={item.component}
                    options={{
                        tabBarShowLabel: false,
                        tabBarButton: (props) => {
                            if (type === "type1"){
                                return (
                                    <TabBarButton1 {...props} item={item} />
                                )
                            }
                            else if (type === "type2"){
                                    return (
                                        <TabBarButton2 {...props} item={item} />
                                    )
                            }
                        }
                     }}
                />
            )
        })}
      </Tab.Navigator>
  )
}