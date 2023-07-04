import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../../../../common';
import { myColors } from '../../../../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../../../../ultils/myFonts';
import Animated, { FadeIn, SlideInDown, SlideOutDown, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Collapsible from 'react-native-collapsible';

export const RestaurantPayment = ({ navigation }) => {
    const [isCash, setIsCash] = useState(null)
    const [isCard, setIsCard] = useState(null)



    const w = myWidth(12) - myHeight(2)
    const offset = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value * w }],
        };
    });
    const onPressToggle = () => {
        if (!isCash) {
            offset.value = withTiming(1, {
                duration: 200,
            });
            setTimeout(() =>
                setIsCash(true)
                , 50)

        } else {
            offset.value = withTiming(0, {
                duration: 200,
            });
            setIsCash(null)


        }
    };

    return (
        <>
            {/* <StatusBar backgroundColor={promoModal ? '#00000050' : myColors.background} /> */}

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
                        }]}>Payment Method</Text>
                    </View>

                </View>

                <Spacer paddingT={myHeight(2)} />
                {/* Content */}
                <View style={{ paddingHorizontal: myWidth(4) }}>
                    {/* Cash */}
                    <View>
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.medium2,
                            fontFamily: myFonts.bodyBold,
                        }]}>Payment Options</Text>

                        <Spacer paddingT={myHeight(1)} />
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body3,
                            fontFamily: myFonts.bodyBold,
                        }]}>M-Ride Cash</Text>

                        <Spacer paddingT={myHeight(2)} />

                        {/* M Rie & Toggle Buttom */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* M-RIDE */}
                            <View>
                                <View style={{
                                    borderRadius: myWidth(1),
                                    paddingHorizontal: myWidth(2),
                                    paddingVertical: myHeight(0.3),
                                    backgroundColor: myColors.primaryT
                                }}>
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xSmall,
                                            fontFamily: myFonts.heading,
                                            color: myColors.background,
                                        }
                                    ]}>M-Ride</Text>
                                </View>
                            </View>
                            <Spacer paddingEnd={myWidth(4)} />
                            {/* M-Ride Pay */}
                            <Text style={[
                                styles.textCommon,
                                {
                                    flex: 1,
                                    // marginTop: -myHeight(1),
                                    fontSize: myFontSize.body,
                                    fontFamily: myFonts.bodyBold,
                                }
                            ]}>M-Ride Cash {'\n'}<Text style={{ fontFamily: myFonts.body, }}>CA $0.00</Text></Text>



                            {/* Toggle */}
                            <TouchableOpacity style={{}} activeOpacity={0.9} onPress={onPressToggle} >
                                <Animated.View style={{
                                    width: myWidth(14),
                                    height: myHeight(2.6),
                                    backgroundColor: isCash ? myColors.primaryT : myColors.offColor7,
                                    borderRadius: myHeight(2),
                                    justifyContent: 'center',
                                    paddingHorizontal: myWidth(1),
                                }} >

                                    <Animated.View style={[{
                                        height: myHeight(2),
                                        width: myHeight(2),
                                        backgroundColor: myColors.background,
                                        borderRadius: myHeight(2),
                                        borderWidth: myHeight(0.06),

                                    }, animatedStyles]} />
                                </Animated.View>
                            </TouchableOpacity>
                            {/* <Toggle button={useCredit} setButton={setUseCredit} /> */}

                        </View>
                    </View>

                    <Spacer paddingT={myHeight(3)} />

                    {/* Card */}

                    <View>
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body3,
                            fontFamily: myFonts.bodyBold,
                        }]}>Payment Method</Text>


                        <Spacer paddingT={myHeight(1)} />
                        {/* Add Payment Method */}
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ResAddCard')}>
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.bodyBold,
                                color: myColors.primaryT
                            }]}>Add Payment Method</Text>
                        </TouchableOpacity>

                        <Spacer paddingT={myHeight(2.7)} />
                        {/* Visa Select */}
                        <TouchableOpacity activeOpacity={0.85} onPress={() => setIsCard(!isCard)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: myHeight(2.5) * 2.5, alignItems: 'center' }}>
                                <Image source={require('../../../../assets/home_main/dashboards/ride/visa.png')}
                                    style={{
                                        width: myHeight(2.5) * 2.5,
                                        height: myHeight(2.5),
                                        resizeMode: 'contain',
                                        // tintColor: myColors.text
                                    }}
                                />
                            </View>
                            <Spacer paddingEnd={myWidth(4)} />
                            <Text style={[
                                styles.textCommon,
                                {
                                    flex: 1,
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.heading,
                                }
                            ]}>******707</Text>

                            {/* Select Visa */}
                            <View activeOpacity={0.6} onPress={() => setIsCard(!isCard)}
                                style={{
                                    width: myHeight(3),
                                    height: myHeight(3),
                                    borderWidth: myHeight(0.1),
                                    borderRadius: myHeight(3),
                                    borderColor: myColors.primaryT,
                                    padding: myHeight(0.2)

                                }}>
                                <View style={{
                                    flex: 1, backgroundColor: isCard ? myColors.primaryT : myColors.offColor7,
                                    borderRadius: myHeight(3),
                                }} />

                            </View>
                        </TouchableOpacity>

                    </View>


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
