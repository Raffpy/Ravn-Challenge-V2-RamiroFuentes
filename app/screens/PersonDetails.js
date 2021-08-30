import React, { useEffect } from 'react';
//import config from '../../config';
import styles from '../../styles';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import VehicleCard from '../ui/VehicleCard';

const PersonDetails = ({route, navigation}) => {

    const {name, eyeColor, hairColor, skinColor, birthYear, vehicleConnection} = route.params;

    useEffect(() => {
    navigation.setOptions({
        title: name,
      });
    }, [])

    const renderItem = ({ item }) => (
        <VehicleCard name={ item.name }/>
    );
   
    return (
        <View style={styles.peopleListingSafeArea}>
            <Text style={styles.personSectionTitles}>General Information</Text>

            <View style={styles.personDetailsStyle}>
                <View style={styles.peopleCardName}>
                    <Text style={styles.personDetailsTitles}>Eye Color</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.personDetailsValues}>{eyeColor}</Text>
                </View>    
            </View>

            <View style={styles.personDetailsStyle}>
                <View style={styles.peopleCardName}>
                    <Text style={styles.personDetailsTitles}>Hair Color</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.personDetailsValues}>{hairColor}</Text>
                </View>    
            </View>

            <View style={styles.personDetailsStyle}>
                <View style={styles.peopleCardName}>
                    <Text style={styles.personDetailsTitles}>Skin Color</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.personDetailsValues}>{skinColor}</Text>
                </View>    
            </View>

            <View style={styles.personDetailsStyle}>
                <View style={styles.peopleCardName}>
                    <Text style={styles.personDetailsTitles}>Birth Year</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.personDetailsYearValues}>{birthYear}</Text>
                </View>    
            </View>
            
            <Text style={styles.personSectionTitles}>Vehicles</Text>
            <View>
                <FlatList
                    data={vehicleConnection.vehicles}
                    renderItem={renderItem}>
                </FlatList>
            </View>
        </View>   
    )
}

export default PersonDetails;