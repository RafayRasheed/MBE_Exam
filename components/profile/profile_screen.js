import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../ultils/myFonts';



export const Profile = ({ navigation }) => {

    const Common = ({ navigate, iconSize, icon, tind = myColors.primaryT, name }) => (
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate(navigate)}
            style={{}}>
            <Spacer paddingT={myHeight(1.8)} />

            <View style={{ flexDirection: 'row', alignItems: 'center', }}
                activeOpacity={0.8} onPress={() => null}>

                <View style={{ width: myHeight(5), paddingStart: myWidth(0.5) }}>
                    <Image style={{
                        height: iconSize,
                        width: iconSize,
                        resizeMode: 'contain',
                        tintColor: tind
                    }} source={icon} />
                </View>

                {/* <Spacer paddingEnd={myWidth(4)} /> */}

                <Text numberOfLines={1} style={[styles.textCommon, {
                    flex: 1,
                    fontSize: myFontSize.xBody,
                    fontFamily: myFonts.bodyBold,
                }]}>{name}</Text>

                <Image style={{
                    height: myHeight(2),
                    width: myHeight(2),
                    resizeMode: 'contain',
                    marginTop: myHeight(0.4),
                    tintColor: myColors.dot2
                }} source={require('../assets/home_main/go.png')} />

            </View>
            <Spacer paddingT={myHeight(1.8)} />
        </TouchableOpacity>
    )
    return (
        <>
            {/* <StatusBar backgroundColor={orderModal ? '#00000030' : myColors.background} /> */}
            <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background }}>

                <Spacer paddingT={myHeight(2)} />
                {/* Pofile & Name */}
                <View style={{
                    flexDirection: 'row', paddingHorizontal: myWidth(4),
                    alignItems: 'center',
                }}>

                    {/* image */}
                    <View style={{
                        borderRadius: myWidth(100), overflow: 'hidden',
                        // backgroundColor: myColors.primaryL5, padding: myHeight(1.3),
                        // borderWidth: myWidth(0.1), borderColor: myColors.textL4, 
                    }}>
                        <Image source={require('../assets/profile/profile.png')}
                            style={{
                                width: myHeight(7.3),
                                height: myHeight(7.3),
                                resizeMode: 'contain',
                                // tintColor: myColors.primaryT
                            }}
                        />

                    </View>
                    <Spacer paddingEnd={myWidth(4)} />
                    {/* Name */}
                    <Text style={[styles.textCommon, {
                        flex: 1,
                        fontSize: myFontSize.medium2,
                        fontFamily: myFonts.heading,
                    }]}>Wali Muhammed</Text>
                </View>

                <Spacer paddingT={myHeight(2.5)} />

                <ScrollView bounces={false} contentContainerStyle={{ paddingHorizontal: myWidth(4), flexGrow: 1, }} >

                    {/* Profile */}
                    <Common icon={require('../assets/profile/user.png')} iconSize={myHeight(2.6)}
                        name={'Profile'} navigate={'ProfileDetails'}
                    />
                    {/* Divider */}
                    <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />


                    {/* Favourites */}
                    <Common icon={require('../assets/profile/heart.png')} iconSize={myHeight(2.6)}
                        name={'Favourites'} navigate={'Favourite'}
                    />
                    {/* Divider */}
                    <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />


                    {/* Wallet */}
                    <Common icon={require('../assets/profile/walletFill.png')} iconSize={myHeight(3)}
                        name={'Wallet'} navigate={'Wallet'}
                    />
                    {/* Divider */}
                    <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />


                    {/* Refer a friend */}
                    <Common icon={require('../assets/profile/refer.png')} iconSize={myHeight(2.8)}
                        name={'Refer a friend'} navigate={'Refer'}
                    />
                    {/* Divider */}
                    <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />


                    {/*  Payment Method */}
                    <Common icon={require('../assets/profile/card.png')} iconSize={myHeight(2.8)}
                        name={'Payment Method'} navigate={''}
                    />
                    {/* Divider */}
                    <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />



                    {/* Notifications */}
                    <Common icon={require('../assets/profile/bellF.png')} iconSize={myHeight(2.8)}
                        name={'Notifications'} navigate={'Notification'}
                    />
                    {/* Divider */}
                    <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />


                    {/* Customer Support */}
                    <Common icon={require('../assets/profile/question.png')} iconSize={myHeight(2.8)}
                        name={'Customer Support'} tind={null} navigate={''}
                    />
                    {/* Divider */}
                    <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />



                    {/* Share App */}
                    <Common icon={require('../assets/profile/share.png')} iconSize={myHeight(2.8)}
                        name={'Share App'} navigate={''}
                    />
                    {/* Divider */}
                    <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />




                    {/* Report a bug */}
                    {/* <Common icon={require('../assets/profile/bug.png')} iconSize={myHeight(3)}
                        name={'Report a bug'} navigate={''}
                    /> */}
                    {/* Divider */}
                    {/* <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} /> */}
                </ScrollView>

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