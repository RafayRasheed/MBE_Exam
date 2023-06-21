import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar } from 'react-native';
import { myColors } from '../../../../ultils/myColors';
import { Spacer, ios, myHeight, myWidth } from '../../../common';
import { myFonts, myLetSpacing, myFontSize } from '../../../../ultils/myFonts';
import Animated, { FadeIn, SlideInDown, SlideInUp, SlideOutDown, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
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
    const [showInputInstruction, setShowInputInstruction] = useState(false)
    const [paymentClose, setPaymentClose] = useState(true)
    const [pricingClose, setPricingClose] = useState(false)
    const [useWallet, setUseWallet] = useState(false)
    const [instructionText, setInstructionText] = useState(null)


    //For Toggle
    const w = myWidth(10) - myHeight(1.8)
    const offset = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value * w }],
        };
    });
    const onPressToggle = () => {
        if (!useWallet) {
            offset.value = withTiming(1, {
                duration: 200,
            });
            setTimeout(() =>
                setUseWallet(true)
                , 50)

        } else {
            offset.value = withTiming(0, {
                duration: 200,
            });
            setUseWallet(false)


        }
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background }}>

            {/* Top Content */}
            <View>
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

                <Spacer paddingT={myHeight(1)} />

            </View>

            {/* All Cards */}
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}
            >
                <View style={{ paddingHorizontal: myWidth(4), }}>
                    <Spacer paddingT={myHeight(3)} />

                    {/* Delivery  Card*/}
                    <View style={{
                        backgroundColor: myColors.background,
                        elevation: 3.5,
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
                        <Spacer paddingT={myHeight(1.5)} />

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
                                saveLocations.map((place, i) =>
                                    <TouchableOpacity key={i} activeOpacity={0.8} onPress={() => null}>
                                        <Text style={[styles.textCommon, {
                                            fontSize: myFontSize.body2,
                                            fontFamily: myFonts.body,
                                            paddingVertical: myHeight(0.3)
                                        }]}>{place.name}</Text>
                                    </TouchableOpacity>)
                            }
                            <Spacer paddingT={myHeight(2)} />
                            {/* Add Instruction && Input & Button */}
                            {
                                !showInputInstruction ?
                                    <TouchableOpacity style={{}} activeOpacity={0.8} onPress={() => setShowInputInstruction(true)} >
                                        <Text style={[styles.textCommon, {
                                            fontSize: myFontSize.body,
                                            fontFamily: myFonts.bodyBold,
                                            color: myColors.primaryT,
                                        }]}><Text style={{ fontSize: myFontSize.body3 }}>+</Text> Add  delivery instruction for your rider</Text>
                                    </TouchableOpacity>
                                    :
                                    <Animated.View
                                        entering={FadeIn.duration(400)}
                                    >
                                        <View style={{

                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            borderRadius: myHeight(0.8),
                                            paddingHorizontal: myWidth(2.5),
                                            borderWidth: myHeight(0.09),
                                            borderColor: myColors.primaryT,
                                            backgroundColor: myColors.background,

                                        }}>

                                            <TextInput placeholder="Add Instruction here..."
                                                placeholderTextColor={myColors.offColor}
                                                selectionColor={myColors.primaryT}
                                                cursorColor={myColors.primaryT}
                                                value={instructionText} onChangeText={setInstructionText}
                                                style={{
                                                    flex: 1,
                                                    textAlignVertical: 'center',
                                                    paddingVertical: ios ? myHeight(0.8) : myHeight(100) > 600 ? myHeight(0.6) : myHeight(0),
                                                    fontSize: myFontSize.body,
                                                    color: myColors.text,
                                                    includeFontPadding: false,
                                                    fontFamily: myFonts.body,
                                                }}
                                            />
                                        </View>
                                        <Spacer paddingT={myHeight(0.6)} />

                                        <Text style={[styles.textCommon, {
                                            fontSize: myFontSize.body,
                                            fontFamily: myFonts.body,
                                            textAlign: 'right',
                                            color: myColors.textL4
                                        }]}>0/300</Text>
                                        <Spacer paddingT={myHeight(1.8)} />

                                        {/* Update button */}
                                        <TouchableOpacity activeOpacity={0.8} onPress={null}
                                            style={{
                                                backgroundColor: myColors.primaryT,
                                                borderRadius: myHeight(0.8),
                                                paddingVertical: myHeight(1),
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
                                            ]}>Update</Text>
                                        </TouchableOpacity>
                                    </Animated.View>

                            }
                            <Spacer paddingT={myHeight(2)} />

                        </Collapsible>

                    </View>

                    <Spacer paddingT={myHeight(2)} />

                    {/* Payment Card*/}
                    <View style={{
                        backgroundColor: myColors.background,
                        elevation: 3.5,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 2,
                        paddingHorizontal: myWidth(3.5),
                        borderWidth: myHeight(0.1),
                        borderColor: myColors.dot
                    }}>
                        <Spacer paddingT={myHeight(1)} />
                        {/* payment Method & go */}
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image style={{
                                height: myHeight(2.5),
                                width: myHeight(2.5),
                                resizeMode: 'contain',
                                tintColor: myColors.primaryT,
                            }} source={require('../../../assets/home_main/dashboards/wallet.png')} />

                            <Spacer paddingEnd={myWidth(2)} />
                            <Text numberOfLines={1} style={[styles.textCommon, {
                                flex: 1,
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.bodyBold,
                            }]}>Payment method</Text>

                            {/* Go */}
                            <TouchableOpacity style={{
                                padding: myWidth(1), transform: [{ rotate: paymentClose ? '90deg' : '270deg' }]
                            }}
                                activeOpacity={0.8} onPress={() => setPaymentClose(!paymentClose)}>
                                <Image style={{
                                    height: myHeight(1.8),
                                    width: myHeight(1.8),
                                    resizeMode: 'contain',
                                    tintColor: myColors.primaryT,
                                }} source={require('../../../assets/home_main/go.png')} />
                            </TouchableOpacity>
                        </View>


                        <Spacer paddingT={myHeight(1.5)} />
                        {/* Cash  & Price */}
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image style={{
                                height: myHeight(2.5),
                                width: myHeight(2.5),
                                resizeMode: 'contain',
                                tintColor: myColors.primaryT,
                            }} source={require('../../../assets/home_main/dashboards/cash2.png')} />

                            <Spacer paddingEnd={myWidth(2)} />
                            <Text numberOfLines={1} style={[styles.textCommon, {
                                flex: 1,
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.bodyBold,
                            }]}>Cash</Text>

                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.heading,
                                }
                            ]}>Rs. 1,563.91</Text>
                        </View>
                        <Spacer paddingT={myHeight(1)} />

                        <Collapsible collapsed={paymentClose}>
                            <Spacer paddingT={myHeight(1)} />

                            {/* wallet  & Toggle */}
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Image style={{
                                    height: myHeight(2.5),
                                    width: myHeight(2.5),
                                    resizeMode: 'contain',
                                    tintColor: myColors.primaryT,
                                }} source={require('../../../assets/home_main/dashboards/walletFill.png')} />

                                <Spacer paddingEnd={myWidth(2)} />
                                <Text numberOfLines={1} style={[styles.textCommon, {
                                    flex: 1,
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.bodyBold,
                                }]}>Wallet</Text>

                                {/* Go */}
                                <TouchableOpacity style={{

                                }}
                                    activeOpacity={0.8} onPress={onPressToggle}>
                                    <Animated.View style={{
                                        width: myWidth(12),
                                        height: myHeight(2.3),
                                        backgroundColor: useWallet ? myColors.primaryT : myColors.offColor7,
                                        borderRadius: myHeight(2),
                                        justifyContent: 'center',
                                        paddingHorizontal: myWidth(1),
                                    }} >

                                        <Animated.View style={[{
                                            height: myHeight(1.8),
                                            width: myHeight(1.8),
                                            backgroundColor: myColors.background,
                                            borderRadius: myHeight(2),
                                            borderWidth: myHeight(0.06),

                                        }, animatedStyles]} />
                                    </Animated.View>
                                </TouchableOpacity>
                            </View>
                            <Spacer paddingT={myHeight(1.5)} />

                        </Collapsible>

                    </View>

                    <Spacer paddingT={myHeight(2.3)} />

                    {/* Pricing Card*/}
                    <View style={{
                        backgroundColor: myColors.background,
                        elevation: 3.5,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 2,
                        paddingHorizontal: myWidth(3.5),
                        borderWidth: myHeight(0.1),
                        borderColor: myColors.dot
                    }}>

                        <Spacer paddingT={myHeight(1)} />
                        {/*Order Summary & go */}
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image style={{
                                height: myHeight(2.5),
                                width: myHeight(2.5),
                                resizeMode: 'contain',
                                tintColor: myColors.primaryT,
                            }} source={require('../../../assets/home_main/dashboards/doc.png')} />

                            <Spacer paddingEnd={myWidth(2)} />
                            <Text numberOfLines={1} style={[styles.textCommon, {
                                flex: 1,
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.bodyBold,
                            }]}>Order Summary</Text>

                            {/* Go */}
                            <TouchableOpacity style={{
                                padding: myWidth(1), transform: [{ rotate: pricingClose ? '90deg' : '270deg' }]
                            }}
                                activeOpacity={0.8} onPress={() => setPricingClose(pricingClose)}>
                                <Image style={{
                                    height: myHeight(1.8),
                                    width: myHeight(1.8),
                                    resizeMode: 'contain',
                                    tintColor: myColors.primaryT,
                                }} source={require('../../../assets/home_main/go.png')} />
                            </TouchableOpacity>
                        </View>


                        <Spacer paddingT={myHeight(1.5)} />
                        {/* Cash  & Price */}
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>

                            <Text numberOfLines={1} style={[styles.textCommon, {
                                flex: 1,
                                fontSize: myFontSize.xxSmall,
                                fontFamily: myFonts.bodyBold,
                            }]}>{item.name}</Text>

                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.bodyBold,
                                }
                            ]}>Rs. 990</Text>
                        </View>
                        {/* <PricingRow title={item.name} value={'Rs. 1,300'} fontSize={myFontSize.xxSmall} fontFamily={myFonts.heading} /> */}
                        <Spacer paddingT={myHeight(1)} />



                        <Collapsible collapsed={pricingClose}>
                            {/* Divider */}
                            <View style={{ width: '100%', height: myHeight(0.13), backgroundColor: myColors.text3 }} />
                            <Spacer paddingT={myHeight(1)} />

                            <PricingRow title={'Subtotal'} value={'Rs. 480'} fontSize={myFontSize.xxSmall} fontFamily={myFonts.bodyBold} />
                            <Spacer paddingT={myHeight(0.65)} />
                            <PricingRow title={'Delivery Fee'} value={'Rs. 80'} fontSize={myFontSize.xxSmall} fontFamily={myFonts.bodyBold} />
                            <Spacer paddingT={myHeight(0.65)} />
                            <PricingRow title={'GST (13%)'} value={'Rs. 63'} fontSize={myFontSize.xxSmall} fontFamily={myFonts.bodyBold} />


                            <Spacer paddingT={myHeight(1)} />

                        </Collapsible>

                    </View>

                    <Spacer paddingT={myHeight(1)} />


                </View>
            </ScrollView>

            {/* Confirm button */}
            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('DoneOrder')}
                style={{
                    backgroundColor: myColors.primaryT,
                    borderRadius: myHeight(0.8),
                    paddingVertical: myHeight(1.3),
                    marginVertical: myHeight(1.5),
                    marginHorizontal: myWidth(4),
                    alignItems: 'center',
                    justifyContent: 'center',

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
        </SafeAreaView>

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
