import React from 'react';
//import config from '../../config';
import styles from '../../styles';
import { View } from 'react-native';
import { Text } from 'react-native';
import { ActivityIndicator } from 'react-native';

export default CustomLoader = (props) => {

    return (
        <View style={styles.loaderContainer}>
            <View style={{marginRight: 10}}>
                <ActivityIndicator size="small" color={styles.lightGray} />
            </View>
            <View>
                <Text style={styles.loaderText}>Loading</Text>
            </View>
        </View>
    );
}
