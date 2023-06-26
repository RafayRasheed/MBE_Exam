import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../../../../common';
import { myColors } from '../../../../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../../../../ultils/myFonts';
import Animated, { FadeIn, SlideInDown, SlideOutDown } from 'react-native-reanimated';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Collapsible from 'react-native-collapsible';
import { Schedule } from './rest_cart_component/schedule';
const items = [
    {
        name: 'Big Mac 1',
        add: '590 Cals',
        num: '4',
        price: 'CAD $12.99',
        image: require('../../../../assets/home_main/daily_special/dailyS2.jpg')
    },
    {
        name: 'Chicken Patty',
        add: '590 Cals',
        num: '3',
        price: 'CAD $10.99',
        image: require('../../../../assets/home_main/daily_special/dailyS2.jpg')
    },
]


// Component Circle Number
const PricingRow = ({ title, value, fontSize, fontFamily, color = myColors.text }) => (
    <View style={{
        alignItems: 'center', flexDirection: 'row',
        justifyContent: 'space-between',
    }}>
        <Text numberOfLines={1} style={[styles.textCommon, {
            fontSize,
            fontFamily,
            color
        }]}>{title}</Text>
        <Text numberOfLines={1} style={[styles.textCommon, {
            fontSize,
            fontFamily,
            color
        }]}>{value}</Text>
    </View>
)
export const ResturantCart = ({ navigation }) => {
    const [onDelivery, setOnDelivery] = useState(true)
    const [promoModal, setPromoModal] = useState(false)
    const [promoCode, setPromoCode] = useState(null)
    const [promoCodeUpdate, setPromoCodeUpdate] = useState(null)
    const [instruction, setInstruction] = useState(null)
    const [instructionUpdate, setInstructionUpdate] = useState(null)
    const [showNote, setShowNote] = useState(false)



    function onCheckout() {
        navigation.navigate('ResturantCheckout', { promoSet: promoCodeUpdate })
    }
    function onActivateCode() {
        setPromoModal(false)
        setPromoCodeUpdate(promoCode)
    }
    function onAddInstruction() {
        setShowNote(false)
        setInstructionUpdate(instruction)
    }

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
                        }]}>My Cart From McDonalds - King St</Text>
                    </View>
                </View>

                {/* Content */}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: myWidth(4) }}>


                    <Spacer paddingT={myHeight(1)} />
                    {/* Pick-up & Delivery */}
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

                    <Spacer paddingT={myHeight(1.5)} />
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body2,
                        fontFamily: myFonts.bodyBold,
                    }]}>Items</Text>

                    {/* All Items  */}
                    {
                        items.map((item, i) =>

                            <View key={i} style={{ flexDirection: 'row', alignSelf: 'flex-start', paddingTop: myHeight(2) }}>
                                <Image style={{
                                    height: myHeight(6.4),
                                    width: myHeight(6.4),
                                    borderRadius: myWidth(1.5),
                                    overflow: 'hidden',
                                    resizeMode: 'cover',
                                    marginTop: myHeight(0.5)
                                }} source={item.image} />
                                <Spacer paddingEnd={myWidth(2)} />

                                {/* Name & Price */}
                                <View style={{ flex: 1 }}>
                                    <Text numberOfLines={1} style={[styles.textCommon, {
                                        fontSize: myFontSize.body3,
                                        fontFamily: myFonts.body,

                                    }]}>{item.name}</Text>

                                    <Spacer paddingT={myHeight(0.2)} />
                                    <Text numberOfLines={1} style={[styles.textCommon, {
                                        fontSize: myFontSize.body3,
                                        fontFamily: myFonts.body,
                                        color: myColors.textL4
                                    }]}>{item.add}</Text>

                                    <Spacer paddingT={myHeight(0.2)} />
                                    <Text numberOfLines={1} style={[styles.textCommon, {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.body,
                                    }]}>{item.price}</Text>
                                </View>

                                {/* Plus Minus */}
                                <View style={{
                                    flexDirection: 'row', alignItems: 'center',
                                    alignSelf: 'flex-start', marginTop: -myHeight(0)
                                }}>
                                    {/* minus */}
                                    <TouchableOpacity activeOpacity={0.75} onPress={() => null}>
                                        <Image style={{
                                            height: myHeight(3.4),
                                            width: myHeight(3.4),
                                            resizeMode: 'contain',
                                            marginTop: myHeight(0.6)

                                        }} source={require('../../../../assets/home_main/dashboards/minusBtn.png')} />
                                    </TouchableOpacity>

                                    <Spacer paddingEnd={myWidth(2.5)} />
                                    {/* count */}
                                    <Text numberOfLines={1} style={[styles.textCommon, {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.body,
                                    }]}>3</Text>

                                    <Spacer paddingEnd={myWidth(2.5)} />
                                    {/* plus */}
                                    <TouchableOpacity activeOpacity={0.75} onPress={() => null}>
                                        <Image style={{
                                            height: myHeight(3.4),
                                            width: myHeight(3.4),
                                            marginTop: myHeight(0.6),
                                            resizeMode: 'contain',
                                        }} source={require('../../../../assets/home_main/dashboards/plusBtn.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }

                    <Spacer paddingT={myHeight(1.5)} />
                    {/* Divider */}
                    <View style={{ borderTopWidth: myHeight(0.15), borderColor: myColors.dot, }} />
                    <Spacer paddingT={myHeight(1.5)} />

                    {/* plus && add note & go */}
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }}
                        activeOpacity={0.8} onPress={() => setShowNote(!showNote)}>
                        <Spacer paddingEnd={myHeight(0.2)} />

                        <Image style={{
                            height: myHeight(2.1),
                            width: myHeight(2.1),
                            resizeMode: 'contain',
                        }} source={require('../../../../assets/home_main/dashboards/plus2.png')} />

                        <Spacer paddingEnd={myWidth(2) + myHeight(0.2)} />
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            flex: 1,
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.body,
                        }]}>{instructionUpdate ? instructionUpdate : 'Add a note for your order'}</Text>

                        {/* Go */}
                        <View style={{
                            padding: myWidth(1), transform: [{ rotate: showNote ? '270deg' : '90deg' }]
                        }}
                        >
                            <Image style={{
                                height: myHeight(1.8),
                                width: myHeight(1.8),
                                resizeMode: 'contain',
                                tintColor: myColors.primaryT,
                            }} source={require('../../../../assets/home_main/go.png')} />
                        </View>

                    </TouchableOpacity>
                    <Collapsible collapsed={!showNote}>
                        <Spacer paddingT={myHeight(1.5)} />
                        <TextInput placeholder="Write your instructions"
                            multiline={true}
                            autoCorrect={false}
                            numberOfLines={2}
                            placeholderTextColor={myColors.offColor}
                            selectionColor={myColors.primary}
                            cursorColor={myColors.primaryT}
                            value={instruction} onChangeText={setInstruction}
                            style={{
                                height: myHeight(12),
                                textAlignVertical: 'top',
                                borderRadius: myWidth(2),
                                width: '100%',
                                paddingBottom: ios ? myHeight(1.2) : myHeight(100) > 600 ? myHeight(0.8) : myHeight(0.1),
                                paddingTop: ios ? myHeight(1.2) : myHeight(100) > 600 ? myHeight(0.8) : myHeight(0.1),
                                fontSize: myFontSize.body,
                                color: myColors.text,
                                includeFontPadding: false,
                                fontFamily: myFonts.body,
                                paddingHorizontal: myWidth(3),
                                backgroundColor: '#F1F1F1'
                            }}
                        />

                        {/* <View style={{ flexDirection: "row", alignSelf: 'flex-end' }}>
                            <TouchableOpacity activeOpacity={0.9} onPress={() => {
                                setInstructionUpdate(instruction)
                                setShowNote(false)
                            }}>
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.heading,
                                        color: myColors.primaryT,
                                        paddingEnd: myWidth(3)
                                    }
                                ]}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.9} onPress={() => {
                                setInstructionUpdate(instruction)
                                setShowNote(false)
                            }}>
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.heading,
                                        color: myColors.primaryT,
                                    }
                                ]}>Add</Text>
                            </TouchableOpacity>

                        </View> */}

                        {/* Go to Checkout */}
                        <TouchableOpacity activeOpacity={0.9} onPress={onAddInstruction}
                            style={{
                                backgroundColor: myColors.primaryT,
                                borderRadius: myHeight(0.8),
                                paddingVertical: myHeight(1),
                                marginVertical: myHeight(1.5),
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
                            ]}>{instructionUpdate ? 'Update' : 'ADD'}</Text>
                        </TouchableOpacity>
                    </Collapsible>


                    <Spacer paddingT={myHeight(1)} />
                    {/* promo && add promo  */}
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }}
                        activeOpacity={0.8} onPress={() => setPromoModal(true)}>
                        <Image style={{
                            height: myHeight(2.5),
                            width: myHeight(2.5),
                            resizeMode: 'contain',
                        }} source={require('../../../../assets/home_main/dashboards/promo.png')} />

                        <Spacer paddingEnd={myWidth(2)} />
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            flex: 1,
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.body,
                        }]}>{promoCodeUpdate ? promoCodeUpdate : 'Add a promo'}</Text>

                    </TouchableOpacity>

                    <Spacer paddingT={myHeight(1.5)} />
                    {/* Divider */}
                    <View style={{ borderTopWidth: myHeight(0.15), borderColor: myColors.dot, }} />
                    <Spacer paddingT={myHeight(1.5)} />

                    {/* Pricing */}
                    <View>

                        {/* no on items */}
                        <PricingRow title={'items'} value={'4'} fontFamily={myFonts.body} fontSize={myFontSize.body2} />

                        <Spacer paddingT={myHeight(2)} />
                        {/* Subtotal  */}
                        <PricingRow title={'Subtotal'} value={'CAD $18.98'} fontFamily={myFonts.bodyBold} fontSize={myFontSize.xBody} />

                        <Spacer paddingT={myHeight(1.5)} />
                        {/* Delivery Fees */}
                        <PricingRow title={' Delivery Fees'} value={'CAD $0.99'} fontFamily={myFonts.body} fontSize={myFontSize.small3} />

                        <Spacer paddingT={myHeight(1)} />
                        {/* Delivery Fees */}
                        <PricingRow title={' Fees & Estimated Tax'} value={'CAD $2.46'} fontFamily={myFonts.body} fontSize={myFontSize.small3} />

                        <Spacer paddingT={myHeight(2)} />
                        {/* Divider */}
                        <View style={{ borderTopWidth: myHeight(0.15), borderColor: myColors.dot, }} />

                        <Spacer paddingT={myHeight(1.5)} />
                        {/* Total */}
                        <PricingRow title={'Total'} value={'CAD $21.44'} fontFamily={myFonts.heading} fontSize={myFontSize.xBody} color={myColors.primaryT} />
                    </View>

                    <Spacer paddingT={myHeight(1)} />
                    {/* Go to Checkout */}
                    <TouchableOpacity activeOpacity={0.9} onPress={onCheckout}
                        style={{
                            backgroundColor: myColors.primaryT,
                            borderRadius: myHeight(0.8),
                            paddingVertical: myHeight(1.1),
                            marginVertical: myHeight(1.5),
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
                        ]}>Go to Checkout</Text>
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
