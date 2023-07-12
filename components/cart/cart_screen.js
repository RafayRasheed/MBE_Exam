import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../ultils/myFonts';



export const Cart = ({ navigation }) => {

    const cartsItems = [
        {
            name: 'Burger King (2130Morningsode Ave)', items: 2, price: 'CA$32.38', address: 'Deliver to Block#7'
        },
        {
            name: 'Burger King (2130Morningsode Ave)', items: 2, price: 'CA$32.38', address: 'Deliver to Block#7'
        },
        {
            name: 'Burger King (2130Morningsode Ave)', items: 2, price: 'CA$32.38', address: 'Deliver to Block#7'
        },
        {
            name: 'Burger King (2130Morningsode Ave)', items: 2, price: 'CA$32.38', address: 'Deliver to Block#7'
        },
    ]

    return (
        <>
            {/* <StatusBar backgroundColor={orderModal ? '#00000030' : myColors.background} /> */}
            <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background, }}>

                <Spacer paddingT={myHeight(2)} />

                {/* Content */}
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: myWidth(4), backgroundColor: myColors.background, flexGrow: 1
                }}>
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.medium2,
                        fontFamily: myFonts.heading,
                    }]}>Carts</Text>
                    <Spacer paddingT={myHeight(1)} />

                    {
                        cartsItems.map((item, i) =>
                            <TouchableOpacity activeOpacity={0.85} onPress={() => navigation.navigate('CartDetails')}
                                key={i} >
                                {/* Divider */}
                                {i > 0 && <View style={{ height: myHeight(0.1), backgroundColor: myColors.dot }} />}
                                <Spacer paddingT={myHeight(1.6)} />

                                <View style={{ flexDirection: 'row', paddingBottom: myHeight(2), alignItems: 'center' }}>
                                    <Image style={{
                                        height: myHeight(7),
                                        width: myHeight(7),
                                        resizeMode: 'cover',
                                        borderRadius: myWidth(1),
                                        overflow: 'hidden'

                                    }} source={require('../assets/home_main/daily_special/dailyS2.jpg')} />
                                    <Spacer paddingEnd={myWidth(2)} />

                                    {/* Name & Price & Go*/}
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text numberOfLines={1} style={[styles.textCommon, {
                                                fontSize: myFontSize.body2,
                                                fontFamily: myFonts.bodyBold,
                                            }]}>{item.name}</Text>
                                            <Text numberOfLines={1} style={[styles.textCommon, {
                                                fontSize: myFontSize.xxSmall,
                                                fontFamily: myFonts.body,
                                                color: myColors.textL4
                                            }]}>{item.items} items.  {item.price}</Text>

                                            <Spacer paddingT={myHeight(0.2)} />
                                            <Text numberOfLines={1} style={[styles.textCommon, {
                                                fontSize: myFontSize.xxSmall,
                                                fontFamily: myFonts.body,
                                                color: myColors.textL4
                                            }]}>{item.address}</Text>
                                        </View>
                                        <Spacer paddingEnd={myWidth(2)} />
                                        <Image style={{
                                            height: myHeight(2),
                                            width: myHeight(2),
                                            resizeMode: 'contain',
                                            alignSelf: 'center'
                                        }} source={require('../assets/home_main/go.png')} />
                                    </View>



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