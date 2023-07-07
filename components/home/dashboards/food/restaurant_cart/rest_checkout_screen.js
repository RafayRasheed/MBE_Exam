import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../../../../common';
import { myFonts, myLetSpacing, myFontSize } from '../../../../../ultils/myFonts';
import Animated, { SlideInDown } from 'react-native-reanimated';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { myColors } from '../../../../../ultils/myColors';
import { Schedule } from './rest_cart_component/schedule';
import { PickOrder } from './rest_cart_component/pickOrder';

export const ResturantCheckout = ({ navigation, route }) => {
    const { promoSet } = route.params

    const [onDelivery, setOnDelivery] = useState(true)
    const [isStandardDelivery, setIsStandardDelivery] = useState(true)
    const [scheduleTime, setScheduleTime] = useState(null)

    //Modals
    const [showScheduleModal, setShowScheduleModal] = useState(false)
    const [dateTime, setDateTime] = useState(null)

    const [promoCode, setPromoCode] = useState(promoSet)
    const [promoCodeUpdate, setPromoCodeUpdate] = useState(promoSet)
    const [promoModal, setPromoModal] = useState(false)

    const [addressName, setAddressName] = useState('Home')
    const [address, setAddress] = useState('Scarborough, ON M1V 5C4')

    const [showOrderPickModal, setShowOrderPickModal] = useState(null)
    const [orderPick, setOrderPick] = useState('Meet at my door')
    const [orderPickInstru, setOrderPickInstru] = useState(null)

    const tips = ['$1.50', '$2.50', '$3.50', 'Other']
    const [tipIndex, setTipIndex] = useState(0)


    function onPlaceOrder() {
        navigation.navigate('DoneOrder')
    }
    function onActivateCode() {
        setPromoModal(false)
        setPromoCodeUpdate(promoCode)
    }

    function onDeliveryLoc() {
        navigation.navigate('Address', { name: 'Delivery Address' })
    }
    function onPickOrder() {
        setShowOrderPickModal(true)
    }

    function onPaymentMethod() {
        navigation.navigate('RestaurantPayment')
    }



    const MidRow = ({ icon, title, line, showModal, showGO = true }) => (
        <TouchableOpacity activeOpacity={0.8} onPress={showModal}>
            <Spacer paddingT={myHeight(2)} />

            <View style={{ flexDirection: 'row', }}
                activeOpacity={0.8} onPress={() => null}>
                <Spacer paddingEnd={myHeight(0.2)} />

                <Image style={{
                    height: myHeight(3.2),
                    width: myHeight(3.2),
                    resizeMode: 'contain',
                }} source={icon} />

                <Spacer paddingEnd={myWidth(2) + myHeight(0.2)} />

                <View style={{ flex: 1 }}>
                    <Text numberOfLines={1} style={[styles.textCommon, {
                        fontSize: myFontSize.body2,
                        fontFamily: myFonts.bodyBold,
                    }]}>{title}</Text>
                    <Text numberOfLines={1} style={[styles.textCommon, {
                        fontSize: myFontSize.xxSmall,
                        fontFamily: myFonts.bodyBold,
                        color: myColors.textL4
                    }]}>{line}</Text>
                </View>

                <Image style={{
                    height: myHeight(2),
                    width: myHeight(2),
                    resizeMode: 'contain',
                    marginTop: myHeight(0.4),
                    tintColor: showGO ? myColors.dot2 : myColors.background
                }} source={require('../../../../assets/home_main/go.png')} />

            </View>
            <Spacer paddingT={myHeight(2)} />

        </TouchableOpacity>

    )

    const PricingRow = ({ title, icon = false, value, fontSize, fontFamily, color = myColors.text }) => (
        <View style={{
            alignItems: 'center', flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text numberOfLines={1} style={[styles.textCommon, {
                    fontSize,
                    fontFamily,
                    color
                }]}>{title}</Text>
                <Spacer paddingEnd={myWidth(1)} />

                {
                    icon &&
                    <Image style={{
                        height: myHeight(2),
                        width: myHeight(2),
                        resizeMode: 'contain',
                        tintColor: myColors.line
                    }} source={require('../../../../assets/home_main/dashboards/ride/wrong.png')} />
                }
            </View>
            <Text numberOfLines={1} style={[styles.textCommon, {
                fontSize,
                fontFamily,
                color
            }]}>{value}</Text>
        </View>
    )

    return (
        <>
            <StatusBar backgroundColor={promoModal ? '#00000050' : myColors.background} />

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
                            }} source={require('../../../../assets/home_main/dashboards/back2.png')} />
                        </TouchableOpacity>

                        <Spacer paddingEnd={myWidth(2)} />
                        {/* Name */}
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.bodyBold,
                        }]}>Checkout From McDonalds - King St</Text>


                    </View>
                </View>

                {/* Content */}
                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: myWidth(4) }}>
                    <Spacer paddingT={myHeight(1)} />
                    {/*  Delivery  & Schedule*/}
                    <View style={{
                        flexDirection: 'row', paddingHorizontal: myWidth(1), paddingVertical: myHeight(0.4),
                        borderRadius: myHeight(10), backgroundColor: myColors.primaryL2, alignSelf: 'center'
                    }}>
                        {/* Pick-up */}
                        <TouchableOpacity activeOpacity={0.9} onPress={() => setOnDelivery(false)}
                            style={{
                                backgroundColor: onDelivery ? myColors.primaryL2 : myColors.primaryT,
                                paddingHorizontal: myWidth(8), paddingVertical: myHeight(0.2), borderRadius: myHeight(10)
                            }}>
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.xSmall,
                                fontFamily: myFonts.bodyBold,
                                color: onDelivery ? myColors.text : myColors.background,
                            }]}>Pick-up</Text>
                        </TouchableOpacity>

                        <Spacer paddingEnd={myWidth(1)} />

                        {/* Delivery */}
                        <TouchableOpacity activeOpacity={0.9} onPress={() => setOnDelivery(true)}
                            style={{
                                backgroundColor: !onDelivery ? myColors.primaryL2 : myColors.primaryT,
                                paddingHorizontal: myWidth(8), paddingVertical: myHeight(0.2), borderRadius: myHeight(10)
                            }}>
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.xSmall,
                                fontFamily: myFonts.bodyBold,
                                color: !onDelivery ? myColors.text : myColors.background,
                            }]}>Delivery</Text>
                        </TouchableOpacity>
                    </View>

                    <Spacer paddingT={myHeight(3.5)} />

                    {/* clock && delivry & time */}
                    <View style={{ flexDirection: 'row', alignItems: "center" }}
                        activeOpacity={0.8} onPress={() => null}>
                        <Spacer paddingEnd={myHeight(0.2)} />

                        <Image style={{
                            height: myHeight(2.8),
                            width: myHeight(2.8),
                            resizeMode: 'contain',
                        }} source={require('../../../../assets/home_main/dashboards/foods/clock3.png')} />

                        <Spacer paddingEnd={myWidth(2) + myHeight(0.2)} />
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            flex: 1,
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.body,
                        }]}>Delivery Time</Text>

                        {/* time */}
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.body,
                        }]}>14 - 24 min</Text>

                    </View>

                    <Spacer paddingT={myHeight(2)} />

                    {/* Standard & Schedule */}
                    <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between", }}>
                        {/* Standard */}
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setIsStandardDelivery(true)}
                            style={{
                                paddingHorizontal: myWidth(2),
                                width: myWidth(43), borderRadius: myWidth(2),
                                borderWidth: myHeight(0.12), paddingHorizontal: myWidth(3)
                            }}>
                            <Spacer paddingT={myHeight(1)} />

                            {/* TEXT STANDARD & CIRCLE */}
                            <View style={{
                                flexDirection: 'row', alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                {/* Text */}
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.bodyBold,
                                    }
                                ]}>Standard</Text>

                                {/* Circle */}
                                <View style={{
                                    backgroundColor: isStandardDelivery ? myColors.primaryT : myColors.background,
                                    padding: myHeight(0.2), borderRadius: myHeight(10), borderWidth: myHeight(0.1)
                                }}>
                                    <Image style={{
                                        height: myHeight(1.8),
                                        width: myHeight(1.8),
                                        resizeMode: 'contain',
                                        tintColor: myColors.background
                                    }} source={require('../../../../assets/home_main/dashboards/foods/check.png')} />
                                </View>
                            </View>
                            {/* Text */}
                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.heading,
                                    color: myColors.textL4
                                }
                            ]}>14 - 24 min</Text>
                            <Spacer paddingT={myHeight(1)} />

                        </TouchableOpacity>

                        {/* Schedule */}
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setShowScheduleModal(true)}
                            style={{
                                paddingHorizontal: myWidth(2),
                                width: myWidth(43), borderRadius: myWidth(2),
                                borderWidth: myHeight(0.12), paddingHorizontal: myWidth(3)
                            }}>
                            <Spacer paddingT={myHeight(1)} />

                            {/* TEXT Schedule & CIRCLE */}
                            <View style={{
                                flexDirection: 'row', alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                {/* Text */}
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.bodyBold,
                                    }
                                ]}>Schedule</Text>

                                {/* Circle */}
                                <View style={{
                                    backgroundColor: !isStandardDelivery ? myColors.primaryT : myColors.background,
                                    padding: myHeight(0.2), borderRadius: myHeight(10), borderWidth: myHeight(0.1)
                                }}>
                                    <Image style={{
                                        height: myHeight(1.8),
                                        width: myHeight(1.8),
                                        resizeMode: 'contain',
                                        tintColor: myColors.background
                                    }} source={require('../../../../assets/home_main/dashboards/foods/check.png')} />
                                </View>
                            </View>
                            {/* Text */}
                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.heading,
                                    color: myColors.textL4
                                }
                            ]}>{dateTime ? dateTime : 'Choose a time'}</Text>
                            <Spacer paddingT={myHeight(1)} />

                        </TouchableOpacity>
                    </View>

                    <Spacer paddingT={myHeight(2.5)} />

                    {/* Mid Content */}
                    <View>
                        {/* Divider */}
                        <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />

                        {/*Delivery Loc */}
                        <MidRow icon={require('../../../../assets/home_main/dashboards/foods/home2.png')}
                            title={addressName} line={address} showModal={onDeliveryLoc} />

                        {/* Divider */}
                        <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />

                        {/*place order */}
                        <MidRow icon={require('../../../../assets/home_main/dashboards/foods/bag.png')}
                            title={orderPick} line={orderPickInstru ? orderPickInstru : 'Add instructions for delivery'} showModal={onPickOrder} />

                        {/* Divider */}
                        <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />

                        {/*Call */}
                        <MidRow icon={require('../../../../assets/home_main/dashboards/foods/phone2.png')}
                            title={'(647) 773-5918'} line={'Call me when outside'} showGO={false} />

                        {/* Divider */}
                        <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />

                        <Spacer paddingT={myHeight(2)} />
                        {/* promo && add promo  */}
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }}
                            activeOpacity={0.8} onPress={() => setPromoModal(true)}>

                            <Spacer paddingEnd={myHeight(0.2)} />

                            <Image style={{
                                height: myHeight(3.2),
                                width: myHeight(3.2),
                                resizeMode: 'contain',
                            }} source={require('../../../../assets/home_main/dashboards/promo.png')} />

                            <Spacer paddingEnd={myWidth(2) + myHeight(0.2)} />
                            <Text numberOfLines={1} style={[styles.textCommon, {
                                flex: 1,
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.bodyBold,
                            }]}>{promoCodeUpdate ? promoCodeUpdate : 'Add a promo'}</Text>

                        </TouchableOpacity>

                        <Spacer paddingT={myHeight(2)} />
                        {/* Divider */}
                        <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />
                    </View>

                    <Spacer paddingT={myHeight(2)} />
                    {/* Tip Content */}
                    <View>
                        {/* Delivry & Time */}
                        <View style={{ flexDirection: 'row', }}>
                            {/* DELIVERY */}
                            <Text numberOfLines={1} style={[styles.textCommon, {
                                flex: 1,
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.bodyBold,
                            }]}>Driver Tip</Text>

                            {/* time */}
                            <Text numberOfLines={1} style={[styles.textCommon, {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.bodyBold,
                            }]}>{tips[tipIndex]}</Text>
                        </View>

                        <Spacer paddingT={myHeight(0.5)} />
                        {/* GOES TO DRIVER */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <Image style={{
                                height: myHeight(2.1),
                                width: myHeight(2.1),
                                resizeMode: 'contain',
                                tintColor: myColors.textL4
                            }} source={require('../../../../assets/home_main/dashboards/ride/wrong.png')} />
                            <Spacer paddingEnd={myWidth(1)} />
                            <Text numberOfLines={1} style={[styles.textCommon, {
                                fontSize: myFontSize.xxSmall,
                                fontFamily: myFonts.body,
                                color: myColors.textL4,
                            }]}>100% of the tip goes to your Driver</Text>
                        </View>

                        <Spacer paddingT={myHeight(1.5)} />
                        {/* Select Ammount */}
                        <View style={{
                            flexDirection: 'row',
                            width: myWidth(88),
                            //  justifyContent: 'space-around',
                            borderRadius: myHeight(10), backgroundColor: myColors.primaryL2, alignSelf: 'center'
                        }}>

                            {/* Pick-up */}
                            {
                                tips.map((item, i) =>

                                    <TouchableOpacity key={i} activeOpacity={0.9} onPress={() => setTipIndex(i)}
                                        style={{
                                            backgroundColor: tipIndex == i ? myColors.primaryT : myColors.primaryL2,
                                            width: myWidth(88) / tips.length, alignItems: 'center',
                                            paddingHorizontal: myWidth(2), paddingVertical: myHeight(0.3), borderRadius: myHeight(10)
                                        }}>
                                        <Text style={[styles.textCommon, {
                                            fontSize: myFontSize.body2,
                                            fontFamily: myFonts.bodyBold,
                                            color: tipIndex == i ? myColors.background : myColors.text,
                                        }]}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            }



                        </View>
                    </View>

                    <Spacer paddingT={myHeight(2.5)} />
                    {/* Pricing */}
                    <View>
                        {/* Subtotal  */}
                        <PricingRow title={'Subtotal'} value={'CAD $18.98'} fontFamily={myFonts.bodyBold} fontSize={myFontSize.body2} />

                        <Spacer paddingT={myHeight(1)} />
                        {/* Delivery Fees */}
                        <PricingRow title={'Delivery Fees'} icon={true} value={'CAD $0.99'} fontFamily={myFonts.body} fontSize={myFontSize.xxSmall} />

                        <Spacer paddingT={myHeight(0.5)} />
                        {/* Delivery Fees */}
                        <PricingRow title={'Fees & Estimated Tax'} icon={true} value={'CAD $2.46'} fontFamily={myFonts.body} fontSize={myFontSize.xxSmall} />

                        <Spacer paddingT={myHeight(0.5)} />
                        {/* Driver tips Fees */}
                        <PricingRow title={'Driver Tips'} value={`CAD ${tips[tipIndex]}`} fontFamily={myFonts.body} fontSize={myFontSize.xxSmall} />

                        <Spacer paddingT={myHeight(1)} />
                        {/* Divider */}
                        <View style={{ borderTopWidth: myHeight(0.15), borderColor: myColors.dot, }} />

                        <Spacer paddingT={myHeight(1)} />
                        {/* Total */}
                        <PricingRow title={'Total'} value={'CAD $21.44'} fontFamily={myFonts.heading} fontSize={myFontSize.body2} color={myColors.primaryT} />
                    </View>

                    <Spacer paddingT={myHeight(2)} />
                    {/* wallet && payment & num */}
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }}
                        activeOpacity={0.8} onPress={onPaymentMethod}>
                        <Spacer paddingEnd={myHeight(0.2)} />

                        <Image style={{
                            height: myHeight(2.8),
                            width: myHeight(2.8),
                            resizeMode: 'contain',
                        }} source={require('../../../../assets/home_main/dashboards/foods/wallet2.png')} />

                        <Spacer paddingEnd={myWidth(2) + myHeight(0.2)} />
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            flex: 1,
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.bodyBold,
                        }]}>Payment</Text>

                        {/* time */}
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.bodyBold,
                            color: myColors.textL5
                        }]}>Master Card 4329</Text>

                    </TouchableOpacity>

                    {/* Place Order */}
                    <TouchableOpacity activeOpacity={0.9} onPress={onPlaceOrder}
                        style={{
                            backgroundColor: myColors.primaryT,
                            borderRadius: myHeight(0.8),
                            paddingVertical: myHeight(1.1),
                            marginVertical: myHeight(3),
                            // marginHorizontal: myWidth(10),
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
                        ]}>Place Order</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>


            {/* Promo Code Modal */}
            {
                promoModal &&
                <View style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    backgroundColor: '#00000030',

                }}>
                    <KeyboardAwareScrollView
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        style={{ backgroundColor: '#00000030' }}
                        contentContainerStyle={{
                            flex: 1
                            // position: 'absolute',
                        }}
                    >
                        <TouchableOpacity activeOpacity={1}
                            style={{
                                flex: 1, paddingHorizontal: myWidth(4.5),

                            }}
                            onPress={() => setPromoModal(false)}
                        >
                        </TouchableOpacity>

                        <Animated.View
                            entering={SlideInDown.duration(200)}
                            style={{
                                paddingHorizontal: myWidth(4.5),
                                backgroundColor: myColors.background,
                                borderTopStartRadius: myWidth(4),
                                borderTopEndRadius: myWidth(4),
                            }}>
                            <Spacer paddingT={myHeight(0.8)} />

                            {/* Line */}
                            <View style={{
                                width: myWidth(30), height: myHeight(0.7),
                                backgroundColor: myColors.dot, borderRadius: myHeight(2),
                                alignSelf: 'center',
                            }} />
                            <Spacer paddingT={myHeight(1.5)} />

                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.heading,
                                }
                            ]}>Add Promo</Text>
                            <Spacer paddingT={myHeight(1.5)} />

                            {/* Input */}
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderRadius: myHeight(0.8),
                                paddingHorizontal: myWidth(2.5),
                                borderWidth: myHeight(0.09),
                                borderColor: myColors.primaryT,
                                backgroundColor: myColors.background,
                                elevation: 3,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 4,
                            }}>

                                <TextInput placeholder="Enter promo code"
                                    keyboardType={'number-pad'}
                                    placeholderTextColor={myColors.offColor}
                                    selectionColor={myColors.primaryT}
                                    cursorColor={myColors.primaryT}
                                    value={promoCode} onChangeText={setPromoCode}
                                    style={{
                                        flex: 1,
                                        textAlignVertical: 'center',
                                        paddingVertical: ios ? myHeight(1.2) : myHeight(100) > 600 ? myHeight(0.8) : myHeight(0.1),
                                        fontSize: myFontSize.body,
                                        color: myColors.text,
                                        includeFontPadding: false,
                                        fontFamily: myFonts.bodyBold,
                                    }}
                                />
                            </View>

                            <Spacer paddingT={myHeight(8)} />
                            {/* Activate Code Button */}
                            <TouchableOpacity activeOpacity={0.8} onPress={onActivateCode}
                                style={{
                                    backgroundColor: myColors.primaryT,
                                    borderRadius: myHeight(0.5),
                                    paddingVertical: myHeight(1),
                                    alignItems: 'center',
                                    width: '100%', justifyContent: 'center',
                                }}>

                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body,
                                        fontFamily: myFonts.heading,
                                        color: myColors.background,
                                    }
                                ]}>Activate Code</Text>

                            </TouchableOpacity>
                            <Spacer paddingT={myHeight(4)} />

                        </Animated.View>
                    </KeyboardAwareScrollView>
                </View>

            }

            {/* Schedule Modal*/}
            {
                showScheduleModal &&
                <Schedule setDeleivry={setIsStandardDelivery} setShowModal={setShowScheduleModal} setDateTime={setDateTime} />
            }


            {/* Pick Order Modal */}
            {
                showOrderPickModal &&
                <PickOrder name={orderPick} setShowModal={setShowOrderPickModal}
                    setPick={setOrderPick} setInst={setOrderPickInstru} instruct={orderPickInstru}
                />
            }

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
