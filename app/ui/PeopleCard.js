import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import config from '../../config';
import Icon from 'react-native-vector-icons/FontAwesome';

export default PeopleCard = (props) => {
    
    Icon.loadFont();

    const onPress = (props) => {
        alert(props.name);
    }

    return (
        <TouchableOpacity {...props} onPress={onPress}>
            <View {...props} style={config.peopleCardStyle}>
                <View>
                    <Text style={config.peopleCardName}>{props.name}</Text>
                    <Text style={config.peopleCardRole}>{props.role}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Icon name="chevron-right"  size={10} />
                </View>    
            </View>
        </TouchableOpacity>
    );

}