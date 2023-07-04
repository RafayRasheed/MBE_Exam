import { Image, TouchableOpacity, SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { myColors } from '../../../../../ultils/myColors'
import { myWidth, myHeight, Spacer } from '../../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../../ultils/myFonts'

export const ResInfoSearch = ({ item, navigate, plus = true }) => {

    let items = ''
    item.items.map((item, i) => {
        if (i != 0) {
            items = `${items}- ${item} `
        } else {
            items = `${item} `
        }
    }
    )
    return (
        <View style={{ flexDirection: 'row', paddingVertical: myHeight(2), }}>
            <View style={{ flex: 1 }}>
                {/* name */}
                <Text numberOfLines={2} style={{
                    fontSize: myFontSize.xxBody,
                    fontFamily: myFonts.bodyBold,
                    color: myColors.text,
                    letterSpacing: myLetSpacing.common,
                    includeFontPadding: false,
                    padding: 0,
                }}>{item.name}</Text>

                <Spacer paddingT={myHeight(0.3)} />
                {/*  Items */}
                <Text numberOfLines={2} style={[{
                    flex: 1,
                    fontSize: myFontSize.xxSmall,
                    fontFamily: myFonts.body,
                    color: myColors.text,
                    letterSpacing: myLetSpacing.common,
                    includeFontPadding: false,
                    padding: 0, color: myColors.textL6
                }]}
                >{items}</Text>

                <Spacer paddingT={myHeight(1)} />
                {/* Delivery */}
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                    {/* Delivery */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{
                            height: myHeight(2.6),
                            width: myHeight(2.6),
                            resizeMode: 'contain',
                        }} source={require('../../../../assets/home_main/dashboards/foods/bike.png')} />
                        <Spacer paddingEnd={myWidth(1.5)} />
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.body,
                        }]}>{item.delivery}</Text>
                    </View>

                    <Spacer paddingEnd={myWidth(1)} />
                    {/* Rating */}
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Image style={{
                            height: myHeight(2.1),
                            width: myHeight(2.1),
                            resizeMode: 'contain',
                        }} source={require('../../../../assets/home_main/star.png')} />
                        <Spacer paddingEnd={myWidth(1.5)} />

                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.body,
                        }]}>{item.rating}<Text style={{ color: myColors.textL }}>{` (${item.totalRating})`}</Text></Text>
                    </View>
                </View>
            </View>
            <Spacer paddingEnd={myWidth(6)} />

            <View>

                {/* Icon & Verified */}
                <Image source={item.icon} style={{
                    height: myHeight(8),
                    width: myHeight(8),
                    paddingEnd: myWidth(1.4),
                    resizeMode: 'cover',
                    // borderWidth: myHeight(0.2),
                    // borderColor: myColors.background,
                    borderRadius: myHeight(100),
                    overflow: 'hidden'
                }} />

                {
                    item.verified &&
                    <View style={{
                        position: 'absolute',
                        zIndex: 2,
                        right: myWidth(0.7),
                        bottom: myHeight(1.7),
                        backgroundColor: myColors.darkBlue,
                        padding: myHeight(0.085),
                        borderRadius: myHeight(2),
                    }}>
                        <Image style={{
                            height: myHeight(2.2),
                            width: myHeight(2.2),
                            resizeMode: 'contain',
                        }} source={require('../../../../assets/home_main/dashboards/foods/check.png')} />
                    </View>
                }
            </View>


        </View>

    )
}

const styles = StyleSheet.create({
    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    }
})
