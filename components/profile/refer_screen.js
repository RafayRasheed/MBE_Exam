import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../ultils/myFonts';



export const Refer = ({ navigation }) => {

    return (
        <>
            {/* <StatusBar backgroundColor={orderModal ? '#00000030' : myColors.background} /> */}
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: myColors.background,
            }}>
                {/* Top  */}
                <View style={{ overflow: 'hidden', paddingBottom: myHeight(1), }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: myColors.background,
                        elevation: 6.5, shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2.5 },
                        shadowOpacity: 0.2,
                        shadowRadius: 2,
                        paddingVertical: myHeight(1)
                    }}>
                        <Spacer paddingEnd={myWidth(3)} />
                        {/* Back */}
                        <TouchableOpacity
                            activeOpacity={0.7} onPress={() => navigation.goBack()}
                            style={{
                                height: myHeight(3.8),
                                width: myHeight(3.8),
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Image style={{
                                height: myHeight(2.8),
                                width: myHeight(2.8),
                                resizeMode: 'contain',
                                tintColor: myColors.text
                            }} source={require('../assets/home_main/dashboards/back2.png')} />
                        </TouchableOpacity>

                        <Spacer paddingEnd={myWidth(2)} />
                        {/* Name */}
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.bodyBold,
                        }]}>Refer a Friend</Text>
                    </View>

                </View>

                {/* Content */}
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: myWidth(4), backgroundColor: myColors.background, flexGrow: 1, alignItems: 'center'
                }}>
                    <Spacer paddingT={myHeight(2.5)} />

                    {/* image */}
                    <Image style={{
                        height: myHeight(36),
                        width: myHeight(36),
                        maxWidth: myWidth(80),

                        resizeMode: 'contain',
                    }} source={require('../assets/profile/referFull.png')} />

                    <Spacer paddingT={myHeight(3.5)} />
                    {/* YOUR CODE */}
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.xxSmall,
                        fontFamily: myFonts.body,
                        color: myColors.textL4
                    }]}>YOUR CODE</Text>

                    <Spacer paddingT={myHeight(1)} />
                    {/* Code */}
                    <View style={{
                        paddingVertical: myHeight(1), width: myWidth(80), borderStyle: 'dashed',
                        borderWidth: myHeight(0.1), borderRadius: myWidth(2.5), borderColor: myColors.offColor
                    }} >
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body3,
                            fontFamily: myFonts.heading,
                            color: myColors.primaryT,
                            textAlign: 'center',

                        }]}>MAPP-010192</Text>
                    </View>

                    <Spacer paddingT={myHeight(2.3)} />
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.xxSmall,
                        fontFamily: myFonts.body,
                        color: myColors.textL4,
                        textAlign: 'center',
                        paddingHorizontal: myWidth(4)

                    }]}>Share your code with all your friends and earn 1000 M-Coins per invite, when they make their first transaction. Terms & Conditions apply. </Text>
                </ScrollView>

                {/* Share Button */}
                <View style={{ paddingHorizontal: myWidth(4) }}>
                    <Spacer paddingT={myHeight(1)} />
                    <TouchableOpacity activeOpacity={0.8} onPress={() => null}
                        style={{
                            backgroundColor: myColors.primaryT,
                            borderRadius: myHeight(0.8),
                            paddingVertical: myHeight(1.1),
                            paddingVertical: myHeight(1.1),
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: myHeight(0.1), borderColor: myColors.primaryT,
                            flexDirection: 'row',
                        }}>
                        <Image style={{
                            height: myHeight(2.3),
                            width: myHeight(2.3),
                            resizeMode: 'contain',
                            tintColor: myColors.background
                        }} source={require('../assets/profile/share.png')} />

                        <Spacer paddingEnd={myWidth(2)} />
                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.heading,
                                color: myColors.background,
                            }
                        ]}>Share</Text>
                    </TouchableOpacity>
                    <Spacer paddingT={myHeight(2)} />

                </View>

            </SafeAreaView>
        </>
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
})