
import React from 'react';
import {
    TabButtonTouchOpacity,
    BtnAnimate_Style1,
} from '../../style';
import {colors} from '../../../../../assets';

const TabBarButton1 = (props) => {

    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;
    const viewRef = React.useRef(null);

    React.useEffect(() => {
        if (focused) {
            viewRef.current.animate({0:{scale: .5, rotate: "0deg"},1:{scale: 1.5, rotate: "360deg"}});
        } else {
            viewRef.current.animate({0:{scale: 1.5, rotate: "360deg"},1:{scale: 1, rotate: "0deg"}});
        }
    },[focused])

    return (
        <TabButtonTouchOpacity
            onPress={onPress}
            activeOpacity={1}
        >
            <BtnAnimate_Style1
                ref={viewRef}
                duration={1000}
            >
                    <item.activeIcon height={24} width={24} style={ focused ? {tintColor: colors.primary} : {tintColor: colors.light_gray} } />
            </BtnAnimate_Style1>
        </TabButtonTouchOpacity>
    )
}

export default TabBarButton1