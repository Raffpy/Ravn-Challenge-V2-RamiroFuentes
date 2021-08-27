import React from 'react';
import config from '../../config';
import { View } from 'react-native';
import { Text } from 'react-native';
import { ActivityIndicator } from 'react-native';

export default CustomLoader = (props) => {

    return (
        <View style={config.navBar}>
            <View style={config.loaderIcon}>
                <ActivityIndicator size="small" color={config.lightGray} />
            </View>
            <View style={config.loaderIcon}>
                <Text>Loading</Text>
            </View>
        </View>
    );
}
