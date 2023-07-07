import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { FoodScreen } from "./food_screen";
import { FilterScreen } from "./filter_screen";
import { RestaurantDetail } from "./restaurant_detail_screen";
import React, { useEffect, useState } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { ios, } from "../../../common";
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
androidStatusHide = ['RestaurantDetail']
export const FoodNavigator = ({ navigation, route }) => {
    const [hideStatus, setHideStatus] = useState(false)
    React.useLayoutEffect(() => {
        if (!ios) {

            if (androidStatusHide.includes(getFocusedRouteNameFromRoute(route))) {
                setHideStatus(true)
            }
            else {
                setHideStatus(false)
            }
        }
    }, [navigation, route])



    return (
        <>
            <StatusBar backgroundColor={hideStatus ? 'transparent' : myColors.background} translucent={hideStatus} />
            {/* <StatusBar backgroundColor={'transparent'} translucent={true} /> */}

            <FoodTAB.Navigator
                screenOptions={{
                    animation: 'fade',
                    headerShown: false,
                }}
                initialRouteName="FoodScreen"
            >
                <FoodTAB.Screen component={FoodScreen} name="FoodScreen" />
                <FoodTAB.Screen component={FilterScreen} name="FilterScreen" />
                <FoodTAB.Screen component={RestaurantDetail} name="RestaurantDetail" />
                <FoodTAB.Screen component={ItemDetail} name="ItemDetail" />
                <FoodTAB.Screen component={RestaurantAll} name="RestaurantAll" />
                <FoodTAB.Screen component={RestaurantMoreInfo} name="RestaurantMoreInfo" />
                <FoodTAB.Screen component={Address} name="Address" />
                <FoodTAB.Screen component={SaveAddress} name="SaveAddress" />
                <FoodTAB.Screen component={RestCartNavigator} name="RestCartNavigator" />
                <FoodTAB.Screen component={RestaurantSearch} name="RestaurantSearch" />
                <FoodTAB.Screen component={DoneOrder} name="DoneOrder" />
                <FoodTAB.Screen component={RestRating} name="RestRating" />




            </FoodTAB.Navigator>
        </>
    )
} 