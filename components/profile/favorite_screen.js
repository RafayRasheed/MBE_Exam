import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../ultils/myFonts';
import { FoodOpenNow } from '../home/dashboards/food/food_data';



export const Favourite = ({ navigation }) => {

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
                        }]}>Your Favourites</Text>
                    </View>

                </View>

                {/* Content */}
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: myWidth(4), backgroundColor: myColors.background, flexGrow: 1
                }}>
                    <Spacer paddingT={myHeight(1)} />

                    {
                        FoodOpenNow.map((restaurant, i) =>
                            <TouchableOpacity activeOpacity={0.85} onPress={() => navigation.navigate('RestaurantDetail', { item: restaurant })}
                                key={i} style={{ flexDirection: 'row', paddingBottom: myHeight(2), alignItems: 'center' }}>
                                <Image style={{
                                    height: myHeight(7),
                                    width: myHeight(7),
                                    borderRadius: myWidth(1.5),
                                    overflow: 'hidden',
                                    resizeMode: 'cover',
                                    marginTop: myHeight(0.5)
                                }} source={restaurant.image} />
                                <Spacer paddingEnd={myWidth(2)} />

                                {/* Name & Price */}
                                <View style={{ flex: 1 }}>
                                    <Text numberOfLines={1} style={[styles.textCommon, {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.bodyBold,

                                    }]}>{restaurant.name}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                                        <View>
                                            <Text numberOfLines={1} style={[styles.textCommon, {
                                                fontSize: myFontSize.xxSmall,
                                                fontFamily: myFonts.body,
                                                color: myColors.textL4
                                            }]}>{restaurant.delivery}</Text>

                                            <Spacer paddingT={myHeight(0.2)} />
                                            <Text numberOfLines={1} style={[styles.textCommon, {
                                                fontSize: myFontSize.xxSmall,
                                                fontFamily: myFonts.body,
                                                color: myColors.textL4
                                            }]}>{restaurant.deliveryTime}</Text>
                                        </View>

                                        <View style={{ backgroundColor: myColors.primaryT, borderRadius: myHeight(100), padding: myHeight(0.5) }}>
                                            <Text numberOfLines={1} style={[styles.textCommon, {
                                                fontSize: myFontSize.body2,
                                                fontFamily: myFonts.bodyBold,
                                                color: myColors.background
                                            }]}>{restaurant.rating}</Text>
                                        </View>
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