import { Platform, Appearance } from 'react-native';

const $ravnBlack = '#121212';
const $textDark = '#333333';
const $textLight = '#828282';
const $textEnphasis = '#EC5757';
const $white = '#FFFFFF';
const $statusBarContent = 'light-content';
const $customRed = '#EC5757'
const $separatorPeopleCard = '#E5E5E5'

export default {
    headerBackgroundColor: $ravnBlack,
    headerTextColor: $white,
    statusBarContent: $statusBarContent,
    lightGray: $textLight,
    
    loaderContainer: {
        marginTop: 5,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loaderText: {
        color: $textLight,
        fontWeight: 'bold'
    },
    failedLoadDataText: {
        color: $customRed,
        fontWeight: 'bold'
    },

    peopleCardName: {
        color: $ravnBlack,
        fontWeight: 'bold'
    },

    peopleCardRole: {
        color: $textLight
    },

    peopleCardStyle : {
        flexDirection: 'row',
        marginHorizontal: 10,
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        elevation: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
        borderBottomColor: $separatorPeopleCard,
        borderBottomWidth: 1,
        marginBottom: 5,
    },

}
