import { Image, TouchableOpacity, SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { myColors } from '../../../../../ultils/myColors'
import { myWidth, myHeight, Spacer } from '../../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../../ultils/myFonts'

export const ItemInfo = ({ item, navigate, plus = true }) => {
    return (
        <View style={{ flexDirection: 'row', paddingTop: myHeight(1.3), paddingBottom: myHeight(0.86) }}>
            <View style={{ flex: 1 }}>
                {/* name */}
                <Text numberOfLines={1} style={{
                    fontSize: myFontSize.xBody,
                    fontFamily: myFonts.bodyBold,
                    color: myColors.text,
                    letterSpacing: myLetSpacing.common,
                    includeFontPadding: false,
                    padding: 0,
                }}>{item.name}</Text>

                <Spacer paddingT={myHeight(0.5)} />
                {/* Price & Cal */}
                <Text numberOfLines={1} style={[{
                    flex: 1,
                    fontSize: myFontSize.xSmall,
                    fontFamily: myFonts.body,
                    color: myColors.text,
                    letterSpacing: myLetSpacing.common,
                    includeFontPadding: false,
                    padding: 0, fontFamily: myFonts.bodyBold
                }]}
                >{item.price} - <Text style={[{
                    flex: 1,
                    fontSize: myFontSize.xSmall,
                    fontFamily: myFonts.body,
                    color: myColors.text,
                    letterSpacing: myLetSpacing.common,
                    includeFontPadding: false,
                    padding: 0, color: myColors.textL6
                }]}
                >{item.cals} Cals</Text></Text>

                <Spacer paddingT={myHeight(0.5)} />
                {/* Description */}
                <Text numberOfLines={3} style={[{
                    flex: 1,
                    fontSize: myFontSize.xSmall,
                    fontFamily: myFonts.body,
                    color: myColors.text,
                    letterSpacing: myLetSpacing.common,
                    includeFontPadding: false,
                    padding: 0, color: myColors.textL6
                }]}>{item.description}</Text>
            </View>
            <Spacer paddingEnd={myWidth(5.5)} />
            <ImageBackground source={item.image} style={{
                height: myHeight(8),
                width: myHeight(8),
                paddingEnd: myWidth(1.4),
                resizeMode: 'cover'
            }}>
                {/* Plus */}

                {
                    plus &&
                    <TouchableOpacity onPress={() => navigate('ItemCartScreen', { item: item })} style={{
                        borderRadius: myHeight(2),
                        padding: myHeight(0.5),
                        position: 'absolute',
                        zIndex: 1,
                        bottom: -myHeight(0.3),
                        right: -myHeight(0.6),
                        backgroundColor: myColors.primaryT,
                    }} activeOpacity={0.8}>
                        <Image style={[{
                            height: myHeight(1.2),
                            width: myHeight(1.2),
                            resizeMode: 'cover'
                        }]}
                            source={require('../../../../assets/home_main/plus.png')} />
                    </TouchableOpacity>}
            </ImageBackground>
        </View>

    )
}
