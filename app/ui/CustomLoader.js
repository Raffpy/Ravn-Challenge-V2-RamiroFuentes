import React from 'react';
import config from '../../config';
import { View } from 'react-native';
import { Text } from 'react-native';
import { ActivityIndicator } from 'react-native';

export default CustomLoader = (props) => {

    return (
        <View style={config.loaderContainer}>
            <View style={{marginRight: 10}}>
                <ActivityIndicator size="small" color={config.lightGray} />
            </View>
            <View>
                <Text style={config.loaderText}>Loading</Text>
            </View>
        </View>
    );
}
