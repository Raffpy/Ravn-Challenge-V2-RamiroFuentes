import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import config from '../../config';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default VehicleCard = (props) => {

    return (
        <View style={config.personVehiclesCard}>
            <Text style={config.personVehiclesText}>{props.name}</Text>
        </View>
    );
}