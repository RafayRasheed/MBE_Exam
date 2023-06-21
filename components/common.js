import React from 'react';
import { Dimensions, View, Platform, StatusBar, Text } from 'react-native'
// import { MMKV } from 'react-native-mmkv';
import { myColors } from '../ultils/myColors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { myFontSize, myFonts, myLetSpacing } from '../ultils/myFonts';
import Animated, { BounceInUp, FadeInUp, FadeOutUp } from 'react-native-reanimated';
const { height, width } = Dimensions.get('window')
export const ios = Platform.OS == 'ios'
export const stutusH = StatusBar.currentHeight
import { Circle } from "react-native-animated-spinkit"

export function printWithPlat(print) {
    console.log(`${Platform.OS} => ${print} ${height} ${StatusBar.currentHeight}`)
}
export function myHeight(per) {
    return (per * height) / 100

    if (ios) {

        return (per * height) / 100
    }
    if (stutusH) {
        return (per * (height - stutusH)) / 100
    }
    return (per * (height)) / 100

}
export function myWidth(per) {
    const myHeight = (per * width) / 100
    return myHeight
}

export const Spacer = ({ paddingEnd = 0, paddingT = 0 }) => (
    <View style={{ paddingEnd: paddingEnd, paddingTop: paddingT }} />
)
export const Loader = () => (
    <View
        style={{
            height: myHeight(100), width: myWidth(100), position: 'absolute', zIndex: 10,
            justifyContent: 'center', alignItems: 'center',
            backgroundColor: '#00000010'
        }}>
        <Circle size={myHeight(10)} color='#d16402' />

    </View>
)
export const MyError = ({ message = '' }) => {

    return (
        <Animated.View
            entering={FadeInUp}
            exiting={FadeOutUp}
        >
            <View style={{ marginTop: myHeight(1), zIndex: 1, position: 'absolute', alignItems: 'center', width: '100%' }}>
                <View
                    style={{
                        paddingVertical: myHeight(0.4), paddingHorizontal: myWidth(3),
                        width: myWidth(90), backgroundColor: myColors.red,
                        alignItems: 'center', alignSelf: 'center', opacity: 1, overflow: 'hidden', zIndex: 10,
                        borderRadius: myWidth(100)
                    }}
                >
                    <Text
                        style={{
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.bodyBold,
                            color: myColors.background,
                            letterSpacing: myLetSpacing.common,
                            includeFontPadding: false,
                            padding: 0,
                        }}
                    >{message}</Text>
                </View>
            </View>
        </Animated.View>
    )
}


// export const storage = new MMKV()