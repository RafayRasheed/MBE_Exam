import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../ultils/myFonts';


const cards = [
    {
        icon: require('../assets/home_main/dashboards/ride/visa.png'),
        num: '********707'
    },
    {
        icon: require('../assets/home_main/dashboards/ride/third.png'),
        num: '********807'
    },
    {
        icon: require('../assets/home_main/dashboards/ride/american.png'),
        num: '********971'
    },
    {
        icon: require('../assets/home_main/dashboards/ride/visa.png'),
        num: '********008'
    },

]
export const Payment = ({ navigation }) => {

    return (
        <>
            {/* <StatusBar backgroundColor={orderModal ? '#00000030' : myColors.background} /> */}
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: myColors.background,
            }}>
                {/* Top  */}
                <View style={{
                    backgroundColor: myColors.primaryT,
                    paddingHorizontal: myWidth(3),
                }}>
                    <Spacer paddingT={myHeight(1)} />
                    {/* Back */}
                    <TouchableOpacity
                        activeOpacity={0.7} onPress={() => navigation.goBack()}
                        style={{
                            height: myHeight(3.8),
                            width: myHeight(3.8),
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: myWidth(1.5),
                            backgroundColor: myColors.background
                        }}>
                        <Image style={{
                            height: myHeight(2.8),
                            width: myHeight(2.8),
                            resizeMode: 'contain',
                            tintColor: myColors.text,
                        }} source={require('../assets/home_main/dashboards/back2.png')} />
                    </TouchableOpacity>

                    <Spacer paddingT={myHeight(3)} />
                    {/* Name */}
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.medium2,
                        fontFamily: myFonts.bodyBold,
                        color: myColors.background,
                        textAlign: 'center'
                    }]}>Add Payment Methods</Text>

                    <Spacer paddingT={myHeight(1.5)} />
                    {/* ADD CARD Button */}
                    <View style={{ paddingHorizontal: myWidth(4) }}>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('ResAddCard')}
                            style={{
                                backgroundColor: myColors.background,
                                borderRadius: myHeight(8),
                                paddingVertical: myHeight(1.1),
                                paddingVertical: myHeight(1.1),
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: myHeight(0.1), borderColor: myColors.primaryT,
                                flexDirection: 'row',
                            }}>

                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.heading,
                                    color: myColors.primaryT,
                                }
                            ]}>ADD CARD</Text>
                        </TouchableOpacity>
                        <Spacer paddingT={myHeight(2)} />

                    </View>
                    <Spacer paddingT={myHeight(1.2)} />
                </View>


                {/* Content */}
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: myWidth(4), backgroundColor: myColors.background, flexGrow: 1, alignItems: 'center'
                }}>
                    <Spacer paddingT={myHeight(0.5)} />

                    {cards.map((item, i) =>
                        <View key={i} style={{}}>
                            {i !== 0 &&
                                <View style={{ height: myHeight(0.1), backgroundColor: myColors.dot }} />
                            }
                            <Spacer paddingT={myHeight(2)} />
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: myHeight(2.5) * 2.5, alignItems: 'center' }}>
                                    <Image source={item.icon}
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
                                ]}>{item.num}</Text>

                                {/* Delete card */}
                                <TouchableOpacity activeOpacity={0.8} onPress={() => null} >
                                    <Image source={require('../assets/cart/bin.png')}
                                        style={{
                                            width: myHeight(2.8),
                                            height: myHeight(2.8),
                                            resizeMode: 'contain',
                                            tintColor: myColors.primaryT
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Spacer paddingT={myHeight(2)} />


                        </View>

                    )
                    }
                </ScrollView>



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