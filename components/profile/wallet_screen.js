import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../ultils/myFonts';



export const Wallet = ({ navigation }) => {
    const transactions = [
        {
            name: 'Card', type: 'Credit',
            seconName: 'M- Ride', number: 3,
            date: 'Feb 23, 2023 2:10 PM',
        },
        {
            name: 'Cash', type: 'Debit',
            seconName: 'M- Ride', number: 2,
            date: 'Feb 22, 2023  1:10 PM',
        },
        {
            name: 'Card', type: 'Credit',
            seconName: 'M- Ride', number: 3,
            date: 'Feb 23, 2023 2:10 PM',
        },
        {
            name: 'Cash', type: 'Debit',
            seconName: 'M- Ride', number: 2,
            date: 'Feb 22, 2023  1:10 PM',
        },
        {
            name: 'Card', type: 'Credit',
            seconName: 'M- Ride', number: 3,
            date: 'Feb 23, 2023 2:10 PM',
        },
        {
            name: 'Cash', type: 'Debit',
            seconName: 'M- Ride', number: 2,
            date: 'Feb 22, 2023  1:10 PM',
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
                        }]}>Wallet</Text>
                    </View>

                </View>

                {/* Content */}
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: myWidth(4), backgroundColor: myColors.background, flexGrow: 1
                }}>
                    <Spacer paddingT={myHeight(3)} />
                    {/*Cash Block */}
                    <View style={{
                        backgroundColor: myColors.divider, borderRadius: myWidth(1.5), paddingHorizontal: myWidth(5),
                        paddingVertical: myHeight(1.7)
                    }}>
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.body,
                        }]}>M ride Cash</Text>

                        <Spacer paddingT={myHeight(0.5)} />
                        {/* Price */}
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.medium2,
                            fontFamily: myFonts.heading,
                        }]}>CA $123.45</Text>
                    </View>

                    <Spacer paddingT={myHeight(3)} />

                    {
                        transactions.length == 0 ?
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.body3,
                                fontFamily: myFonts.body,
                                textAlign: 'center',
                            }]}>No Transaction yet</Text>
                            :
                            <View>
                                <Text style={[styles.textCommon, {
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.heading,
                                }]}>Transactions</Text>
                                {
                                    transactions.map((item, i) =>
                                        <TouchableOpacity activeOpacity={0.85} onPress={() => null} key={i}>

                                            {/* Divider */}
                                            {i > 0 && <View style={{ height: myHeight(0.1), backgroundColor: myColors.offColor2 }} />}
                                            <Spacer paddingT={myHeight(1.6)} />
                                            {/* Date */}
                                            <Text style={[styles.textCommon, {
                                                fontSize: myFontSize.xxSmall,
                                                fontFamily: myFonts.bodyBold,
                                                color: myColors.textL4
                                            }]}>{item.date}</Text>

                                            <Spacer paddingT={myHeight(0.7)} />
                                            {/* content */}
                                            <View style={{ flexDirection: 'row', paddingBottom: myHeight(2), alignItems: 'center' }}>


                                                {/* Card or Cash image */}
                                                <Image style={{
                                                    height: myHeight(3.5),
                                                    width: myHeight(3.5),
                                                    resizeMode: 'contain',
                                                    tintColor: myColors.primaryT
                                                }} source={item.name == 'Card' ? require('../assets/profile/card.png') : require('../assets/profile/cash.png')} />

                                                <Spacer paddingEnd={myWidth(5)} />
                                                {/* Card & Type */}
                                                <View style={{ flex: 1 }}>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                                                        <Text style={[styles.textCommon, {
                                                            fontSize: myFontSize.body,
                                                            fontFamily: myFonts.heading,
                                                            color: myColors.textL4

                                                        }]}>{item.name}</Text>

                                                        <Text numberOfLines={1} style={[styles.textCommon, {
                                                            fontSize: myFontSize.body,
                                                            fontFamily: myFonts.bodyBold,
                                                        }]}>{item.type}</Text>
                                                    </View>

                                                    <Spacer paddingT={myHeight(0.3)} />

                                                    {/* M Ride & Number */}
                                                    <View style={{ flex: 1 }}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                                                            <Text style={[styles.textCommon, {
                                                                fontSize: myFontSize.body3,
                                                                fontFamily: myFonts.heading,

                                                            }]}>{item.seconName}</Text>

                                                            <Text numberOfLines={1} style={[styles.textCommon, {
                                                                fontSize: myFontSize.body3,
                                                                fontFamily: myFonts.heading,
                                                            }]}>{item.number}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
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