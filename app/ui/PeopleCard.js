import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import config from '../../config';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default Card = (props) => {
    
    Icon.loadFont();
    
    let localSpecie = null;
    const navigation = useNavigation();

    if (props.species!==null) {
        localSpecie = props.species.name+" of";
    } else {
        localSpecie = "Human of";
    }

    return (
        <TouchableOpacity {...props} onPress={() => navigation.navigate('PersonDetails')}>
            <View {...props} style={config.peopleCardStyle}>
                <View>
                    <Text style={config.peopleCardName}>{props.name}</Text>
                    <Text style={config.peopleCardRole}>{localSpecie+props.homeworld.name}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Icon name="chevron-right"  size={10} />
                </View>    
            </View>
        </TouchableOpacity>
    );

}