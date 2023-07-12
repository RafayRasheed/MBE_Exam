import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { myColors } from '../../../../ultils/myColors';
import { Spacer, ios, myHeight, myWidth } from '../../../common';
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts';

export const RestRating = ({ navigation, }) => {
    const [starI, setStarI] = useState(undefined)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background, }}>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>


                <Spacer paddingT={myHeight(5)} />

                {/* loc */}
                <Image style={{
                    height: myWidth(50),
                    width: myWidth(50),
                    borderRadius: myWidth(50),
                    resizeMode: 'contain',
                }} source={require('../../../assets/home_main/dashboards/foods/icon.png')} />

                <Spacer paddingT={myHeight(3.5)} />
                {/* Rate Your Meal */}
                <Text numberOfLines={1} style={[styles.textCommon, {
                    fontSize: myFontSize.xBody,
                    fontFamily: myFonts.bodyBold,
                }]}>Rate your meal from</Text>

                <Spacer paddingT={myHeight(0.5)} />
                {/* small line */}
                <View style={{
                    width: '25%', borderTopWidth: myHeight(0.2),
                    borderColor: myColors.primaryT
                }} />

                <Spacer paddingT={myHeight(1.3)} />
                {/* Rest Name */}
                <Text numberOfLines={1} style={[styles.textCommon, {
                    fontSize: myFontSize.medium0,
                    fontFamily: myFonts.heading,
                }]}>Burger's King</Text>


                <Spacer paddingT={myHeight(4)} />

                {/* Rating */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(0)}>
                        <Image source={require('../../../assets/home_main/star.png')}
                            style={{
                                width: myHeight(3.2),
                                height: myHeight(3.2),
                                resizeMode: 'contain',
                                tintColor: starI >= 0 ? myColors.star : myColors.offColor
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(1)}>
                        <Image source={require('../../../assets/home_main/star.png')}
                            style={{
                                width: myHeight(3.2),
                                height: myHeight(3.2),
                                resizeMode: 'contain',
                                tintColor: starI >= 1 ? myColors.star : myColors.offColor
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(2)}>
                        <Image source={require('../../../assets/home_main/star.png')}
                            style={{
                                width: myHeight(3.2),
                                height: myHeight(3.2),
                                resizeMode: 'contain',
                                tintColor: starI >= 2 ? myColors.star : myColors.offColor
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(3)}>
                        <Image source={require('../../../assets/home_main/star.png')}
                            style={{
                                width: myHeight(3.2),
                                height: myHeight(3.2),
                                resizeMode: 'contain',
                                tintColor: starI >= 3 ? myColors.star : myColors.offColor
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(4)}>
                        <Image source={require('../../../assets/home_main/star.png')}
                            style={{
                                width: myHeight(3.2),
                                height: myHeight(3.2),
                                resizeMode: 'contain',
                                tintColor: starI >= 4 ? myColors.star : myColors.offColor
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <Spacer paddingT={myHeight(5)} />
                {/* Line */}
                <View style={{
                    width: '100%', borderTopWidth: myHeight(0.25),
                    borderColor: myColors.divider
                }} />

                <Spacer paddingT={myHeight(0.7)} />

                {/* Cash Payable & price */}
                <View style={{
                    alignItems: 'center', flexDirection: 'row',
                    paddingHorizontal: myWidth(4)
                }}>
                    <Text numberOfLines={1} style={[styles.textCommon, {
                        flex: 1,
                        fontSize: myFontSize.xBody,
                        fontFamily: myFonts.body,
                    }]}>Cash Payable</Text>
                    <Text numberOfLines={1} style={[styles.textCommon, {
                        fontSize: myFontSize.xBody,
                        fontFamily: myFonts.body,
                    }]}>$180</Text>
                </View>
            </ScrollView>



            {/* Ok button */}
            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.replace('HomeBottomNavigator')}
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
                ]}>Ok</Text>
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