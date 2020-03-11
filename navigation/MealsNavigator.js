import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Colors';
import {Platform} from 'react-native';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
},{
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor: Platform.OS === 'android'
                ? Colors.primaryColor
                : ''
        },
        headerTintColor: Platform.OS === 'android'
            ? 'white'
            : Colors.primaryColor
    },
    
});

export default createAppContainer(MealsNavigator);