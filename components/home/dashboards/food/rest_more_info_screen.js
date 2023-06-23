import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { myColors } from '../../../../ultils/myColors';
import { Spacer, ios, myHeight, myWidth } from '../../../common';
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts';
import Collapsible from 'react-native-collapsible';
import { useClipboard } from '@react-native-community/clipboard';


export const RestaurantMoreInfo = ({ navigation, route }) => {
    const { restaurant } = route.params
    const [timmingClose, setTimingClose] = useState(true)
    const [copyLoc, setCopyLoc] = useClipboard()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background }}>

            {/* Map & Back */}
            <View>
                {/* Map Ayega */}
                <View style={{ height: myHeight(19), backgroundColor: myColors.primary }} />

                {/* Back */}

                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}
                    style={{
                        backgroundColor: myColors.background,
                        position: 'absolute',
                        borderRadius: myWidth(2),
                        margin: myHeight(1.5),
                        backgroundColor: myColors.background,
                        borderRadius: myHeight(1),
                        height: myHeight(3.8),
                        width: myHeight(3.8),
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image style={{
                        height: myHeight(3),
                        width: myHeight(3),
                        resizeMode: 'contain',
                        tintColor: myColors.text
                    }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                </TouchableOpacity>
            </View>

            <Spacer paddingT={myHeight(0.5)} />

            {/* Name & Items */}
            <View style={{ paddingHorizontal: myWidth(4) }}>
                {/* Name */}
                <Text numberOfLines={2} style={[styles.textCommon, {
                    fontSize: myFontSize.xMedium,
                    fontFamily: myFonts.heading,
                }]}>{restaurant.name}</Text>

                <Spacer paddingT={myHeight(0.3)} />
                {/* Items */}
                <View style={{ flexDirection: 'row' }}>
                    {/* items */}
                    {
                        restaurant.items.map((item, i) =>
                            <Text key={i} numberOfLines={2} style={[styles.textCommon, {
                                fontSize: myFontSize.body,
                                fontFamily: myFonts.body,
                                color: myColors.textL5,
                                paddingStart: i != 0 ? myWidth(2) : 0
                            }]}>{item}</Text>
                        )
                    }
                </View>
            </View>


            <Spacer paddingT={myHeight(1)} />
            {/* Divider */}
            <View style={{ borderTopWidth: myHeight(0.13), borderColor: myColors.offColor, width: "100%" }} />

            <Spacer paddingT={myHeight(2)} />
            {/* loc & copy */}
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <View style={{ width: myWidth(20), alignItems: 'center' }}>
                    {/* loc */}
                    <Image style={{
                        height: myHeight(3),
                        width: myHeight(3),
                        resizeMode: 'contain',
                        tintColor: myColors.primaryT
                    }} source={require('../../../assets/home_main/dashboards/foods/location2.png')} />
                </View>
                {/* Loc */}
                <Text numberOfLines={2} style={{
                    flex: 1,
                    fontSize: myFontSize.body3,
                    fontFamily: myFonts.bodyBold,
                    color: myColors.text,
                    letterSpacing: myLetSpacing.common,
                    includeFontPadding: false,
                    padding: 0
                }}
                >{restaurant.loc}</Text>
                {/* copy */}
                <TouchableOpacity activeOpacity={0.85} onPress={() => setCopyLoc(restaurant.loc)}>
                    <Image style={{
                        height: myHeight(3),
                        width: myHeight(3),
                        resizeMode: 'contain',
                        tintColor: myColors.textL3
                    }} source={require('../../../assets/home_main/dashboards/foods/copy.png')} />
                </TouchableOpacity>
                <Spacer paddingEnd={myWidth(4)} />
            </View>

            <Spacer paddingT={myHeight(2)} />
            {/* Divider */}
            <View style={{ borderTopWidth: myHeight(0.13), alignSelf: 'flex-end', borderColor: myColors.offColor, width: "80%" }} />


            <Spacer paddingT={myHeight(2)} />


            {/* clock & open at && plus/minus */}
            <View style={{ flexDirection: "row", }}>
                {/* Clock */}
                <View style={{ width: myWidth(20), alignItems: 'center' }}>
                    {/* clock */}
                    <Image style={{
                        height: myHeight(2.6),
                        width: myHeight(2.6),
                        resizeMode: 'contain',
                        tintColor: myColors.primaryT
                    }} source={require('../../../assets/home_main/dashboards/foods/clock.png')} />
                </View>

                {/* Open at */}
                <Text numberOfLines={2} style={{
                    flex: 1,
                    fontSize: myFontSize.body3,
                    fontFamily: myFonts.bodyBold,
                    color: myColors.text,
                    letterSpacing: myLetSpacing.common,
                    includeFontPadding: false,
                    padding: 0
                }}
                >{'Open at 9:00 AM'}</Text>
                {/* plujs minus */}
                <TouchableOpacity activeOpacity={0.85} onPress={() => setTimingClose(!timmingClose)}>
                    <Image style={{
                        height: myHeight(3),
                        width: myHeight(3),
                        resizeMode: 'contain',
                        tintColor: myColors.textL3
                    }} source={
                        timmingClose ? require('../../../assets/home_main/dashboards/foods/plus.png')
                            : require('../../../assets/home_main/dashboards/foods/minus.png')} />
                </TouchableOpacity>
                <Spacer paddingEnd={myWidth(4)} />
            </View>
            {/* Timmings Collapse */}
            <Collapsible style={{ paddingStart: myWidth(20), paddingEnd: myWidth(4) }} collapsed={timmingClose}>
                {
                    restaurant.timmings?.map((item, i) =>
                        <View key={i}>
                            <Spacer paddingT={myHeight(1)} />

                            <Text numberOfLines={2} style={[styles.textCommon, {
                                flex: 1,
                                fontSize: myFontSize.body3,
                                fontFamily: myFonts.bodyBold,

                            }]}
                            >{item.day}</Text>

                            <Spacer paddingT={myHeight(0.5)} />

                            {
                                item.times?.map((time, key) =>
                                    <Text key={key} numberOfLines={2} style={[styles.textCommon, {
                                        flex: 1,
                                        fontSize: myFontSize.body,
                                        fontFamily: myFonts.bodyBold,
                                        color: myColors.textL

                                    }]}
                                    >{time}</Text>
                                )
                            }
                        </View>
                    )
                }


            </Collapsible>

            <Spacer paddingT={myHeight(2)} />
            {/* Divider */}
            <View style={{ borderTopWidth: myHeight(0.13), borderColor: myColors.offColor, width: "100%" }} />

            <Spacer paddingT={myHeight(2)} />
            {/* Star & Rating */}
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <View style={{ width: myWidth(20), alignItems: 'center' }}>

                    {/* Star */}
                    <Image style={{
                        height: myHeight(2.3),
                        width: myHeight(2.3),
                        resizeMode: 'contain',
                        tintColor: myColors.star
                    }} source={require('../../../assets/home_main/star.png')} />
                </View>
                {/* <Spacer paddingEnd={myWidth(1.5)} /> */}
                {/* rating */}
                <Text numberOfLines={1} style={{
                    fontSize: myFontSize.body3,
                    fontFamily: myFonts.bodyBold,
                    color: myColors.text,
                    letterSpacing: myLetSpacing.common,
                    includeFontPadding: false,
                    padding: 0
                }}
                >{restaurant.rating} ({restaurant.totalRating} ratings)</Text>
            </View>

            <Spacer paddingT={myHeight(2)} />
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

