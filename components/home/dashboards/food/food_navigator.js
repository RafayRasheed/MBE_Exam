import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { FoodScreen } from "./food_screen";
import { FilterScreen } from "./filter_screen";
import { RestaurantDetail } from "./restaurant_detail_screen";
import React, { useEffect, useState } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { ios, myHeight, myWidth } from "../../../common";
import { Platform, StatusBar } from "react-native";
import { myColors } from "../../../../ultils/myColors";
import { ItemDetail } from "./item_detail_screen";
import { RestaurantAll } from "./restuarant_all_screen";
import { RestaurantMoreInfo } from "./rest_more_info_screen";
import { ItemCartScreen } from "./item_cart_screen";
import { enableScreens } from "react-native-screens";
import { ItemCheckoutScreen } from "./item_checkout_screen";


const FoodTAB = createNativeStackNavigator();
androidStatusHide = ['RestaurantDetail']
hideBottomList = ['ItemCartScreen', 'ItemCheckoutScreen']
export const FoodNavigator = ({ navigation, route }) => {
    const [hideStatus, setHideStatus] = useState(false)
    const [hideBottom, setHideBottom] = useState(false)
    React.useLayoutEffect(() => {
        if (!ios) {

            if (androidStatusHide.includes(getFocusedRouteNameFromRoute(route))) {
                setHideStatus(true)
            }
            else {
                setHideStatus(false)
            }
        }
        if (hideBottomList.includes(getFocusedRouteNameFromRoute(route))) {

            setHideBottom(true)

        }
        else {
            setHideBottom(false)
        }
    }, [navigation, route])


    useEffect(() => {
        if (hideBottom) {
            navigation.getParent().setOptions({ tabBarStyle: { height: 0, display: 'none', } })

        } else {
            console.log('On')
            navigation.getParent().setOptions({
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
        }
    }, [hideBottom])
    return (
        <>
            <StatusBar backgroundColor={hideStatus ? 'transparent' : myColors.background} translucent={hideStatus} />
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
                <FoodTAB.Screen component={ItemCartScreen} name="ItemCartScreen" />
                <FoodTAB.Screen component={ItemCheckoutScreen} name="ItemCheckoutScreen" />


            </FoodTAB.Navigator>
        </>
    )
} 