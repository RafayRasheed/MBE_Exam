import React from "react";
import { Text, SafeAreaView, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Spacer, ios, myHeight, myWidth } from "../common";
import { myColors } from "../../ultils/myColors";
import { myFontSize, myFonts, myLetSpacing } from "../../ultils/myFonts";
import { ActivityScreen } from "../activity/activity_screen";
import { HomeNavigator } from "./home_navigator";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { ActivityNavigator } from "../activity/activity_navigator";
import { ProfileNavigator } from "../profile/profile_navigator";
import { CartNavigator } from "../cart/cart_navigator";

const Tab = createBottomTabNavigator()

const Icons = {
    HOME: {
        image: require('../assets/home_main/navigator/home.png'),
        style: { width: myWidth(6.5), height: myHeight(2.68) }
    },
    ACTIVITY: {
        image: require('../assets/home_main/navigator/activity.png'),
        style: { width: myWidth(6.2), height: myHeight(2.15) }
    },
    CART: {
        image: require('../assets/home_main/navigator/cart.png'),
        style: { width: myWidth(5.5), height: myHeight(2.68) }
    },
    // WALLET: require('../assets/home_main/navigator/wallet.png'),
    ACCOUNT: {
        image: require('../assets/home_main/navigator/account.png'),
        style: { width: myWidth(6.2), height: myHeight(2.68) }
    },
}


const screenOptions = ({ route }) => {
    const name = route.name
    return {
        headerShown: false,
        tabBarStyle: {
            backgroundColor: myColors.background,
            paddingHorizontal: myWidth(3.5),
            alignItems: 'center',
            justifyContent: 'center',
            height: myHeight(9.5),
            paddingBottom: ios ? myHeight(2.2) : myHeight(1.5),
            paddingTop: myHeight(2.5),
            // position: 'absolute',
        },
        tabBarLabelStyle: {

            fontSize: myFontSize.xSmall,
            fontFamily: myFonts.bodyBold,
            letterSpacing: myLetSpacing.common,
            paddingTop: myHeight(1),
        },
        tabBarActiveTintColor: myColors.primaryT,
        tabBarInactiveTintColor: myColors.text,
        tabBarIcon: ({ color }) => <Image style={[Icons[name].style, { tintColor: color, resizeMode: 'contain', }]}
            source={Icons[name].image} />,
    }
}

const Xr = ({ navigation }) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background }}>
        <Spacer paddingT={myHeight(2)} />
        <Text onPress={() => navigation.navigate('AccountNavigator')} style={{ color: 'black' }}>Sign Out</Text>
    </SafeAreaView>
)


export const HomeBottomNavigator = ({ route, navigation }) => {
    return (
        <Tab.Navigator
            tabBarActiveTintColor={myColors.primary}
            headerShown={false}
            screenOptions={screenOptions}
            tabBarShowLabel={false}
            initialRouteName="HOME"
        >
            <Tab.Screen name="HOME" component={HomeNavigator} />
            <Tab.Screen name="ACTIVITY" component={ActivityNavigator} />
            <Tab.Screen name="CART" component={CartNavigator} />
            {/* <Tab.Screen name="WALLET" component={Xr} /> */}
            <Tab.Screen name="ACCOUNT" component={ProfileNavigator} />

        </Tab.Navigator>


    )
}