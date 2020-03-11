import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const FiltersScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>The FiltersScreen screen</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        
    }
});

export default FiltersScreen ;