import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { DestinationScreen } from "./destination_screen";
import { RideScreen } from "./ride_screen_dashboard";
import { SaveLocation } from "./save_location_screen";
import React, { useEffect } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Platform, StatusBar } from "react-native";
import { myColors } from "../../../../ultils/myColors";
import { ios } from "../../../common";
import { RideHome } from "./ride_home_screen";
import { AddCard } from "./add_card_screen";
import { CardDone } from "./card_done";

const statusColorP = ['DestinationScreen', 'SaveLocation', 'LocationFromMap']
const RideTAB = createNativeStackNavigator();

export const RideNavigator = ({ route }) => {
    React.useLayoutEffect(() => {
        if (!ios && Platform.Version >= 23) {
            if (statusColorP.includes(getFocusedRouteNameFromRoute(route))) {
                StatusBar.setBackgroundColor(myColors.primaryT)
            } else {
                StatusBar.setBackgroundColor(myColors.background)
            }
        }
    }, [route])

    return (
        <RideTAB.Navigator
            screenOptions={{
                animation: 'fade',
                headerShown: false,
            }}

            initialRouteName="DestinationScreen"
        >
            <RideTAB.Screen component={RideScreen} name="RideScreen" />
            <RideTAB.Screen component={DestinationScreen} name="DestinationScreen" />
            <RideTAB.Screen component={SaveLocation} name="SaveLocation" />
            <RideTAB.Screen component={RideHome} name="RideHome" />
            <RideTAB.Screen component={AddCard} name="AddCard" />
            <RideTAB.Screen component={CardDone} name="CardDone" />




        </RideTAB.Navigator>
    )
} 