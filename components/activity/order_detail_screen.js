import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../ultils/myFonts';



export const OrderDetails = ({ navigation, route }) => {
    const { item } = route.params
    const items = [
        {
            name: 'Large Burger',
            value: 'Whopper',
        },
        {
            name: 'Small Burger',
            value: 'Original Chicken Sandwich',
        },
        {
            name: 'Zinger Burger',
            value: 'Whopper Cheese',
        },
        {
            name: 'Drink',
            value: '1.5 Litre Coke',
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
                        }]}>Order Details</Text>
                    </View>

                </View>

                {/* Content */}
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: myWidth(4), backgroundColor: myColors.background, flexGrow: 1
                }}>
                    <Spacer paddingT={myHeight(2)} />
                    {/* Name */}
                    <Text style={[
                        styles.textCommon,
                        {
                            fontSize: myFontSize.medium2,
                            fontFamily: myFonts.heading,
                        }
                    ]}>Burger King</Text>

                    <Spacer paddingT={myHeight(0.5)} />
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body2,
                        fontFamily: myFonts.bodyBold,
                    }]}>6 Oct 2018, 2:06 PM</Text>


                    <Spacer paddingT={myHeight(3.5)} />
                    {/* Quantity */}
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body2,
                        fontFamily: myFonts.bodyBold,
                    }]}>Value Bundle for 4</Text>


                    <Spacer paddingT={myHeight(1.5)} />
                    {/* Items */}
                    {
                        items.map((item, i) =>

                            <Text key={i} style={[styles.textCommon, {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.heading,
                                color: myColors.textL5,
                                paddingBottom: myHeight(1),
                            }]}>{item.name}: <Text style={{
                                color: myColors.textL4, fontFamily: myFonts.heading,
                                fontFamily: myFonts.bodyBold,
                            }}>{item.value}</Text></Text>)
                    }

                    <Spacer paddingT={myHeight(1)} />
                    {/* Divider */}
                    <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />
                    <Spacer paddingT={myHeight(1.5)} />

                    {/* Total Price */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.textCommon, {
                            flex: 1,
                            fontSize: myFontSize.xBody,
                            fontFamily: myFonts.heading,
                        }]}>Subtotal</Text>
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.xBody,
                            fontFamily: myFonts.heading,
                        }]}>CA $29.99</Text>
                    </View>
                </ScrollView>


                {/* Buttons */}
                <View style={{ paddingHorizontal: myWidth(4) }}>
                    <Spacer paddingT={myHeight(1.5)} />

                    {/* Invoice */}
                    <TouchableOpacity activeOpacity={0.8} onPress={() => null}
                        style={{
                            backgroundColor: myColors.background,
                            borderRadius: myHeight(0.8),
                            paddingVertical: myHeight(1.1),
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: myHeight(0.1), borderColor: myColors.primaryT,
                            flexDirection: 'row',
                        }}>
                        <Image style={{
                            height: myHeight(2.6),
                            width: myHeight(2.6),
                            resizeMode: 'contain',
                            tintColor: myColors.primaryT
                        }} source={require('../assets/activity/download.png')} />

                        <Spacer paddingEnd={myWidth(2)} />
                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.heading,
                                color: myColors.primaryT,
                            }
                        ]}>Invoice</Text>
                    </TouchableOpacity>
                    <Spacer paddingT={myHeight(2)} />

                    {/* Rebook */}
                    <TouchableOpacity activeOpacity={0.9} onPress={() => null}
                        style={{
                            backgroundColor: myColors.primaryT,
                            borderRadius: myHeight(0.8),
                            paddingVertical: myHeight(1.1),
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.heading,
                                color: myColors.background,
                            }
                        ]}>{item.status == 'In Progress' ? 'Track Order' : 'Reorder'}</Text>
                    </TouchableOpacity>
                    <Spacer paddingT={myHeight(1.5)} />

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
