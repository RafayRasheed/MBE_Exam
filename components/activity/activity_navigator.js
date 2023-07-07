import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { FoodScreen } from "./food_screen";
import { FilterScreen } from "./filter_screen";
import React, { useEffect, useState } from "react";
import { OrderDetails } from "./order_detail_screen";
import { ActivityScreen } from "./activity_screen";
import { RideDetails } from "./ride_detail_screen";



const ActivityTAB = createNativeStackNavigator();
// androidStatusHide = ['RestaurantDetail']
export const ActivityNavigator = ({ navigation, route }) => {
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
            <ActivityTAB.Navigator
                screenOptions={{
                    animation: 'fade',
                    headerShown: false,
                }}
                initialRouteName="ActivityScreen"
            >
                <ActivityTAB.Screen component={ActivityScreen} name="ActivityScreen" />
                <ActivityTAB.Screen component={OrderDetails} name="OrderDetails" />
                <ActivityTAB.Screen component={RideDetails} name="RideDetails" />
                {/* <ActivityTAB.Screen component={FilterScreen} name="FilterScreen" />
                <ActivityTAB.Screen component={RestaurantDetail} name="RestaurantDetail" /> */}

            </ActivityTAB.Navigator>
        </>
    )
} 