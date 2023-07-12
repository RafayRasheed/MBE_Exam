import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Profile } from "./profile_screen";
import { ProfileDetails } from "./profile_detail_screen";
import { Favourite } from "./favorite_screen";
import { Notification } from "./notification_screen";
import { Refer } from "./refer_screen";
import { Wallet } from "./wallet_screen";




const ProfileTAB = createNativeStackNavigator();
// androidStatusHide = ['RestaurantDetail']
export const ProfileNavigator = ({ navigation, route }) => {
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
            <ProfileTAB.Navigator
                screenOptions={{
                    animation: 'fade',
                    headerShown: false,
                }}
                initialRouteName="Profile"
            >
                <ProfileTAB.Screen component={Profile} name="Profile" />
                {/* <ProfileTAB.Screen component={ProfileDetails} name="ProfileDetails" />
                <ProfileTAB.Screen component={Favourite} name="Favourite" />
                <ProfileTAB.Screen component={Notification} name="Notification" />
                <ProfileTAB.Screen component={Refer} name="Refer" />
                <ProfileTAB.Screen component={Wallet} name="Wallet" /> */}


            </ProfileTAB.Navigator>
        </>
    )
} 