import React, { useEffect } from 'react';
import config from '../../config';
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
        <View style={config.peopleListingSafeArea}>
            <Text style={config.personSectionTitles}>General Information</Text>

            <View style={config.personDetailsStyle}>
                <View style={config.peopleCardName}>
                    <Text style={config.personDetailsTitles}>Eye Color</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={config.personDetailsValues}>{eyeColor}</Text>
                </View>    
            </View>

            <View style={config.personDetailsStyle}>
                <View style={config.peopleCardName}>
                    <Text style={config.personDetailsTitles}>Hair Color</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={config.personDetailsValues}>{hairColor}</Text>
                </View>    
            </View>

            <View style={config.personDetailsStyle}>
                <View style={config.peopleCardName}>
                    <Text style={config.personDetailsTitles}>Skin Color</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={config.personDetailsValues}>{skinColor}</Text>
                </View>    
            </View>

            <View style={config.personDetailsStyle}>
                <View style={config.peopleCardName}>
                    <Text style={config.personDetailsTitles}>Birth Year</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={config.personDetailsYearValues}>{birthYear}</Text>
                </View>    
            </View>
            
            <Text style={config.personSectionTitles}>Vehicles</Text>
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