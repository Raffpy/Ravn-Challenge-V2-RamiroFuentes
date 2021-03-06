import React, { useLayoutEffect } from 'react';
import styles from '../../styles';
import { FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { ActivityIndicator } from 'react-native';
import CustomLoader, { Loader } from '../ui/CustomLoader';
import { StyleSheet } from 'react-native';
import PeopleCard from '../ui/PeopleCard';
import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../graphql/query/GetAllPeople';


const PeopleListing = ({route, navigation}) => {

    const { data, error, loading, fetchMore } = useQuery(GET_ALL_PEOPLE, {
        variables : { after: null }
    });

    const renderItem = ({ item }) => (
        <PeopleCard 
            id={item.id} 
            name={item.name} 
            species={item.species} 
            homeworld={item.homeworld} 
            eyeColor={item.eyeColor} 
            hairColor={item.hairColor} 
            skinColor={item.skinColor} 
            birthYear={item.birthYear} 
            vehicleConnection={item.vehicleConnection}
        />
    );

    if (loading && !data){
        return (
            <SafeAreaView style={[, { backgroundColor: styles.white }]}>
                <StatusBar barStyle={styles.statusBarContent} backgroundColor={styles.headerBackgroundColor} />
                <CustomLoader/>
            </SafeAreaView>
        )
    }
    if (error) {
        return (
            <SafeAreaView style={[, { backgroundColor: styles.white }]}>
                <StatusBar barStyle={styles.statusBarContent} backgroundColor={styles.headerBackgroundColor} />
                <View style={styles.loaderContainer}>
                    <Text style={styles.failedLoadDataText}>Failed to Load Data</Text>
                </View>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style={styles.peopleListingSafeArea }>
            <StatusBar barStyle={styles.statusBarContent} backgroundColor={styles.headerBackgroundColor} />
                <FlatList
                    data={data.allPeople.people}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ListFooterComponent={() =>loading?null:<CustomLoader/>}
                    onEndReached={()=>{
                        const { endCursor } = data.allPeople.pageInfo;
                        fetchMore({
                            variables: {after: endCursor},
                            updateQuery: (prevResult, { fetchMoreResult }) => {
                                fetchMoreResult.allPeople.people =[
                                    ...prevResult.allPeople.people,
                                    ...fetchMoreResult.allPeople.people
                                ];
                                return fetchMoreResult;
                            }
                        })
                    }}
                />
        </SafeAreaView>
    )
}

export default PeopleListing;