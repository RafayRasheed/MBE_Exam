import { createNativeStackNavigator, } from "@react-navigation/native-stack";

import React, { useEffect, useState } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { ios, } from "../../../../common";
import { StatusBar } from "react-native";
import { myColors } from "../../../../../ultils/myColors";
import { ResturantCart } from "./rest_cart_screen";
import { ResturantCheckout } from "./rest_checkout_screen";
import { RestaurantPayment } from "./res_payment_screen";



const RestCart = createNativeStackNavigator();
androidStatusHide = ['']


export const RestCartNavigator = ({ navigation, route }) => {
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
            <RestCart.Navigator
                screenOptions={{
                    animation: 'fade',
                    headerShown: false,

                }}
                initialRouteName="FoodScreen"
            >
                <RestCart.Screen component={ResturantCart} name="ResturantCart" />
                <RestCart.Screen component={ResturantCheckout} name="ResturantCheckout" />
                <RestCart.Screen component={RestaurantPayment} name="RestaurantPayment" />
                {/* <RestCart.Screen component={} name="RestaurantDetail" /> */}




            </RestCart.Navigator>
        </>
    )
} 