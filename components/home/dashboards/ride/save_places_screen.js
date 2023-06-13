import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { myColors } from '../../../../ultils/myColors'
import { Spacer, ios, myHeight, myWidth } from '../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts'
import { saveLocations } from './ride_data'
import Animated, { BounceIn } from 'react-native-reanimated'

export const SavePlaces = ({ navigation }) => {
    const [showPopUp, setShowPopUp] = useState(false)

    function onDelete() {
        setShowPopUp(false)
    }

    return (
        <>
            <SafeAreaView style={{ backgroundColor: myColors.primaryT }}></SafeAreaView>

            <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background }}>
                {/* <Spacer paddingT={myHeight(0.5)} /> */}
                {/* Top */}
                <View style={{ paddingBottom: myHeight(0.5) }}>
                    <View style={{
                        elevation: 6, shadowColor: '#000', paddingVertical: myHeight(0.6),
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2, backgroundColor: myColors.background,
                        shadowRadius: 2, flexDirection: 'row', alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{
                            height: myHeight(5),
                            width: myHeight(7),
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                            onPress={() => navigation.goBack()} activeOpacity={0.7}>
                            <Image style={{
                                height: myHeight(3),
                                width: myHeight(3) * 1.4,
                                resizeMode: "contain",
                                tintColor: myColors.text
                            }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                        </TouchableOpacity>
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.xBody,
                            fontFamily: myFonts.heading,
                        }]}>Saved Places</Text>
                    </View>
                </View>

                {/* Content */}
                <ScrollView style={{ paddingHorizontal: myWidth(4) }}>
                    {
                        saveLocations.map((item, i) =>
                            <View key={i} style={{}}>
                                {/* Text & Bin */}
                                <View style={{
                                    paddingVertical: myHeight(2), flexDirection: 'row',
                                    alignItems: 'center', justifyContent: 'space-between'
                                }}>
                                    {/* Text */}
                                    <View>
                                        <Text style={[styles.textCommon, {
                                            fontSize: myFontSize.xBody,
                                            fontFamily: myFonts.heading,
                                        }]}>{item.saveName}</Text>
                                        <Text style={[styles.textCommon, {
                                            fontSize: myFontSize.medium0,
                                            fontFamily: myFonts.bodyBold,
                                        }]}>{item.name}</Text>
                                    </View>
                                    {/* Bin */}
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => setShowPopUp(true)}
                                        style={{ padding: myHeight(1), backgroundColor: myColors.primaryL5, borderRadius: myWidth(1) }}>
                                        <Image style={{
                                            height: myHeight(3.2),
                                            width: myHeight(3.2),
                                            resizeMode: "contain",
                                        }} source={require('../../../assets/home_main/dashboards/ride/bin.png')} />
                                    </TouchableOpacity>
                                </View>
                                {/* Divider */}
                                <View style={{
                                    borderTopWidth: myHeight(0.08),
                                    borderColor: myColors.offColor2, width: '100%'
                                }} />
                            </View>
                        )
                    }
                </ScrollView>


                {/* POP Up */}
                {
                    showPopUp &&
                    <View style={{
                        position: 'absolute', justifyContent: 'center',
                        backgroundColor: '#00000042', height: myHeight(100), width: myWidth(100),
                        alignItems: 'center', paddingHorizontal: myWidth(4.5)
                    }}>

                        <Animated.View
                            entering={BounceIn.duration(300)}
                            style={{
                                width: "100%", backgroundColor: myColors.background,
                                paddingHorizontal: myWidth(4.6), borderRadius: myHeight(1.5)

                            }}>
                            <Spacer paddingT={myHeight(2)} />
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.bodyBold,
                                    color: myColors.text,
                                    letterSpacing: myLetSpacing.common,
                                    includeFontPadding: false,
                                    padding: 0,
                                }}
                            >Are you sure you want to remove{'\n'}this saved location?</Text>
                            <Spacer paddingT={myHeight(2)} />
                            <View
                                style={{
                                    flexDirection: 'row', justifyContent: 'space-between',
                                }}>
                                {/* NO */}
                                <TouchableOpacity activeOpacity={0.6} onPress={() => setShowPopUp(false)}
                                    style={{
                                        width: '48%', borderWidth: myHeight(0.09),
                                        borderColor: myColors.primaryT, borderRadius: myHeight(0.8),
                                        paddingVertical: myHeight(0.8)
                                    }}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            fontSize: myFontSize.xBody,
                                            fontFamily: myFonts.bodyBold,
                                            color: myColors.primaryT,
                                            letterSpacing: myLetSpacing.common,
                                            includeFontPadding: false,
                                            padding: 0,
                                        }}
                                    >No</Text>
                                </TouchableOpacity>
                                {/* Yes */}
                                <TouchableOpacity activeOpacity={0.8} onPress={onDelete}
                                    style={{
                                        width: '48%', borderWidth: myHeight(0.09),
                                        borderColor: myColors.primaryT, borderRadius: myHeight(0.8),
                                        paddingVertical: myHeight(0.8), backgroundColor: myColors.primaryT
                                    }}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            fontSize: myFontSize.xBody,
                                            fontFamily: myFonts.bodyBold,
                                            color: myColors.background,
                                            letterSpacing: myLetSpacing.common,
                                            includeFontPadding: false,
                                            padding: 0,
                                        }}
                                    >Yes</Text>
                                </TouchableOpacity>
                            </View>
                            <Spacer paddingT={myHeight(3)} />



                        </Animated.View>

                    </View>
                }
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({


    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },

})