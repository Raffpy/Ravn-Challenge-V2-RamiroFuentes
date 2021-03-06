import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
//import config from '../../config';
import styles from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default PeopleCard = (props) => {
    
    //For load FontAwesome Icons
    Icon.loadFont();
    
    //No enable navigation in the person cad
    const navigation = useNavigation();

    let localSpecie = null;
    

    if (props.species!==null) {
        localSpecie = props.species.name+" from ";
    } else {
        localSpecie = "Human from ";
    }
    
    return (
        <TouchableOpacity {...props} onPress={() => navigation.navigate('PersonDetails', {
            id: props.id,
            name: props.name,
            eyeColor: props.eyeColor,
            hairColor: props.hairColor,
            skinColor: props.skinColor,
            birthYear: props.birthYear,
            vehicleConnection: props.vehicleConnection
          })}>
            <View {...props} style={styles.peopleCardStyle}>
                <View>
                    <Text style={styles.peopleCardName}>{props.name}</Text>
                    <Text style={styles.peopleCardRole}>{localSpecie+props.homeworld.name}</Text>
                </View>
                <View style={styles.peopleCardArrow}>
                    <Icon name="chevron-right"  size={10} />
                </View>    
            </View>
        </TouchableOpacity>
    );

}