import React from 'react';
import config from '../../config';
import { FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Loader } from '../ui/CustomLoader';
import { StyleSheet } from 'react-native';
import PeopleCard from '../ui/PeopleCard';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
});

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'First Item',
      role: 'Role role role'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Second Item',
      role: 'Role role role'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Third Item',
      role: 'Role role role'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third Item',
        role: 'Role role role'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third Item',
        role: 'Role role role'
    },
];

const Item = (props) => (
    <PeopleCard name={props.name} role={props.role}/>
);

const PeopleListing = ({route, navigation}) => {

    const renderItem = ({ item }) => (
        <Item name={item.name} role={item.role} />
      );

    return (
        <SafeAreaView style={[, { backgroundColor: config.white }]}>
            <StatusBar barStyle={config.statusBarContent} backgroundColor={config.headerBackgroundColor} />
            <CustomLoader/>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
        </SafeAreaView>
    )
}

export default PeopleListing;