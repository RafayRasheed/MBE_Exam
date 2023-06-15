import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { myColors } from '../../../../ultils/myColors';
import { Spacer, ios, myHeight, myWidth } from '../../../common';
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts';
import { ResCategories, mainCourse } from './food_data';
export const RestaurantDetail = ({ route, navigation }) => {
    const [i, setI] = useState(0)
    const { item } = route.params
    return (
        <View style={styles.container}>
            <ImageBackground source={item.image} resizeMode={'cover'} style={styles.imageTop} >
                <Spacer paddingT={ios ? myHeight(6) : myHeight(3)} />
                {/* Top Arrow Search Dots */}
                <View style={{ paddingHorizontal: myWidth(4), flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* Arrow */}
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} style={styles.containerIcon}>
                        <Image style={styles.imageDots} source={require('../../../assets/home_main/dashboards/back2.png')} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        {/* Search */}
                        <TouchableOpacity activeOpacity={0.7} onPress={() => null} style={styles.containerIcon}>
                            <Image style={styles.imageSearch} source={require('../../../assets/home_main/search2.png')} />
                        </TouchableOpacity>
                        <Spacer paddingEnd={myWidth(4)} />
                        {/* Dots */}
                        <TouchableOpacity activeOpacity={0.7} onPress={() => null}
                            style={[styles.containerIcon]}>
                            <Image style={styles.imageDots} source={require('../../../assets/home_main/dots.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            <Spacer paddingT={myHeight(0.4)} />
            <View style={{ paddingHorizontal: myWidth(4) }}>
                {/* Name */}
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <Text numberOfLines={1} style={styles.textName}>{item.name}</Text>
                    <TouchableOpacity style={{ paddingStart: myWidth(1), paddingVertical: myHeight(0.5) }} activeOpacity={0.6}
                        onPress={() => null}>
                        <Image style={styles.imageHeart} source={require('../../../assets/home_main/dashboards/heart_o.png')} />
                    </TouchableOpacity>
                </View>
                <Spacer paddingT={myHeight(0.4)} />

                {/* Rating */}
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    {/* Star */}
                    <Image style={styles.imageStar} source={require('../../../assets/home_main/star.png')} />
                    <Spacer paddingEnd={myWidth(1)} />
                    {/* rating */}
                    <Text numberOfLines={1} style={styles.textRating}
                    >{item.rating} ({item.totalRating} ratings) - {item.country} - $$</Text>
                    {/* Go */}
                    <TouchableOpacity style={{ paddingStart: myWidth(1), paddingVertical: myHeight(0.5) }} activeOpacity={0.6}
                        onPress={() => null}>
                        <Image style={[styles.imageGo]}
                            source={require('../../../assets/home_main/go.png')} />
                    </TouchableOpacity>
                </View>
                {/* Open until */}
                <Text numberOfLines={1} style={styles.textOpen}>Open until 10:30pm - Tap for store information</Text>

                <Spacer paddingT={myHeight(0.6)} />
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1, }} bounces={false} horizontal showsHorizontalScrollIndicator={false}>
                {
                    ResCategories.map((item, ind) =>
                        <TouchableOpacity activeOpacity={0.7} key={ind} style={{ marginHorizontal: myWidth(5), }} onPress={() => setI(ind)}>
                            <View style={{ paddingHorizontal: myWidth(1), paddingVertical: myHeight(0.5), }}>
                                <Text style={[styles.textCommon, {
                                    fontSize: myFontSize.body,
                                    fontFamily: myFonts.bodyBold,
                                    color: i == ind ? myColors.primaryT : myColors.text
                                }]}>{item}</Text>
                            </View>

                            <View style={{
                                borderRadius: myHeight(3),
                                borderBottomWidth: myHeight(0.4), borderColor: i == ind ? myColors.primary : myColors.background
                            }} />
                        </TouchableOpacity>
                    )
                }
            </ScrollView>
            <View style={styles.containerLine} />
            <Spacer paddingT={myHeight(0.6)} />


            {/* Main Courses */}
            <ScrollView contentContainerStyle={{ paddingHorizontal: myWidth(4.1) }} showsVerticalScrollIndicator={false}>
                <Text style={styles.textMain}>Main Courses</Text>

                {mainCourse.map((main, i) =>
                    <View key={i} >
                        <Spacer paddingT={myHeight(1.3)} />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                {/* name */}
                                <Text numberOfLines={1} style={styles.textMainName}>{main.name}</Text>

                                <Spacer paddingT={myHeight(0.5)} />
                                {/* Price & Cal */}
                                <Text numberOfLines={1} style={[styles.textRating, { fontFamily: myFonts.bodyBold }]}
                                >{main.price} - <Text style={[styles.textRating, { color: myColors.textL6 }]}
                                >{main.cals} Cals</Text></Text>

                                <Spacer paddingT={myHeight(0.5)} />
                                {/* Description */}
                                <Text numberOfLines={3} style={[styles.textRating, { color: myColors.textL6 }]}>{main.description}</Text>
                            </View>
                            <Spacer paddingEnd={myWidth(5.5)} />
                            <ImageBackground source={main.image} style={styles.imageMain}>
                                <TouchableOpacity style={styles.containerPlus} activeOpacity={0.8}
                                    onPress={() => null}>
                                    <Image style={[styles.imagePlus]}
                                        source={require('../../../assets/home_main/plus.png')} />
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                        <Spacer paddingT={myHeight(0.86)} />

                    </View>
                )}
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background,
    },
    containerIcon: {
        backgroundColor: myColors.background,
        borderRadius: myHeight(1),
        height: myHeight(3.8),
        width: myHeight(3.8),
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLine: {
        borderTopWidth: myHeight(0.15),
        borderTopColor: myColors.divider,
        marginTop: -myHeight(0.1),
    },
    containerPlus: {
        borderRadius: myHeight(2),
        padding: myHeight(0.5),
        position: 'absolute',
        zIndex: 1,
        bottom: -myHeight(0.3),
        right: -myHeight(0.6),
        backgroundColor: myColors.primaryT,
    },


    //Text
    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },

    textName: {
        flex: 1,
        fontSize: myFontSize.medium0,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textRating: {
        flex: 1,
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.body,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textOpen: {
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.body,
        color: myColors.textL4,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textMain: {
        fontSize: myFontSize.medium0,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textMainName: {
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },




    //Image
    imageTop: {
        height: myHeight(23),
        width: '100%',
        resizeMode: 'cover',


        // backgroundColor: 'blue',
    },
    imageDots: {
        height: myHeight(3),
        width: myHeight(3),
        resizeMode: 'contain',
        tintColor: myColors.text
        // backgroundColor: 'blue',
    },
    imageSearch: {
        height: myHeight(2.15),
        width: myHeight(2.15),
        resizeMode: 'contain',
        tintColor: myColors.text
        // backgroundColor: 'blue',
    },
    imageHeart: {
        height: myHeight(2.2),
        width: myHeight(2.2),
        resizeMode: 'contain',
        tintColor: myColors.primaryT
        // backgroundColor: 'blue',
    },
    imageStar: {
        height: myHeight(1.8),
        width: myHeight(1.8),
        resizeMode: 'contain',
        tintColor: myColors.star
    },
    imageGo: {
        height: myHeight(1.8),
        width: myHeight(1.8),
        resizeMode: 'contain',
        tintColor: myColors.textL4
    },
    imageMain: {
        height: myHeight(8),
        width: myHeight(8),
        paddingEnd: myWidth(1.4),
        resizeMode: 'cover'
    },
    imagePlus: {
        height: myHeight(1.2),
        width: myHeight(1.2),
        resizeMode: 'cover'
    },




})