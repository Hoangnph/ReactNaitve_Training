
import React from 'react';
import {
    TabButtonTouchOpacity,
    BtnAnimate_Style2,
    BtnAnimate_Label_Text,
    BtnAnimate_Label_EmptyText,
} from '../../../../../@styles';
import {colors} from '../../../../../assets';

const TabBarButton2 = (props) => {

    const animate1 = {0:{scale: .5, translateY: 0},1:{scale: 1.3, translateY: -8}};
    const animate2 = {0:{scale: 1.3, translateY: -8},1:{scale: 1, translateY: 0}};
    const text_animate1 = {0:{scale: 0, translateY:0}, 1:{scale:1, translateY:20}};
    const text_animate2 = {0:{scale: 1, translateY:20}, 1:{scale:0, translateY:0}};

    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;
    const viewRef = React.useRef(null);
    const textRef = React.useRef(null);

    React.useEffect(() => {
        if (focused) {
            viewRef.current.animate(animate1);
            textRef.current.animate(text_animate1);
        } else {
            viewRef.current.animate(animate2);
            textRef.current.animate(text_animate2);
        }
    },[focused])

    return (
        <TabButtonTouchOpacity
            onPress={onPress}
            activeOpacity={1}
        >
            <BtnAnimate_Style2
                ref={viewRef}
                duration={300}
                style={focused ? {backgroundColor: colors.secondary, borderWidth: 4} : {backgroundColor: colors.white, borderWidth: 0} }
            >
                <item.activeIcon height={24} width={24} style={ focused ? {tintColor: colors.white} : {tintColor: colors.light_gray} } />
            </BtnAnimate_Style2>
            
            <BtnAnimate_Label_Text
                ref={textRef}
                duration={300}
            >
                {item.label}
            </BtnAnimate_Label_Text>
            
        </TabButtonTouchOpacity>
    )
}

export default TabBarButton2