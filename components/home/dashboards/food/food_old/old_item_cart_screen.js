import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar } from 'react-native';
import { myColors } from '../../../../../ultils/myColors';
import { Spacer, ios, myHeight, myWidth } from '../../../../common';
import { myFonts, myLetSpacing, myFontSize } from '../../../../../ultils/myFonts';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CalenderDate } from '../../ride/ride_component/calender';

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


export const ItemCartScreen = ({ navigation, route }) => {
    const { item } = route.params
    const [promoModal, setPromoModal] = useState(true)
    const [promoCode, setPromoCode] = useState(null)
    const [dateTimeModal, setDateTimeModal] = useState(false)
    const [showCalenderModal, setShowCalenderModal] = useState(false)
    const [i, setI] = useState(0)
    const [deliveryDate, setDeliveryDate] = useState(null)
    const [PickUpDate, setPickUpDate] = useState(null)
    const [deliveryTime, setDeliveryTime] = useState(null)
    const [PickUpTime, setPickUpTime] = useState(null)

    function onActivateCode() {

    }

    function onUpdateDateTime() {
        if (i == 0) {
            //for deleivery
        }
        else {
            //for pick up
        }
    }
    function formatTime(date) {
        const t = formT(date)
        if (i == 0) {

            setDeliveryTime(t)
        } else {

            setPickUpTime(t)
        }
    }
    function formatDate(date) {
        const t = formD(date)
        if (i == 0) {

            setDeliveryDate(t)
        }
        else {
            setPickUpDate(t)
        }
    }
    function formD(date) {
        a = date.toDateString().split(' ')
        const t = `${a[0]}, ${a[2]} ${a[1]} ${a[3]}`
        return t
    }

    function formT(date) {
        const a = date.toLocaleTimeString().split(' ')
        const b = a[0].split(':')

        return `${b[0]}:${b[1]} ${a[1]}`
    }



    useEffect(() => {
        if (dateTimeModal && !deliveryDate && !deliveryTime && !PickUpDate && !PickUpTime) {

            const date = formD(new Date())
            const time = formT(new Date())

            setDeliveryTime(time)
            setPickUpTime(time)

            setDeliveryDate(date)
            setPickUpDate(date)


            formatDate(new Date())
        }
    }, [dateTimeModal])

    // formatTime(new Date())
    //         formatDate(new Date())

    return (
        <>
            <StatusBar backgroundColor={promoModal || dateTimeModal ? '#00000050' : myColors.background} />

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
                        }]}>Cart</Text>
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
                    <Number_text name={'Checkout'} number={3} fill={false} />
                </View>


                <Spacer paddingT={myHeight(3.2)} />
                {/* Card Deleviry*/}
                <View style={{
                    marginHorizontal: myWidth(4), backgroundColor: myColors.primary,
                    borderWidth: myHeight(0.08), borderRadius: myWidth(2), flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Image style={{
                        height: myHeight(12),
                        width: myHeight(12),
                        resizeMode: 'contain',
                    }} source={require('../../../assets/home_main/dashboards/deleveryPlan.png')} />

                    <Spacer paddingEnd={myWidth(3.5)} />
                    <View>
                        {/* Estimated delivery */}
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            fontSize: myFontSize.xxSmall,
                            fontFamily: myFonts.bodyBold,
                            color: myColors.textL5,
                        }]}>Estimated delivery</Text>
                        <Spacer paddingT={myHeight(0.5)} />
                        {/* Now Time */}
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            fontSize: myFontSize.body3,
                            fontFamily: myFonts.heading,
                            color: myColors.textL5,
                        }]}>NOW (30 MIN)</Text>
                        {/* Change Time */}
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setDateTimeModal(true)}>
                            <Text numberOfLines={1} style={[styles.textCommon, {
                                fontSize: myFontSize.xxSmall,
                                fontFamily: myFonts.heading,
                                textDecorationLine: 'underline',
                                color: '#F24E1E',
                            }]}>Change</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <Spacer paddingT={myHeight(2.2)} />
                {/* Plus/Minus & Item Details */}
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: myWidth(4), }}>
                    {/* Plus Minus */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* minus */}
                        <TouchableOpacity activeOpacity={0.75} onPress={() => null}>
                            <Image style={{
                                height: myHeight(3.2),
                                width: myHeight(3.2),
                                resizeMode: 'contain',
                                marginTop: myHeight(0.6)

                            }} source={require('../../../assets/home_main/dashboards/minusBtn.png')} />
                        </TouchableOpacity>

                        <Spacer paddingEnd={myWidth(2.5)} />
                        {/* count */}
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.bodyBold,
                        }]}>3</Text>

                        <Spacer paddingEnd={myWidth(2.5)} />
                        {/* plus */}
                        <TouchableOpacity activeOpacity={0.75} onPress={() => null}>
                            <Image style={{
                                height: myHeight(3.2),
                                width: myHeight(3.2),
                                marginTop: myHeight(0.6),
                                resizeMode: 'contain',
                            }} source={require('../../../assets/home_main/dashboards/plusBtn.png')} />
                        </TouchableOpacity>
                    </View>

                    <Spacer paddingEnd={myWidth(3)} />
                    {/* Item Details */}
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{
                            height: myHeight(6.5),
                            width: myHeight(6.5),
                            resizeMode: 'contain',
                            marginTop: myHeight(0.6),
                            borderRadius: myWidth(1.2)
                        }} source={item.image} />
                        <Spacer paddingEnd={myWidth(1.8)} />

                        {/* name */}
                        <Text numberOfLines={2} style={[styles.textCommon, {
                            flex: 1,
                            fontSize: myFontSize.small3,
                            fontFamily: myFonts.bodyBold,
                        }]}>{item.name}</Text>
                        <Spacer paddingEnd={myWidth(1.5)} />
                        {/* price */}
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            fontSize: myFontSize.small3,
                            fontFamily: myFonts.bodyBold,
                        }]}>Rs. 1,300.00</Text>
                    </View>
                </View>

                <Spacer paddingT={myHeight(2.3)} />
                {/* Pricing  & Promo modal*/}
                <View style={{
                    flex: 1,
                    paddingHorizontal: myWidth(4),
                }}>
                    <PricingRow title={'Subtotal'} value={'Rs. 1,300.00'} fontSize={myFontSize.xxSmall} fontFamily={myFonts.heading} />
                    <Spacer paddingT={myHeight(1)} />
                    <PricingRow title={'Delivery Fee'} value={'Rs. 79.00'} fontSize={myFontSize.xxSmall} fontFamily={myFonts.body} />
                    <Spacer paddingT={myHeight(0.5)} />
                    <PricingRow title={'GST (13%)'} value={'Rs. 63'} fontSize={myFontSize.xxSmall} fontFamily={myFonts.body} />

                    <Spacer paddingT={myHeight(2)} />
                    {/* Promo Icon & text*/}
                    <TouchableOpacity activeOpacity={0.85} style={{
                        flexDirection: 'row', alignItems: 'center',
                    }}
                        onPress={() => setPromoModal(true)}>
                        <Image style={{
                            height: myHeight(4.3),
                            width: myHeight(4.3),
                            resizeMode: 'contain',

                        }} source={require('../../../assets/home_main/dashboards/promoIc.png')} />
                        <Spacer paddingEnd={myWidth(2)} />
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            fontSize: myFontSize.xSmall,
                            fontFamily: myFonts.heading,
                            color: myColors.primaryT,
                        }]}>Apply  Promo Code</Text>
                    </TouchableOpacity>
                    <Spacer paddingT={myHeight(1.7)} />
                    <PricingRow title={'Total'} value={'Rs. 1,563.92'} fontSize={myFontSize.body3} fontFamily={myFonts.heading} />

                    <View style={{ flex: 1 }} />
                    <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('ItemCheckoutScreen', { item: item })}
                        style={{
                            backgroundColor: myColors.primaryT,
                            borderRadius: myHeight(0.8),
                            paddingVertical: myHeight(1.3),
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
                        ]}>Confirm payment and address</Text>
                    </TouchableOpacity>
                    <Spacer paddingT={myHeight(1.5)} />
                </View>

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
                                        fontFamily: myFonts.heading,
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

            {/* Date Time Modal */}
            {
                dateTimeModal &&
                <View style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    backgroundColor: '#00000030',

                }}>
                    <View style={{ flex: 1, backgroundColor: '#00000030' }}

                    >
                        <TouchableOpacity activeOpacity={1}
                            style={{
                                flex: 1, paddingHorizontal: myWidth(4.5),
                            }}
                            onPress={() => setDateTimeModal(false)}
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

                            <Spacer paddingT={myHeight(3)} />

                            {/* DELIVERY & TIME Heading*/}
                            <View style={{
                                flexDirection: 'row',
                                paddingHorizontal: myWidth(5.7),
                                justifyContent: 'space-around',
                                zIndex: 1,
                            }}>
                                {/* Delivery */}
                                <TouchableOpacity activeOpacity={0.7} onPress={() => setI(0)}>
                                    <View style={{ paddingHorizontal: myWidth(2), paddingVertical: myHeight(0.5), alignItems: 'center' }}>
                                        <Text style={[styles.textCommon, {
                                            fontSize: myFontSize.body3,
                                            fontFamily: myFonts.bodyBold,
                                            color: myColors.text, color: i == 0 ? myColors.primaryT : myColors.text
                                        }]}>Delivery</Text>
                                    </View>
                                    {/* Line */}
                                    <View style={[{
                                        backgroundColor: i == 0 ? myColors.primaryT : myColors.line,
                                        borderRadius: myHeight(3),
                                        overflow: i == 0 ? 'visible' : 'hidden',
                                        marginTop: i == 0 ? 0 : myHeight(0.17),
                                        marginBottom: i == 0 ? myHeight(0.17) : 0,
                                        height: i == 0 ? myHeight(0.45) : myHeight(0.2),
                                    }]} />
                                </TouchableOpacity>
                                {/* Pick-up */}
                                <TouchableOpacity activeOpacity={0.7} onPress={() => setI(1)}>
                                    <View style={{ paddingHorizontal: myWidth(2), paddingVertical: myHeight(0.5), alignItems: 'center' }}>
                                        <Text style={[styles.textCommon, {
                                            fontSize: myFontSize.body3,
                                            fontFamily: myFonts.bodyBold,
                                            color: myColors.text, color: i == 1 ? myColors.primaryT : myColors.text
                                        }]}>Pick-up</Text>
                                    </View>
                                    {/* Line */}
                                    <View style={[{
                                        backgroundColor: i == 1 ? myColors.primaryT : myColors.line,
                                        borderRadius: myHeight(3),
                                        overflow: i == 1 ? 'visible' : 'hidden',
                                        marginTop: i == 1 ? 0 : myHeight(0.17),
                                        marginBottom: i == 1 ? myHeight(0.17) : 0,
                                        height: i == 1 ? myHeight(0.45) : myHeight(0.2),
                                    }]} />
                                </TouchableOpacity>
                            </View>

                            {/* LINE */}
                            <View style={{
                                width: '100%', height: myHeight(0.2),
                                backgroundColor: myColors.line,
                                marginTop: -myHeight(0.45),
                                zIndex: 0,
                            }} />

                            <Spacer paddingT={myHeight(3)} />

                            {/* Delivery Date & calender*/}
                            <View>
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.xBody,
                                        fontFamily: myFonts.body,
                                    }
                                ]}>{i == 0 ? 'Delivery date' : 'Pick-up'}</Text>

                                <Spacer paddingT={myHeight(0.4)} />
                                {/* Date & Icon */}
                                <TouchableOpacity style={{
                                    flexDirection: 'row', justifyContent: 'space-between',
                                    alignItems: 'center',
                                }} activeOpacity={0.7} onPress={() => setShowCalenderModal('date')}>
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xBody,
                                            fontFamily: myFonts.bodyBold,
                                        }
                                    ]}>{i == 0 ? deliveryDate : PickUpDate}</Text>
                                    {/* Calender Icon */}
                                    <Image style={{
                                        height: myHeight(3.5),
                                        width: myHeight(3.5),
                                        resizeMode: 'contain',

                                    }} source={require('../../../assets/home_main/dashboards/calender.png')} />

                                </TouchableOpacity>
                            </View>

                            <Spacer paddingT={myHeight(2)} />

                            {/* Est Time  & clock*/}
                            <View>
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.xBody,
                                        fontFamily: myFonts.body,
                                    }
                                ]}>{i == 0 ? 'Est. Delivery Time' : 'Pick-up Time'}</Text>

                                <Spacer paddingT={myHeight(0.4)} />
                                {/* Estimate & Icon */}
                                <TouchableOpacity style={{
                                    flexDirection: 'row', justifyContent: 'space-between',
                                    alignItems: 'center',
                                }} activeOpacity={0.7} onPress={() => setShowCalenderModal('time')}>
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xBody,
                                            fontFamily: myFonts.bodyBold,
                                        }
                                    ]}>{i == 0 ? deliveryTime : PickUpTime}</Text>
                                    {/* clock Icon */}
                                    <Image style={{
                                        height: myHeight(3.5),
                                        width: myHeight(3.5),
                                        resizeMode: 'contain',

                                    }} source={require('../../../assets/home_main/dashboards/clock2.png')} />

                                </TouchableOpacity>
                            </View>

                            <Spacer paddingT={myHeight(5)} />
                            {/* Update Button */}
                            <TouchableOpacity activeOpacity={0.8} onPress={onUpdateDateTime}
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
                                ]}>Update</Text>

                            </TouchableOpacity>
                            <Spacer paddingT={myHeight(4)} />

                        </Animated.View>
                    </View>
                </View>

            }

            {
                showCalenderModal &&
                <CalenderDate show={setShowCalenderModal} time={showCalenderModal == 'time' ? true : null} value={showCalenderModal == 'time' ? formatTime : formatDate} />
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
