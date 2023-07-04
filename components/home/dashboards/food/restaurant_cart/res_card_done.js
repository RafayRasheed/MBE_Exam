import { Image, LayoutAnimation, SafeAreaView, ScrollView, SliderBase, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { myColors } from '../../../../../ultils/myColors'
import { Spacer, ios, myHeight, myWidth } from '../../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../../ultils/myFonts'

export const ResCardDone = ({ navigation }) => {
    return (

        <SafeAreaView style={styles.container}>
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
                    }]}>Add Card</Text>
                </View>
            </View>

            <View style={{ paddingHorizontal: myWidth(4.5), flex: 1, justifyContent: 'space-between' }}>

                {/* Image & Others */}
                <View style={{ alignItems: 'center', }}>
                    <Spacer paddingT={myHeight(3)} />
                    {/* Image */}
                    <Image style={{
                        height: myHeight(36),
                        width: myHeight(36),
                        resizeMode: "contain",
                    }} source={require('../../../../assets/home_main/dashboards/ride/man.png')} />

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

                {/* Bottom */}
                <View style={{}}>
                    {/* Ok */}
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => navigation.goBack()}
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
                        ]}>Ok</Text>

                    </TouchableOpacity>
                    <Spacer paddingT={myHeight(4)} />
                </View>
            </View>

        </SafeAreaView>
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