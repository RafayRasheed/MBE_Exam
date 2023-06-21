import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar } from 'react-native';
import { myColors } from '../../../../ultils/myColors';
import { Spacer, ios, myHeight, myWidth } from '../../../common';
import { myFonts, myLetSpacing, myFontSize } from '../../../../ultils/myFonts';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Collapsible from 'react-native-collapsible';
import { saveLocations } from '../ride/ride_data';

// Component Circle Number
const Number_text = ({ number, name, fill = true }) => (
    <View style={{ alignItems: 'center', width: '33.33%', }}>
        {/* number */}
        <View style={{
            backgroundColor: fill ? myColors.primaryT : myColors.background,
            height: myHeight(3.2),
            width: myHeight(3.2),
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: myHeight(0.15),
            borderColor: myColors.primaryT,
            // paddingHorizontal: myWidth(2),
            borderRadius: myHeight(30)
        }}>
            <Text numberOfLines={1} style={[styles.textCommon, {
                fontSize: myFontSize.xxSmall,
                fontFamily: myFonts.heading,
                color: fill ? myColors.background : myColors.text,
            }]}>{number}</Text>
        </View>
        <Spacer paddingT={myHeight(0.4)} />

        {/* name */}
        <Text numberOfLines={1} style={[styles.textCommon, {
            fontSize: myFontSize.xxSmall,
            fontFamily: myFonts.bodyBold,
        }]}>{name}</Text>
    </View>
)

// Component Circle Number
const PricingRow = ({ title, value, fontSize, fontFamily }) => (
    <View style={{
        alignItems: 'center', flexDirection: 'row',
        justifyContent: 'space-between',
    }}>
        <Text numberOfLines={1} style={[styles.textCommon, {
            fontSize,
            fontFamily,
        }]}>{title}</Text>
        <Text numberOfLines={1} style={[styles.textCommon, {
            fontSize,
            fontFamily,
        }]}>{value}</Text>
    </View>
)


export const ItemCheckoutScreen = ({ navigation, route }) => {
    const { item } = route.params
    const [deliveryClose, setDeliveryClose] = useState(true)
    const [paymentClose, setPaymentClose] = useState(true)

    return (
        <>
            {/* <StatusBar backgroundColor={promoModal ? '#00000050' : myColors.background} /> */}

            <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background }}>
                <Spacer paddingT={myHeight(1)} />
                {/* Top */}
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: myWidth(4) }}>
                    {/* Back */}
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}
                        style={{
                            backgroundColor: myColors.primaryT,
                            paddingHorizontal: myHeight(1.1) * 1.4,
                            paddingVertical: myHeight(1.1),
                            borderRadius: myWidth(1.5),
                            elevation: 5, shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 2,
                        }}>
                        <Image style={{
                            height: myHeight(2),
                            width: myHeight(2) * 0.5,
                            resizeMode: 'contain',
                            tintColor: myColors.background,
                            marginStart: -myWidth(0.5)
                        }} source={require('../../../assets/startup/arrowL.png')} />
                    </TouchableOpacity>

                    <Spacer paddingEnd={myWidth(3)} />
                    {/* Cart & Restaurant name */}
                    <View>
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.heading,
                        }]}>Checkout</Text>
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            fontSize: myFontSize.xxSmall,
                            fontFamily: myFonts.body,
                        }]}>{item.resName}</Text>
                    </View>

                </View>

                <Spacer paddingT={myHeight(2.6)} />
                {/* Line*/}
                <View style={{ width: '100%', height: myHeight(1.1), backgroundColor: myColors.primaryT }} />

                {/* number menu cart checkout */}
                <View style={{ flexDirection: "row", justifyContent: 'space-around', marginTop: -myHeight(2.15) }}>
                    <Number_text name={'Menu'} number={1} fill={true} />
                    <Number_text name={'Cart'} number={2} fill={true} />
                    <Number_text name={'Checkout'} number={3} fill={true} />
                </View>

                <View style={{ paddingHorizontal: myWidth(4), }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                        {/* Delivery  Card*/}
                        <View style={{
                            backgroundColor: myColors.background,
                            elevation: 6,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.25,
                            shadowRadius: 2,
                            paddingHorizontal: myWidth(3.5),
                            borderWidth: myHeight(0.1),
                            borderColor: myColors.dot
                        }}>
                            <Spacer paddingT={myHeight(1)} />
                            {/* Loc Address & go */}
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Image style={{
                                    height: myHeight(2.5),
                                    width: myHeight(2.5),
                                    resizeMode: 'contain',
                                    tintColor: myColors.primaryT,
                                }} source={require('../../../assets/home_main/dashboards/location.png')} />

                                <Spacer paddingEnd={myWidth(2)} />
                                <Text numberOfLines={1} style={[styles.textCommon, {
                                    flex: 1,
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.bodyBold,
                                }]}>Delivery address</Text>

                                {/* Go */}
                                <TouchableOpacity style={{
                                    padding: myWidth(1), transform: [{ rotate: deliveryClose ? '90deg' : '270deg' }]
                                }}
                                    activeOpacity={0.8} onPress={() => setDeliveryClose(!deliveryClose)}>
                                    <Image style={{
                                        height: myHeight(1.8),
                                        width: myHeight(1.8),
                                        resizeMode: 'contain',
                                        tintColor: myColors.primaryT,
                                    }} source={require('../../../assets/home_main/go.png')} />
                                </TouchableOpacity>
                            </View>

                            <Spacer paddingT={myHeight(1)} />

                            <Text numberOfLines={1} style={[styles.textCommon, {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.body,
                            }]}>1 24th B Commercial Street Karachi</Text>
                            <Spacer paddingT={myHeight(1)} />

                            <Collapsible collapsed={deliveryClose}>
                                {/* Save Place */}
                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <View style={{
                                        borderRadius: myHeight(2), padding: myHeight(0.7), paddingTop: myHeight(0.5),
                                        backgroundColor: myColors.primaryL2
                                    }}>
                                        <Image style={{
                                            height: myHeight(2.1),
                                            width: myHeight(2.1),
                                            resizeMode: 'contain',
                                        }}
                                            source={require('../../../assets/home_main/dashboards/starF.png')} />
                                    </View>
                                    <Spacer paddingEnd={myWidth(2)} />
                                    <Text style={[styles.textCommon, {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.heading,
                                    }]}>SAVED PLACE</Text>
                                </View>
                                <Spacer paddingT={myHeight(0.6)} />

                                {
                                    saveLocations.map((place) =>
                                        <TouchableOpacity activeOpacity={0.8} onPress={() => null}>
                                            <Text style={[styles.textCommon, {
                                                fontSize: myFontSize.body2,
                                                fontFamily: myFonts.body,
                                            }]}>{place.name}</Text>
                                        </TouchableOpacity>)
                                }
                                <Spacer paddingT={myHeight(1)} />

                            </Collapsible>

                        </View>

                        <Spacer paddingT={myHeight(2.3)} />
                        {/* Pricing CArd*/}

                        <PricingRow title={'Subtotal'} value={'Rs. 1,300.00'} fontSize={myFontSize.xxSmall} fontFamily={myFonts.heading} />
                        <Spacer paddingT={myHeight(1)} />
                        <PricingRow title={'Delivery Fee'} value={'Rs. 79.00'} fontSize={myFontSize.xxSmall} fontFamily={myFonts.body} />
                        <Spacer paddingT={myHeight(0.5)} />
                        <PricingRow title={'GST (13%)'} value={'Rs. 63'} fontSize={myFontSize.xxSmall} fontFamily={myFonts.body} />

                        <Spacer paddingT={myHeight(1.7)} />
                        <PricingRow title={'Total'} value={'Rs. 1,563.92'} fontSize={myFontSize.body3} fontFamily={myFonts.heading} />

                    </ScrollView>

                    {/* Confirm button */}
                    <TouchableOpacity activeOpacity={0.9} onPress={null}
                        style={{
                            backgroundColor: myColors.primaryT,
                            borderRadius: myHeight(0.8),
                            paddingVertical: myHeight(1.3),
                            marginVertical: myHeight(1.3),
                            alignItems: 'center',
                            width: '100%', justifyContent: 'center',

                        }}>

                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body,
                                fontFamily: myFonts.bodyBold,
                                color: myColors.background,
                            }
                        ]}>Confirm Order</Text>
                    </TouchableOpacity>
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
