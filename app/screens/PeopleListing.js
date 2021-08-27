import React from 'react';
import config from '../../config';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Loader } from '../ui/CustomLoader';

const PeopleListing = ({route, navigation}) => {

    return (
        <SafeAreaView style={[, { backgroundColor: config.white }]}>
            <StatusBar barStyle={config.statusBarContent} backgroundColor={config.headerBackgroundColor} />
            <CustomLoader/>
        </SafeAreaView>
    )
}

export default PeopleListing;