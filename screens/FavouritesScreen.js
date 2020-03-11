import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const FavouritesScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>The Favourites screen</Text>
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

export default FavouritesScreen ;