import React from 'react';
import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { HomeScreen } from "./home_screen";
import { RestaurantDetail } from "./dashboards/food/restaurant_detail_screen";
import { FilterScreen } from "./dashboards/food/filter_screen";
import { FoodNavigator } from "./dashboards/food/food_navigator";
import { RideNavigator } from "./dashboards/ride/ride_navigator";
import { getFocusedRouteNameFromRoute, useNavigation } from "@react-navigation/native";
import { myColors } from '../../ultils/myColors';
import { ios, myHeight, myWidth, tabBarStyle } from '../common';
import { Platform, StatusBar } from 'react-native';
import { TrackingNavigator } from './dashboards/tracking/tracking_navigator';
import { OrderTracking } from './dashboards/tracking/order_tracking';


const HomeTAB = createNativeStackNavigator();
const tabHiddenRoutes = ["RideNavigator"];




export const HomeNavigator = ({ navigation, route }) => {

    React.useLayoutEffect(() => {

        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
            navigation.setOptions({ tabBarStyle: { display: 'none' } })

        } else {
            navigation.setOptions(tabBarStyle)
            if (!ios && Platform.Version >= 23) {
                StatusBar.setBackgroundColor(myColors.background)
            }

        }
    }, [navigation, route]);
    return (
        <HomeTAB.Navigator
            screenOptions={({ navigation }) => {
                return {
                    detachPreviousScreen: !navigation.isFocused(),
                    animation: 'fade',
                    headerShown: false,
                }
            }}
            initialRouteName="HomeScreen"
        >
            <HomeTAB.Screen component={HomeScreen} name="HomeScreen" />
            <HomeTAB.Screen component={FoodNavigator} name="FoodNavigator" />
            {/* <HomeTAB.Screen component={FilterScreen} name="FilterScreen" /> */}
            <HomeTAB.Screen component={RestaurantDetail} name="RestaurantDetail" />
            <HomeTAB.Screen component={RideNavigator} name="RideNavigator" />
            {/* <HomeTAB.Screen component={OrderTracking} name="OrderTracking" /> */}


        </HomeTAB.Navigator>
    )
} 