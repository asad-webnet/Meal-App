import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

import CategoriesScreen from './CategoriesScreen';
import Colors from '../constants/Colors'

const CategoryMealScreen = props => {

    const renderMealItem = itemData => {
        return (<MealItem
            image={itemData.item.imageUrl}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            title={itemData.item.title}
            onSelectMeal={() => {
                props
                    .navigation
                    .navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id,
                            title: itemData.item.title
                        }
                    })
            }}
            duration={itemData.item.duration}/>);
    };

    const catId = props.navigation.state.params.categoryId;

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>
            <FlatList
                style={{
                width: '100%',
            }}
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}/>
        </View>
    )

}
CategoryMealScreen.navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('title', 'Meal title')
});

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding : 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoryMealScreen;