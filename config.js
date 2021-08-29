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
    customWhite: $white,

    loaderContainer: {
        marginTop: 5,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loaderText: {
        fontSize: 17,
        color: $textLight,
        fontWeight: 'bold'
    },
    failedLoadDataText: {
        fontSize: 17,
        color: $customRed,
        fontWeight: 'bold'
    },

    peopleCardName: {
        fontSize: 16,
        color: $ravnBlack,
        fontWeight: 'bold'
    },

    peopleCardRole: {
        fontSize: 13,
        color: $textLight,
        marginBottom: 16
    },

    peopleCardArrow: {
        alignItems: 'center', 
        marginBottom:12
    },

    peopleListingSafeArea: {
        marginTop: 10,
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
        paddingRight: 16,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 16,
        marginRight: 16,
        borderBottomColor: $separatorPeopleCard,
        borderBottomWidth: 1
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
        fontSize: 16,
    },

    personDetailsTitles: {
        color: $textLight,
        fontWeight: 'bold',
        fontSize: 16,
    },

    personDetailsValues: {
        color: $ravnBlack,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 16,
    },

    personDetailsYearValues: {
        color: $ravnBlack,
        textTransform:'uppercase',
        fontWeight: 'bold',
        fontSize: 16,
    },

    personVehiclesText: {
        color: $textLight,
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 6,
        fontSize: 16,
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
