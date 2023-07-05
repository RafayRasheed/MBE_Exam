import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { FoodScreen } from "./food_screen";
import { FilterScreen } from "./filter_screen";
import React, { useEffect, useState } from "react";
import { OrderTracking } from "./order_tracking";



const TrackingTAB = createNativeStackNavigator();
// androidStatusHide = ['RestaurantDetail']
export const TrackingNavigator = ({ navigation, route }) => {
    // const [hideStatus, setHideStatus] = useState(false)
    // React.useLayoutEffect(() => {
    //     if (!ios) {

    //         if (androidStatusHide.includes(getFocusedRouteNameFromRoute(route))) {
    //             setHideStatus(true)
    //         }
    //         else {
    //             setHideStatus(false)
    //         }
    //     }

    // }, [navigation, route])



    return (
        <>
            {/* <StatusBar backgroundColor={hideStatus ? 'transparent' : myColors.background} translucent={hideStatus} /> */}
            <TrackingTAB.Navigator
                screenOptions={{
                    animation: 'fade',
                    headerShown: false,
                }}
                initialRouteName="OrderTracking"
            >
                <TrackingTAB.Screen component={OrderTracking} name="OrderTracking" />
                {/* <TrackingTAB.Screen component={FilterScreen} name="FilterScreen" />
                <TrackingTAB.Screen component={RestaurantDetail} name="RestaurantDetail" /> */}

            </TrackingTAB.Navigator>
        </>
    )
} 