import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../ultils/myFonts';



export const CartDetails = ({ navigation }) => {
    const items = [
        {
            num: 2,
            price: 'CA $21505',
            name: 'HERSHEY’S Sundae Pie'
        },
        {
            num: 1,
            price: 'CA $21505',
            name: 'Value Bundle For 4',
            list: [
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
        }

    ]

    return (
        <>
            {/* <StatusBar backgroundColor={orderModal ? '#00000030' : myColors.background} /> */}
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: myColors.background,
            }}>
                <Spacer paddingT={myHeight(1)} />

                {/* Cross */}
                <TouchableOpacity
                    activeOpacity={0.7} onPress={() => navigation.goBack()}
                    style={{
                        height: myHeight(3.8),
                        width: myHeight(3.8),
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: myWidth(3)
                    }}>
                    <Image style={{
                        height: myHeight(2.3),
                        width: myHeight(2.3),
                        resizeMode: 'contain',
                        tintColor: myColors.text
                    }} source={require('../assets/account/close.png')} />
                </TouchableOpacity>


                {/* Content */}
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: myWidth(4), backgroundColor: myColors.background, flexGrow: 1
                }}>

                    <Spacer paddingT={myHeight(1.5)} />
                    {/* Res Name */}
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body3,
                        fontFamily: myFonts.heading,
                    }]}>Burger King (2130 Morningsode Ave)</Text>

                    {
                        items.map((item, i) =>
                            <View key={i}>
                                <Spacer paddingT={myHeight(1.5)} />
                                <Text style={[styles.textCommon, {
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.bodyBold,
                                    paddingBottom: myHeight(1),
                                }]}>{item.name}</Text>

                                {
                                    item.list?.map((l, j) =>

                                        <Text key={j} style={[styles.textCommon, {
                                            fontSize: myFontSize.body,
                                            fontFamily: myFonts.heading,
                                            color: myColors.textL5,
                                            paddingBottom: myHeight(0.8),
                                        }]}>{l.name}: <Text style={{
                                            color: myColors.textL4, fontFamily: myFonts.heading,
                                            fontFamily: myFonts.bodyBold,
                                        }}>{l.value}</Text></Text>
                                    )
                                }

                                <Spacer paddingT={myHeight(2)} />
                                {/* Counter & Price */}
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                    {/* Counter */}
                                    <View style={{
                                        flexDirection: 'row', alignItems: 'center', backgroundColor: myColors.primaryT,
                                        paddingHorizontal: myWidth(3), borderRadius: myHeight(100), paddingVertical: myHeight(0.6),
                                        width: myWidth(32), justifyContent: 'space-between'
                                    }}>
                                        <TouchableOpacity activeOpacity={0.7} onPress={null}>
                                            <Image style={{
                                                height: myHeight(2.65),
                                                width: myHeight(2.65),
                                                resizeMode: 'contain',
                                                tintColor: myColors.background
                                            }} source={item.num > 1 ? require('../assets/cart/minus.png') : require('../assets/cart/bin.png')} />
                                        </TouchableOpacity>
                                        {/* <Spacer paddingEnd={myWidth(4)} /> */}
                                        <Text style={[styles.textCommon, {
                                            fontSize: myFontSize.body3,
                                            fontFamily: myFonts.bodyBold,
                                            color: myColors.background
                                        }]}>{item.num}</Text>
                                        {/* <Spacer paddingEnd={myWidth(4)} /> */}

                                        <TouchableOpacity activeOpacity={0.7} onPress={null}>
                                            <Image style={{
                                                height: myHeight(2.65),
                                                width: myHeight(2.65),
                                                resizeMode: 'contain',
                                                tintColor: myColors.background
                                            }} source={require('../assets/cart/plus.png')} />
                                        </TouchableOpacity>

                                    </View>

                                    <Text style={[styles.textCommon, {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.bodyBold,
                                    }]}>{item.price}</Text>
                                </View>
                                <Spacer paddingT={myHeight(2)} />
                                {/* Divider */}
                                <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.offColor, }} />



                            </View>
                        )
                    }
                    <Spacer paddingT={myHeight(2)} />
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

                    <Spacer paddingT={myHeight(5)} />
                    {/* Buttons */}
                    <View style={{ paddingHorizontal: myWidth(0), }}>
                        <Spacer paddingT={myHeight(1.5)} />


                        {/* Edit Profile */}
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
                            ]}>Go to checkout</Text>
                        </TouchableOpacity>


                        <Spacer paddingT={myHeight(2)} />
                        {/* Logout */}
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

                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.heading,
                                    color: myColors.primaryT,
                                }
                            ]}>Add Items</Text>
                        </TouchableOpacity>
                        <Spacer paddingT={myHeight(2.5)} />

                    </View>
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