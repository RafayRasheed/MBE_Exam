import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../../../common';
import { myColors } from '../../../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../../../ultils/myFonts';
import DashedLine from 'react-native-dashed-line';
import Animated, { SlideInDown } from 'react-native-reanimated';


export const OrderTracking = ({ navigation }) => {
    const [i, setI] = useState(0)
    const [otpModal, setOtpModal] = useState(false)
    const [orderModal, setOrderModal] = useState(false)


    const TwoLine = ({ line1, line2, colorOn }) => (
        <View style={{ marginTop: myHeight(0.2) }}>
            <Text style={[styles.textCommon, {
                fontSize: myFontSize.body,
                fontFamily: myFonts.bodyBold,
                color: colorOn ? myColors.primaryT : myColors.text
            }]}>{line1}</Text>
            <Text style={[styles.textCommon, {
                fontSize: myFontSize.body,
                fontFamily: myFonts.body,
                color: myColors.offColor
            }]}>{line2}</Text>
        </View>

    )
    const VerticalLine = ({ colorOn }) => (
        <DashedLine style={{ height: '100%' }} axis='vertical' dashColor={colorOn ? myColors.primaryT : myColors.textL3} dashLength={myHeight(0.6)} dashThickness={myHeight(0.15)} dashGap={myHeight(0.3)} />
    )

    useEffect(() => {
        if (i > 3) {
            setI(0)
        } else {
            setTimeout(() =>
                setI(i + 1)
                , 3000)
        }
    }, [i])

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
            <StatusBar backgroundColor={otpModal ? '#00000030' : myColors.background} />

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
                            }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                        </TouchableOpacity>

                        <Spacer paddingEnd={myWidth(2)} />
                        {/* Name */}
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.bodyBold,
                        }]}>Order Tracking</Text>
                    </View>

                </View>

                <Spacer paddingT={myHeight(2)} />

                {/* Content */}
                <View style={{ paddingHorizontal: myWidth(4), flex: 1 }}>

                    {/* Order ID */}
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body3,
                        fontFamily: myFonts.bodyBold,
                    }]}>Order ID: <Text style={{ color: myColors.textL4 }}>4828ABC</Text></Text>

                    <Spacer paddingT={myHeight(1)} />
                    {/* Estimate Time */}
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body3,
                        fontFamily: myFonts.bodyBold,
                    }]}>Estimated Time: <Text style={{ color: myColors.textL4 }}>30 mins - 3:40pm</Text></Text>

                    <Spacer paddingT={myHeight(4)} />

                    {/* Order Confirm */}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ height: myHeight(10), alignItems: 'center', overflow: 'hidden' }}>
                            <Image style={{
                                height: myHeight(6),
                                width: myHeight(6),
                                resizeMode: 'contain',
                                // tintColor: myColors.text
                            }} source={require('../../../assets/home_main/dashboards/tracking/clock.png')} />
                            <VerticalLine colorOn={i >= 0} />

                        </View>
                        <Spacer paddingEnd={myWidth(4)}
                        />
                        {/* Text */}
                        <TwoLine line1={'Order Confirmed'} line2={'Feb 23, 2023 - 2:35pm'} colorOn={i >= 0} />
                    </View>

                    {/* Order in Progress*/}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: myHeight(6), height: myHeight(10), alignItems: 'center', overflow: 'hidden' }}>
                            <Image style={{
                                height: myHeight(5.3),
                                width: myHeight(5.3),
                                resizeMode: 'contain',
                            }} source={i >= 1 ?
                                require('../../../assets/home_main/dashboards/tracking/foodF.png') :
                                require('../../../assets/home_main/dashboards/tracking/food.png')

                            } />
                            <VerticalLine colorOn={i >= 1} />
                        </View>
                        <Spacer paddingEnd={myWidth(4)}
                        />
                        {/* Text */}
                        <TwoLine line1={'Order in Progress'} line2={'Feb 23, 2023 - 2:35pm'} colorOn={i >= 1} />
                    </View>

                    {/* Driver Picking Up*/}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: myHeight(6), height: myHeight(10), alignItems: 'center', overflow: 'hidden' }}>
                            <Image style={{
                                height: myHeight(5.3),
                                width: myHeight(5.3),
                                resizeMode: 'contain',
                                marginTop: myHeight(0.2)
                            }} source={i >= 2 ?
                                require('../../../assets/home_main/dashboards/tracking/deliveryF.png') :
                                require('../../../assets/home_main/dashboards/tracking/delivery.png')

                            } />
                            <VerticalLine colorOn={i >= 2} />
                        </View>
                        <Spacer paddingEnd={myWidth(4)}
                        />
                        {/* Text */}
                        <TwoLine line1={'Driver Picking Up'} line2={'Feb 23, 2023 - 2:35pm'} colorOn={i >= 2} />
                    </View>

                    {/*Order Delivered*/}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: myHeight(6), height: myHeight(10), alignItems: 'center', overflow: 'hidden' }}>
                            <Image style={{
                                height: myHeight(5.5),
                                width: myHeight(5.5),
                                resizeMode: 'contain',
                            }} source={i >= 3 ?
                                require('../../../assets/home_main/dashboards/tracking/checkF.png') :
                                require('../../../assets/home_main/dashboards/tracking/check.png')

                            } />
                        </View>
                        <Spacer paddingEnd={myWidth(4)}
                        />
                        {/* Text */}
                        <TwoLine line1={'Order Delivered'} line2={'Feb 23, 2023 - 2:35pm'} colorOn={i >= 3} />
                    </View>

                    {/* Buttons */}
                    <View style={{ alignItems: 'center' }}>
                        {/* Otp button */}
                        {/* <TouchableOpacity activeOpacity={0.8} onPress={() => setOtpModal(true)}
                            style={{
                                paddingVertical: myHeight(0.5), width: myWidth(43), alignItems: 'center',
                                borderWidth: myHeight(0.16), borderColor: myColors.primaryT,
                                borderRadius: myWidth(2)
                            }}>
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.body3,
                                fontFamily: myFonts.body,
                                color: myColors.primaryT
                            }]}>OTP: 1234</Text>
                        </TouchableOpacity> */}
                        {/* Dosra button */}
                        {/* <TouchableOpacity activeOpacity={0.92} onPress={() => setOtpModal(true)}
                            style={{
                                paddingVertical: myHeight(0.5), width: myWidth(43), alignItems: 'center',
                                borderWidth: myHeight(0.16), borderColor: myColors.primaryT,
                                borderRadius: myWidth(2), backgroundColor: myColors.primaryT
                            }}>
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.body3,
                                fontFamily: myFonts.body,
                                color: myColors.background
                            }]}>View Order</Text>
                        </TouchableOpacity> */}
                    </View>

                </View>
                <TouchableOpacity activeOpacity={0.9} onPress={() => setOrderModal(true)}
                    style={{
                        backgroundColor: myColors.primaryT,
                        borderRadius: myHeight(0.8),
                        paddingVertical: myHeight(1.1),
                        marginVertical: myHeight(3),
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: myWidth(4)

                    }}>
                    <Text style={[
                        styles.textCommon,
                        {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.heading,
                            color: myColors.background,
                        }
                    ]}>View Order</Text>
                </TouchableOpacity>

            </SafeAreaView>

            {
                otpModal &&
                {/* <TouchableOpacity activeOpacity={0.85} onPress={() => setOtpModal(false)} style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    backgroundColor: '#00000030',

                }}>

                    <View style={{ flex: 1 }} />
                    <Animated.View
                        entering={SlideInDown.duration(200)}
                        style={{
                            paddingHorizontal: myWidth(4.5),
                            backgroundColor: myColors.background,
                            borderTopStartRadius: myWidth(6),
                            borderTopEndRadius: myWidth(6),
                        }}>

                        <Spacer paddingT={myHeight(3)} />
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.bodyBold,
                            textAlign: 'center',
                        }]}>Confirming your delivery with your PIN</Text>

                        <Spacer paddingT={myHeight(2)} />
                        <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />

                        <Spacer paddingT={myHeight(2)} />
                        <View>
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.bodyBold,
                            }]}>Collect your order</Text>
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.body,
                                fontFamily: myFonts.bodyBold,
                                color: myColors.textL2
                            }]}>Check to see if you got all items and share your PIN with the driver.</Text>


                            <Spacer paddingT={myHeight(2)} />
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.bodyBold,
                            }]}>Say OTP PIN</Text>
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.body,
                                fontFamily: myFonts.bodyBold,
                                color: myColors.textL2
                            }]}>Driver will ask you for the PIN to confirm delivery.</Text>


                            <Spacer paddingT={myHeight(2)} />
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.bodyBold,
                            }]}>Done!</Text>
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.body,
                                fontFamily: myFonts.bodyBold,
                                color: myColors.textL2
                            }]}>The PIN will will reset for every delivery.</Text>
                        </View>

                        <TouchableOpacity activeOpacity={0.9} onPress={() => setOtpModal(false)}
                            style={{
                                backgroundColor: myColors.primaryT,
                                borderRadius: myHeight(0.8),
                                paddingVertical: myHeight(1.1),
                                marginVertical: myHeight(3),
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
                            ]}>Great, got it</Text>
                        </TouchableOpacity>

                    </Animated.View>
                </TouchableOpacity> */}


            }

            {
                orderModal &&
                <TouchableOpacity activeOpacity={0.85} onPress={() => setOrderModal(false)} style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    backgroundColor: '#00000030',

                }}>

                    <View style={{ flex: 1 }} />
                    <Animated.View
                        entering={SlideInDown.duration(200)}
                        style={{
                            paddingHorizontal: myWidth(4.5),
                            backgroundColor: myColors.background,
                            borderTopStartRadius: myWidth(6),
                            borderTopEndRadius: myWidth(6),
                        }}>

                        <Spacer paddingT={myHeight(3)} />
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.bodyBold,
                        }]}>View Order Details</Text>

                        <Spacer paddingT={myHeight(1.5)} />
                        {/* Name */}
                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.medium0,
                                fontFamily: myFonts.heading,
                            }
                        ]}>Burger King</Text>

                        <Spacer paddingT={myHeight(1.5)} />
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
                                fontSize: myFontSize.body3,
                                fontFamily: myFonts.heading,
                            }]}>Subtotal</Text>
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.body3,
                                fontFamily: myFonts.heading,
                            }]}>CA $29.99</Text>
                        </View>



                        {/* OK Buttonr */}
                        <TouchableOpacity activeOpacity={0.9} onPress={() => setOrderModal(false)}
                            style={{
                                backgroundColor: myColors.primaryT,
                                borderRadius: myHeight(0.8),
                                paddingVertical: myHeight(1.1),
                                marginVertical: myHeight(3),
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
                            ]}>OK</Text>
                        </TouchableOpacity>

                    </Animated.View>
                </TouchableOpacity>


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
