import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Animated, Easing } from 'react-native';
import { myColors } from '../../../../ultils/myColors';
import { Spacer, ios, myHeight, myWidth } from '../../../common';
import { myFonts, myLetSpacing, myFontSize } from '../../../../ultils/myFonts';

export const DoneOrder = ({ navigation, }) => {
    const startValue = useRef(new Animated.Value(1)).current;
    const endValue = 2;
    const duration = 1000;

    spinValue = new Animated.Value(0);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['140deg', '360deg']
    })


    useEffect(() => {
        Animated.timing(startValue, {
            toValue: endValue,
            duration: duration,
            delay: 50,

            useNativeDriver: true,
        }).start();

        Animated.timing(
            spinValue,
            {
                toValue: 1,
                delay: 50,
                duration: 1000,
                useNativeDriver: true  // To make use of native driver for performance
            }
        ).start()

    }, []);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background, }}>
            <Spacer paddingT={myHeight(12)} />

            <View style={{ flex: 1, paddingHorizontal: myWidth(17) }}>
                <Animated.View style={[
                    {
                        alignSelf: 'center',
                        height: myHeight(16),
                        width: myHeight(16),
                        padding: myHeight(1),
                        borderRadius: myHeight(16),
                        backgroundColor: myColors.primaryT,
                        justifyContent: 'center',
                        alignItems: 'center',
                        transform: [{ rotate: spin }],

                    },
                ]}>

                    <Animated.Image style={{
                        height: myHeight(8),
                        width: myHeight(8),
                        transform: [{
                            scale: startValue,
                        },],
                        resizeMode: 'contain',
                    }} source={require('../../../assets/home_main/dashboards/pan.png')}>

                    </Animated.Image>
                </Animated.View>

                <Spacer paddingT={myHeight(3)} />
                <Text style={[
                    styles.textCommon,
                    {
                        fontSize: myFontSize.medium0,
                        fontFamily: myFonts.bodyBold,
                        color: myColors.text,
                        textAlign: 'center'
                    }
                ]}>Your Order Placed{'\n'}Successful!</Text>

                <Spacer paddingT={myHeight(1.15)} />
                <Text style={[
                    styles.textCommon,
                    {
                        fontSize: myFontSize.xBody,
                        fontFamily: myFonts.body,
                        color: myColors.text,
                        textAlign: 'center'
                    }
                ]}>Thank you for your time! It{'\n'}will take some time to{'\n'}prepare...</Text>
            </View>
            {/* Ok button */}
            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()}
                style={{
                    backgroundColor: myColors.primaryT,
                    borderRadius: myHeight(0.8),
                    paddingVertical: myHeight(1.3),
                    marginVertical: myHeight(1.5),
                    marginHorizontal: myWidth(4),
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                <Text style={[
                    styles.textCommon,
                    {
                        fontSize: myFontSize.xBody,
                        fontFamily: myFonts.bodyBold,
                        color: myColors.background,
                    }
                ]}>Ok</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    //Text
    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    square: {
        height: 150,
        width: 150,
        backgroundColor: 'blue',
    },
})
