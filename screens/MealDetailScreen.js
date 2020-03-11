import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

import {MEALS} from '../data/dummy-data'

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id = mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go back to categories" onPress={() => {
                props.navigation.popToTop();
            }}/>
        </View>
    )

}
MealDetailScreen.navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('title', 'Meal title')
});


const styles = StyleSheet.create({
    screen : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        
    }
});

export default MealDetailScreen ;