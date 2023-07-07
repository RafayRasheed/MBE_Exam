import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../ultils/myFonts';
import Collapsible from 'react-native-collapsible';



export const RideDetails = ({ navigation, route }) => {
    const { item } = route.params
    const [showRideFare, setShowRideFare] = useState(false)
    const items = [
        {
            name: 'Starting',
            value: 'CA $204',
        },
        {
            name: 'Distancer',
            value: 'CA $204',
        },
        {
            name: 'Tollgate',
            value: 'CA $204',
        },
        {
            name: 'Service fee',
            value: 'CA $204',
        },
    ]
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
                        }]}>Ride Details</Text>
                    </View>

                </View>

                {/* Content */}
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: myWidth(4), backgroundColor: myColors.background, flexGrow: 1
                }}>
                    <Spacer paddingT={myHeight(2)} />
                    {/* Name */}
                    <Text style={[
                        styles.textCommon,
                        {
                            fontSize: myFontSize.medium2,
                            fontFamily: myFonts.heading,
                        }
                    ]}>M-Eco</Text>

                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body2,
                        fontFamily: myFonts.bodyBold,
                    }]}>6 Oct 2018, 2:06 PM</Text>

                    <Spacer paddingT={myHeight(3.5)} />
                    {/* Ride Fare */}
                    <TouchableOpacity activeOpacity={0.9} onPress={() => setShowRideFare(!showRideFare)}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.textCommon, {
                            flex: 1,
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.body,
                        }]}>Ride Fare</Text>

                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.body,
                        }]}>CA $29.99</Text>

                        <Spacer paddingEnd={myWidth(3)} />
                        {/* Go */}
                        <View style={{ transform: [{ rotate: showRideFare ? '270deg' : '90deg' }] }}>
                            <Image style={{
                                height: myHeight(1.8),
                                width: myHeight(1.8),
                                resizeMode: 'contain',
                                tintColor: myColors.textL4
                            }} source={require('../assets/home_main/go.png')} />
                        </View>

                    </TouchableOpacity>

                    {/* <Spacer paddingT={myHeight(1.5)} /> */}
                    <Collapsible style={{
                        backgroundColor: myColors.offColor4,
                        paddingHorizontal: myWidth(3),
                        borderRadius: myWidth(1),
                        marginTop: myHeight(1.5)
                    }} collapsed={!showRideFare}>

                        <Spacer paddingT={myHeight(1.5)} />
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.body,
                            color: myColors.textL4
                        }]}>You traveled 11km in 18 mins</Text>

                        <Spacer paddingT={myHeight(0.5)} />
                        {/* Items */}
                        {
                            items.map((item, i) =>
                                <View style={{
                                    flexDirection: 'row',
                                    paddingVertical: myHeight(1)
                                }}>
                                    <Text style={[styles.textCommon, {
                                        flex: 1,
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.body,
                                    }]}>{item.name}</Text>
                                    <Text style={[styles.textCommon, {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.body,
                                    }]}>{item.value}</Text>
                                </View>
                            )
                        }

                        <Spacer paddingT={myHeight(1)} />
                        {/* Divider */}
                        <View style={{ height: myHeight(0.1), backgroundColor: myColors.textL4 }} />

                        <Spacer paddingT={myHeight(2)} />

                        {/* Amount Charge */}
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={[styles.textCommon, {
                                flex: 1,
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.heading,
                            }]}>Amount Charged</Text>
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.body,
                            }]}>CA $29.99</Text>
                        </View>

                        <Spacer paddingT={myHeight(3)} />
                    </Collapsible>

                    <Spacer paddingT={myHeight(2)} />
                    {/* Divider */}
                    <View style={{ marginStart: -myWidth(4), width: myWidth(100), height: myHeight(0.1), backgroundColor: myColors.textL4 }} />

                    <Spacer paddingT={myHeight(2)} />
                    {/* Carf Pay */}
                    <View activeOpacity={0.9} onPress={() => setShowRideFare(!showRideFare)}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{
                            height: myHeight(2.8),
                            width: myHeight(2.8),
                            resizeMode: 'contain',
                            tintColor: myColors.primaryT
                        }} source={require('../assets/home_main/dashboards/ride/card.png')} />

                        <Spacer paddingEnd={myWidth(3)} />

                        <Text style={[styles.textCommon, {
                            flex: 1,
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.bodyBold,
                        }]}>Card Pay</Text>

                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.bodyBold,
                        }]}>CA $29.99</Text>
                    </View>

                    <Spacer paddingT={myHeight(2)} />
                    {/* Credit */}
                    <View style={{
                        marginStart: -myWidth(4), width: myWidth(100), paddingVertical: myHeight(1.4),
                        backgroundColor: myColors.primaryT, paddingHorizontal: myWidth(4)
                    }}>
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.bodyBold,
                            color: myColors.background,
                        }]}>CA $10 has been credited to your wallet</Text>
                    </View>

                    <Spacer paddingT={myHeight(2)} />

                </ScrollView>


                {/* Buttons */}
                <View style={{ paddingHorizontal: myWidth(4) }}>
                    <Spacer paddingT={myHeight(1.5)} />

                    {/* Invoice */}
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
                        <Image style={{
                            height: myHeight(2.6),
                            width: myHeight(2.6),
                            resizeMode: 'contain',
                            tintColor: myColors.primaryT
                        }} source={require('../assets/activity/download.png')} />

                        <Spacer paddingEnd={myWidth(2)} />
                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.heading,
                                color: myColors.primaryT,
                            }
                        ]}>Invoice</Text>
                    </TouchableOpacity>
                    <Spacer paddingT={myHeight(2)} />

                    {/* Rebook */}
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
                        ]}>{item.status == 'In Progress' ? 'Track Ride' : 'Repeat Request'}</Text>
                    </TouchableOpacity>
                    <Spacer paddingT={myHeight(1.5)} />

                </View>

            </SafeAreaView >
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
