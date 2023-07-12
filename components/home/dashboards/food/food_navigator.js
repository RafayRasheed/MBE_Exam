import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { FoodScreen } from "./food_screen";
import { FilterScreen } from "./filter_screen";
import { RestaurantDetail } from "./restaurant_detail_screen";
import React, { useEffect, useState } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { ios, tabBarStyle, } from "../../../common";
import { StatusBar } from "react-native";
import { myColors } from "../../../../ultils/myColors";
import { ItemDetail } from "./item_detail_screen";
import { RestaurantAll } from "./restuarant_all_screen";
import { RestaurantMoreInfo } from "./rest_more_info_screen";
import { RestCartNavigator } from "./restaurant_cart/res_cart_navigator";
import { Address } from "./address_screen";
import { SaveAddress } from "./address_save_screen";
import { RestaurantSearch } from "./res_search_screen";
import { DoneOrder } from "./rest_done_order";
import { RestRating } from "./rest_rating_screen";



const FoodTAB = createNativeStackNavigator();
const androidStatusHide = ['RestaurantDetail']

const hideBottom = ['RestCartNavigator', 'Address', 'SaveAddress']
export const FoodNavigator = ({ navigation, route }) => {
    const [hideStatus, setHideStatus] = useState(false)
    React.useLayoutEffect(() => {
        // if (!hideBottom.includes(getFocusedRouteNameFromRoute(route))) {
        //     console.log('naaya')

        //     navigation.getParent().setOptions(tabBarStyle)
        // } else {
        //     console.log('aaya')
        //     navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })
        //     // setTimeout(() =>
        //     //     navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })
        //     //     , 500)
        // }
        // if (!ios) {

        //     if (androidStatusHide.includes(getFocusedRouteNameFromRoute(route))) {
        //         setHideStatus(true)
        //     }
        //     else {
        //         setHideStatus(false)
        //     }
        // }
    }, [navigation, route])



    return (
        <>
            {
                !hideStatus &&
                <StatusBar backgroundColor={myColors.background} translucent={false} />
            }
            {/* <StatusBar backgroundColor={'transparent'} translucent={true} /> */}

            <FoodTAB.Navigator
                screenOptions={{
                    animation: 'fade',
                    headerShown: false,
                }}
                initialRouteName="FoodScreen"
            >
                <FoodTAB.Screen component={FoodScreen} name="FoodScreen" />
                <FoodTAB.Screen component={RestaurantDetail} name="RestaurantDetail" />

            </FoodTAB.Navigator>
        </>
    )
} 