import React, { useEffect } from 'react';
import config from '../../config';
import { FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Loader } from '../ui/CustomLoader';
import { StyleSheet } from 'react-native';
import PeopleCard from '../ui/PeopleCard';
import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../graphql/query/GetAllPeople';


const Item = (props) => (
    <PeopleCard name={props.name} species={props.species} homeworld={props.homeworld}/>
);

const PeopleListing = ({route, navigation}) => {

    const { data, error, loading } = useQuery(GET_ALL_PEOPLE);

    useEffect(() => {
        console.log(data);
    }, [])

    const renderItem = ({ item }) => (
        <Item name={item.name} species={item.species} homeworld={item.homeworld} />
    );

        if (loading && !data){
            return (
                <SafeAreaView style={[, { backgroundColor: config.white }]}>
                    <StatusBar barStyle={config.statusBarContent} backgroundColor={config.headerBackgroundColor} />
                    <CustomLoader/>
                </SafeAreaView>
            )
        }
        if (error) {
            return (
                <SafeAreaView style={[, { backgroundColor: config.white }]}>
                    <View style={config.loaderContainer}>
                        <Text style={config.failedLoadDataText}>Failed to Load Data</Text>
                    </View>
                </SafeAreaView>
            )
        }
        return (
            <SafeAreaView style={[, { backgroundColor: config.white }]}>
                <StatusBar barStyle={config.statusBarContent} backgroundColor={config.headerBackgroundColor} />
                    <FlatList
                        data={data.allPeople.people}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
            </SafeAreaView>
    )
}

export default PeopleListing;