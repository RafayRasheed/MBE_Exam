import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AccountNavigator } from "./account/account_navigation"
import { StartupScreen } from "./startup/startup_screens"
import { storage } from "./common"
import { StartupNavigator } from "./startup/startup_navigator"
import { HomeBottomNavigator } from "./home/home_bottom_navigator"
import { Address } from "./home/dashboards/food/address_screen"
import { SaveAddress } from "./home/dashboards/food/address_save_screen"
import { RestCartNavigator } from "./home/dashboards/food/restaurant_cart/res_cart_navigator"
import { RestRating } from "./home/dashboards/food/rest_rating_screen"
import { FoodWNavigator } from "./home/dashboards/food/food_w_navigator"
import { FilterScreen } from "./home/dashboards/food/filter_screen"
import { ItemDetail } from "./home/dashboards/food/item_detail_screen"
import { RestaurantAll } from "./home/dashboards/food/restuarant_all_screen"
import { RestaurantMoreInfo } from "./home/dashboards/food/rest_more_info_screen"
import { RestaurantSearch } from "./home/dashboards/food/res_search_screen"
import { DoneOrder } from "./home/dashboards/food/rest_done_order"
import { OrderDetails } from "./activity/order_detail_screen"
import { RideDetails } from "./activity/ride_detail_screen"
import { CartDetails } from "./cart/cart_details_screen"
import { Favourite } from "./profile/favorite_screen"
import { Notification } from "./profile/notification_screen"
import { Refer } from "./profile/refer_screen"
import { Wallet } from "./profile/wallet_screen"
import { ProfileDetails } from "./profile/profile_detail_screen"

const AppTAB = createNativeStackNavigator()

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppTAB.Navigator
                initialRouteName="HomeBottomNavigator"
                // initialRouteName={storage.contains('isFirstTime') ? "AccountNavigator" : "StartupScreen"}
                screenOptions={{
                    animation: 'fade',
                    headerShown: false
                }}
            >
                <AppTAB.Screen component={StartupNavigator} name="StartupNavigator" />
                <AppTAB.Screen component={AccountNavigator} name="AccountNavigator" />
                <AppTAB.Screen component={HomeBottomNavigator} name="HomeBottomNavigator" />

                {/* ---------------------- Food Screens Without Bottom Navigator ---------------------------*/}
                {/* <AppTAB.Screen component={FoodWNavigator} name="FoodWNavigator" /> */}
                <AppTAB.Screen component={Address} name="Address" />
                <AppTAB.Screen component={SaveAddress} name="SaveAddress" />
                <AppTAB.Screen component={RestRating} name="RestRating" />
                <AppTAB.Screen component={FilterScreen} name="FilterScreen" />
                <AppTAB.Screen component={ItemDetail} name="ItemDetail" />
                <AppTAB.Screen component={RestaurantAll} name="RestaurantAll" />
                <AppTAB.Screen component={RestaurantMoreInfo} name="RestaurantMoreInfo" />
                <AppTAB.Screen component={RestCartNavigator} name="RestCartNavigator" />
                <AppTAB.Screen component={RestaurantSearch} name="RestaurantSearch" />
                <AppTAB.Screen component={DoneOrder} name="DoneOrder" />


                {/* ---------------------- Activity Screens Without Bottom Navigator ---------------------------*/}
                <AppTAB.Screen component={OrderDetails} name="OrderDetails" />
                <AppTAB.Screen component={RideDetails} name="RideDetails" />


                {/* ---------------------- Cart Screens Without Bottom Navigator ---------------------------*/}
                <AppTAB.Screen component={CartDetails} name="CartDetails" />


                {/* ---------------------- Account/Profile Screens Without Bottom Navigator ---------------------------*/}
                <AppTAB.Screen component={ProfileDetails} name="ProfileDetails" />
                <AppTAB.Screen component={Favourite} name="Favourite" />
                <AppTAB.Screen component={Notification} name="Notification" />
                <AppTAB.Screen component={Refer} name="Refer" />
                <AppTAB.Screen component={Wallet} name="Wallet" />
            </AppTAB.Navigator>
        </NavigationContainer>
    )
}