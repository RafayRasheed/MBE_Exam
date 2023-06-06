import React from 'react';
import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { HomeScreen } from "./home_screen";
import { RestaurantDetail } from "./restaurant_detail_screen";
import { FilterScreen } from "./dashboards/food/filter_screen";
import { FoodNavigator } from "./dashboards/food/food_navigator";
import { RideNavigator } from "./dashboards/ride/ride_navigator";
import { getFocusedRouteNameFromRoute, useNavigation } from "@react-navigation/native";
import { myColors } from '../../ultils/myColors';
import { ios, myHeight, myWidth } from '../common';


const HomeTAB = createNativeStackNavigator();
const tabHiddenRoutes = ["RideNavigator"];


function useHideBottomBar() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' }, tabBarVisible: false });
        return () =>
            navigation.getParent()?.setOptions({ tabBarStyle: undefined, tabBarVisible: undefined });
    }, [navigation]);
}

export const HomeNavigator = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
            navigation.setOptions({ tabBarStyle: { display: 'none' } })

            // navigation.setOptions({ tabBarStyle: { display: 'none' } });
        } else {
            // navigation.setOptions({ tabBarStyle: { display: 'flex' } })

            navigation.setOptions({
                tabBarStyle: {
                    display: 'flex',
                    backgroundColor: myColors.background,
                    paddingHorizontal: myWidth(3.5),
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: myHeight(9.5),
                    paddingBottom: ios ? myHeight(2.2) : myHeight(1.5),
                    paddingTop: myHeight(2.5),
                },
            })

            // navigation.setOptions({
            //     // tabBarStyle: {
            //     //     // borderTopLeftRadius: responsiveScreenWidth(8),
            //     //     // borderTopRightRadius: responsiveScreenWidth(8),
            //     //     // backgroundColor: myColors.background,
            //     //     // height: responsiveScreenHeight(7.8),
            //     // }
            // });
        }
    }, [navigation, route]);
    return (
        <HomeTAB.Navigator
            screenOptions={{
                animation: 'fade',
                headerShown: false
            }}
            initialRouteName="HomeScreen"
        >
            <HomeTAB.Screen component={HomeScreen} name="HomeScreen" />
            <HomeTAB.Screen component={FoodNavigator} name="FoodNavigator" />
            <HomeTAB.Screen component={FilterScreen} name="FilterScreen" />
            <HomeTAB.Screen component={RestaurantDetail} name="RestaurantDetail" />
            <HomeTAB.Screen component={RideNavigator} name="RideNavigator" />


        </HomeTAB.Navigator>
    )
} 