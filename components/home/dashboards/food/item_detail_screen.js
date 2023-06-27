import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { myColors } from '../../../../ultils/myColors';
import { Spacer, ios, myHeight, myWidth } from '../../../common';
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts';
import { ResCategories, mainCourse } from './food_data';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';

export const ItemDetail = ({ navigation, route }) => {
    const { item } = route.params
    const options = item.options
    const [selectItems, setSelectItems] = useState({})
    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: myColors.background,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* TOP IMAGE */}
                <ImageBackground source={item.image} style={{ width: myWidth(100), height: myHeight(27), }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}
                        style={{
                            backgroundColor: myColors.background,
                            borderRadius: myHeight(0.7),
                            height: myHeight(3.8),
                            width: myHeight(3.8),
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginVertical: myHeight(1.2),
                            marginHorizontal: myWidth(4)
                        }}>
                        <Image style={{
                            height: myHeight(3.2),
                            width: myHeight(3.2),
                            resizeMode: 'contain',
                            tintColor: myColors.text
                        }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                    </TouchableOpacity>
                </ImageBackground>

                {/* Name & Price */}
                <View style={{ paddingHorizontal: myWidth(4) }}>
                    <Spacer paddingT={myHeight(0.8)} />
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.xBody,
                        fontFamily: myFonts.heading,
                    }]}>{item.name}
                    </Text>
                    <Spacer paddingT={myHeight(0.6)} />
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body2,
                        fontFamily: myFonts.heading,
                    }]}>CA $15.23</Text>
                    <Spacer paddingT={myHeight(1)} />
                </View>

                <View style={{
                    height: myHeight(0.8), width: '100%', backgroundColor: myColors.dot
                }} />

                {/* Select Content */}
                <View style={{ paddingHorizontal: myWidth(4) }}>

                    {
                        options.map((option, i) => {

                            return (

                                <View key={i}>
                                    <Spacer paddingT={myHeight(1)} />
                                    {/* Name & Required */}
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={[styles.textCommon, {
                                            fontSize: myFontSize.xBody,
                                            fontFamily: myFonts.heading,
                                        }]}>{option.name}</Text>

                                        {option.required &&

                                            <View style={{ paddingHorizontal: myWidth(4), paddingVertical: myHeight(0.4), backgroundColor: myColors.dot, borderRadius: myHeight(5) }}>
                                                <Text style={[styles.textCommon, {
                                                    fontSize: myFontSize.body2,
                                                    fontFamily: myFonts.body,
                                                }]}>{'Required'}</Text>
                                            </View>

                                        }
                                    </View>
                                    <Spacer paddingT={myHeight(0.6)} />

                                    {
                                        option.list?.map((item, i) =>
                                            <View key={i}>
                                                {/* Divider */}
                                                {
                                                    i != 0 &&
                                                    <View style={{
                                                        width: '100%', borderTopWidth: myHeight(0.12),
                                                        borderColor: myColors.dot,
                                                    }} />
                                                }
                                                <Spacer paddingT={myHeight(1)} />

                                                {/* List name & circle */}
                                                <TouchableOpacity activeOpacity={0.8} style={{
                                                    flexDirection: 'row', alignItems: 'center'
                                                }}
                                                    onPress={() => {

                                                        if (selectItems[option.name]) {
                                                            setSelectItems({
                                                                ...selectItems,
                                                                [option.name]: item
                                                            })
                                                            return
                                                        }
                                                        const tem = {
                                                            ...selectItems,
                                                            [option.name]: item
                                                        }
                                                        setSelectItems(tem)
                                                    }} >
                                                    {/* list name */}
                                                    <Text style={[styles.textCommon, {
                                                        flex: 1,
                                                        fontSize: myFontSize.xBody,
                                                        fontFamily: myFonts.body,
                                                    }]}>{item}</Text>


                                                    {/* Circle */}
                                                    <View style={{
                                                        width: myHeight(2.8), height: myHeight(2.8),
                                                        borderColor: myColors.primaryT, borderRadius: myHeight(3),
                                                        borderWidth: selectItems[option.name] == item ? myHeight(0.9) : myHeight(0.2),
                                                    }} />

                                                </TouchableOpacity>
                                                <Spacer paddingT={myHeight(1)} />

                                            </View>
                                        )
                                    }
                                    <Spacer paddingT={myHeight(1)} />
                                </View>
                            )
                        }
                        )
                    }

                </View>

                <Spacer paddingT={myHeight(2)} />

                {/* Number of Items  */}
                <View style={{ paddingHorizontal: myWidth(4), }}>

                    <Text numberOfLines={1} style={[styles.textCommon, {
                        fontSize: myFontSize.xBody,
                        fontFamily: myFonts.heading,
                    }]}>Chicken McMuffin Additions</Text>
                    <Spacer paddingT={myHeight(1)} />
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                        <View style={{ flex: 1 }}>
                            <Text numberOfLines={1} style={[styles.textCommon, {
                                fontSize: myFontSize.xBody,
                                fontFamily: myFonts.body,
                            }]}>Chicken Patty [130.0 Cals]</Text>
                            <Spacer paddingT={myHeight(0.5)} />

                            <Text numberOfLines={1} style={[styles.textCommon, {
                                fontSize: myFontSize.body3,
                                fontFamily: myFonts.body,
                            }]}>CA $1.39</Text>
                            <Spacer paddingT={myHeight(1)} />

                            <Text numberOfLines={1} style={[styles.textCommon, {
                                fontSize: myFontSize.body3,
                                fontFamily: myFonts.body,
                                color: '#4CD964'
                            }]}>Popular</Text>
                        </View>

                        {/* Plus Minus */}
                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            alignSelf: 'flex-start', marginTop: -myHeight(0.4)
                        }}>
                            {/* minus */}
                            <TouchableOpacity activeOpacity={0.75} onPress={() => null}>
                                <Image style={{
                                    height: myHeight(3.8),
                                    width: myHeight(3.8),
                                    resizeMode: 'contain',
                                    marginTop: myHeight(0.6)

                                }} source={require('../../../assets/home_main/dashboards/minusBtn.png')} />
                            </TouchableOpacity>

                            <Spacer paddingEnd={myWidth(2.5)} />
                            {/* count */}
                            <Text numberOfLines={1} style={[styles.textCommon, {
                                fontSize: myFontSize.body3,
                                fontFamily: myFonts.bodyBold,
                            }]}>3</Text>

                            <Spacer paddingEnd={myWidth(2.5)} />
                            {/* plus */}
                            <TouchableOpacity activeOpacity={0.75} onPress={() => null}>
                                <Image style={{
                                    height: myHeight(3.8),
                                    width: myHeight(3.8),
                                    marginTop: myHeight(0.6),
                                    resizeMode: 'contain',
                                }} source={require('../../../assets/home_main/dashboards/plusBtn.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Spacer paddingT={myHeight(1)} />

                </View>


            </ScrollView>

        </SafeAreaView>
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