import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../ultils/myFonts';



export const Notification = ({ navigation }) => {
    const noti = [
        {
            name: 'Welcome to M-Rides',
            date: 'Feb 23, 2023', read: false
        },
        {
            name: 'Welcome to M-Rides',
            date: 'Feb 22, 2023', read: false
        },

        {
            name: 'Invite friends and get up to $300',
            date: 'Feb 21, 2023', read: true
        },
        {
            name: 'Welcome to M-Rides Invite friends and get up to $300',
            date: 'Feb 20, 2023', read: true
        },
    ]

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
                        }]}>Notifications</Text>
                    </View>

                </View>

                {/* Content */}
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: myWidth(4), backgroundColor: myColors.background, flexGrow: 1
                }}>


                    <Spacer paddingT={myHeight(1.2)} />

                    {
                        noti.map((item, i) =>
                            <TouchableOpacity activeOpacity={0.85} onPress={() => null}
                                key={i} style={{ flexDirection: 'row', paddingBottom: myHeight(2), }}>


                                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: myHeight(0.4) }}>
                                    {/* Dot */}
                                    <View style={{
                                        height: myHeight(0.65), width: myHeight(0.65), borderRadius: myHeight(10),
                                        backgroundColor: item.read ? myColors.background : myColors.primaryT
                                    }} />

                                    <Spacer paddingEnd={myWidth(1.3)} />
                                    {/* Bell */}
                                    <Image style={{
                                        height: myHeight(4),
                                        width: myHeight(4),
                                        resizeMode: 'contain',
                                    }} source={require('../assets/profile/bellF.png')} />
                                </View>

                                <Spacer paddingEnd={myWidth(2)} />
                                {/* Name & Date */}
                                <View style={{ flex: 1 }}>
                                    <Text style={[styles.textCommon, {
                                        fontSize: myFontSize.body,
                                        fontFamily: myFonts.bodyBold,

                                    }]}>{item.name}</Text>

                                    <Spacer paddingT={myHeight(0.2)} />
                                    <Text numberOfLines={1} style={[styles.textCommon, {
                                        fontSize: myFontSize.xSmall,
                                        fontFamily: myFonts.bodyBold,
                                        color: myColors.textL4
                                    }]}>{item.date}</Text>

                                </View>


                            </TouchableOpacity>
                        )
                    }

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