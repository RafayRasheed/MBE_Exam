import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Cart } from "./cart_screen";





const CartTAB = createNativeStackNavigator();

export const CartNavigator = ({ navigation, route }) => {
    return (
        <>
            {/* <StatusBar backgroundColor={hideStatus ? 'transparent' : myColors.background} translucent={hideStatus} /> */}
            <CartTAB.Navigator
                screenOptions={{
                    animation: 'fade',
                    headerShown: false,
                }}
                initialRouteName="Cart"
            >
                <CartTAB.Screen component={Cart} name="Cart" />



            </CartTAB.Navigator>
        </>
    )
} 