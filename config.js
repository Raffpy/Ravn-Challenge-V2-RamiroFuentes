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

    personDetailsStyle : {
        flexDirection: 'row',
        marginHorizontal: 10,
        height: 40,
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

    personSectionTitles: {
        color: $ravnBlack,
        fontWeight: 'bold',
        marginTop: 30,
        marginHorizontal: 16,
        marginBottom: 6,
    },

    personDetailsTitles: {
        color: $textLight,
        fontWeight: 'bold',
    },

    personDetailsValues: {
        color: $ravnBlack,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },

    personVehiclesText: {
        color: $textLight,
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 6,
    },

    personVehiclesCard : {
        flexDirection: 'row',
        marginHorizontal: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        elevation: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
        borderBottomColor: $separatorPeopleCard,
        borderBottomWidth: 1,
        marginBottom: 5,
    },

    

}
