import {
    icons
} from '../../../../assets';
import {
    HomeScreen,
    DetailsScreen,
    AccountScreen,
} from '../../../../screens';
 
 export default TabArr = [
    {route: 'Home', label: 'Home', activeIcon: icons.HomeIcon_focus, inActiveIcon: icons.HomeIcon_default, component: HomeScreen, isHeaderShow: false},
    {route: 'Detail', label: 'Detail', activeIcon: icons.QRCodeIcon, inActiveIcon: icons.QRCodeIcon, component: DetailsScreen, isHeaderShow: false},
    {route: 'Account', label: 'Account', activeIcon: icons.AccountIcon_default, inActiveIcon: icons.AccountIcon_default, component: AccountScreen, isHeaderShow: false},
]