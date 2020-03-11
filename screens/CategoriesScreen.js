import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    TouchableOpacity,
    Platform
} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (<CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
            props
                .navigation
                .navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id,
                        title: itemData.item.title
                    }
                })
        }}/>);
    }


    return (<FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>)

}
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android'
            ? Colors.primaryColor
            : ''
    },
    headerTintColor: Platform.OS === 'android'
        ? 'white'
        : Colors.primaryColor
};

const styles = StyleSheet.create({});

export default CategoriesScreen;