import { Platform, Appearance } from 'react-native';

const $ravnBlack = '#121212';
const $textDark = '#333333';
const $textLight = '#828282';
const $textEnphasis = '#EC5757';
const $white = '#FFFFFF';
const $statusBarContent = 'light-content';

export default {
    headerBackgroundColor: $ravnBlack,
    headerTextColor: $white,
    statusBarContent: $statusBarContent,
    lightGray: $textLight,
    
    navBar: {
        marginTop: 5,
        height: 36,
        flexDirection: 'row',
        alignItems: 'center'
    },
    loaderIcon: {
        flex: 1,
        height: 36,
        justifyContent: 'center',
    }
}
