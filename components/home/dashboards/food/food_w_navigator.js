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



const FoodWTAB = createNativeStackNavigator();

export const FoodWNavigator = ({ navigation, route }) => {




    return (
        <>
            {/* <StatusBar backgroundColor={'transparent'} translucent={true} /> */}

            <FoodWTAB.Navigator
                screenOptions={({ navigation }) => {
                    return {
                        detachPreviousScreen: !navigation.isFocused(),
                        animation: 'fade',
                        headerShown: false,
                    }
                }}
            >
                <FoodWTAB.Screen component={FilterScreen} name="FilterScreen" />
                <FoodWTAB.Screen component={ItemDetail} name="ItemDetail" />
                <FoodWTAB.Screen component={RestaurantAll} name="RestaurantAll" />
                <FoodWTAB.Screen component={RestaurantMoreInfo} name="RestaurantMoreInfo" />
                <FoodWTAB.Screen component={Address} name="Address" />
                <FoodWTAB.Screen component={SaveAddress} name="SaveAddress" />
                <FoodWTAB.Screen component={RestCartNavigator} name="RestCartNavigator" />
                <FoodWTAB.Screen component={RestaurantSearch} name="RestaurantSearch" />
                <FoodWTAB.Screen component={DoneOrder} name="DoneOrder" />
                <FoodWTAB.Screen component={RestRating} name="RestRating" />




            </FoodWTAB.Navigator>
        </>
    )
} 