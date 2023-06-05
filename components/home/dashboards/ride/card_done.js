import { Image, LayoutAnimation, SafeAreaView, ScrollView, SliderBase, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { myColors } from '../../../../ultils/myColors'
import { Spacer, ios, myHeight, myWidth } from '../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts'
import Animated, { SlideInDown, SlideInLeft, SlideInUp, SlideOutDown, SlideOutLeft } from 'react-native-reanimated'

export const CardDone = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={{ backgroundColor: myColors.primaryT }}></SafeAreaView>
            <SafeAreaView style={styles.container}>
                <View style={{ paddingHorizontal: myWidth(4.5), }}>
                    {/* Top */}
                    <Spacer paddingT={myHeight(1.7)} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.containerImageBack}
                            onPress={() => navigation.goBack()} activeOpacity={0.7}>
                            <Image style={{
                                height: myHeight(2.6),
                                width: myHeight(2.6) * 1.4,
                                resizeMode: "contain",
                                tintColor: myColors.text
                            }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                        </TouchableOpacity>
                        <Spacer paddingEnd={myWidth(3)} />

                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.heading,
                        }]}>Add Card</Text>
                    </View>

                    <Spacer paddingT={myHeight(3)} />
                    {/* Image & Others */}
                    <View style={{ alignItems: 'center' }}>
                        {/* Image */}
                        <Image style={{
                            height: myHeight(36),
                            width: myHeight(36),
                            resizeMode: "contain",
                        }} source={require('../../../assets/home_main/dashboards/ride/man.png')} />

                        <Spacer paddingT={myHeight(2)} />

                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.medium0,
                            fontFamily: myFonts.heading,
                        }]}>Card added successfully</Text>
                        <Spacer paddingT={myHeight(2)} />

                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.xBody,
                            fontFamily: myFonts.bodyBold,
                        }]}>Visa .....127</Text>

                    </View>
                </View>

                {/* Bottom */}
                <View style={{ paddingHorizontal: myWidth(4.5) }}>
                    {/* Add Card Button */}
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => navigation.replace('RideHome')}
                        style={{
                            backgroundColor: myColors.primaryT,
                            borderRadius: myHeight(1),
                            paddingVertical: myHeight(1),
                            alignItems: 'center',
                            width: '100%', justifyContent: 'center',
                        }}>

                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.heading,
                                color: myColors.background,
                            }
                        ]}>Back to Home</Text>

                    </TouchableOpacity>
                    <Spacer paddingT={myHeight(4)} />
                </View>

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background,
        justifyContent: 'space-between',
        // paddingHorizontal: 

    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: myHeight(0.8),
        paddingHorizontal: myWidth(2.5),
        borderWidth: myHeight(0.09),
        borderColor: myColors.primaryT,
        backgroundColor: myColors.offColor4,

        // elevation: 2,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.1,
        // shadowRadius: 3,
    },
    textInput: {
        flex: 1,
        textAlignVertical: 'center',
        paddingVertical: ios ? myHeight(1) : myHeight(100) > 600 ? myHeight(0.7) : myHeight(0.1),
        fontSize: myFontSize.body2,
        color: myColors.text,
        includeFontPadding: false,
        fontFamily: myFonts.bodyBold,
    },

    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },



})