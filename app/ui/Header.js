import { View } from 'react-native';
import React from 'react';
import config from '../../config';

export default Header = (props) => {
    
    return (
        <View style={config.style.headerBackgroundColor}>
            <Text style="color: #ffffff">
                People of Star Wars
            </Text>
        </View>
    );
}