import { Image, TouchableOpacity, SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { myColors } from '../../../../../ultils/myColors'
import { myWidth, myHeight, Spacer } from '../../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../../ultils/myFonts'

export const RestaurantFullInfo = ({ item }) => {

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
        <View style={styles.container}>

            {/* Image & Others*/}
            <View style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            }}>
                <ImageBackground style={{
                    height: myHeight(18),
                    width: '100%',
                    resizeMode: 'cover',
                    borderRadius: myWidth(4),
                    overflow: 'hidden',
                    elevation: 4,

                    backgroundColor: myColors.background,


                }} source={item.image}>

                    {/* Image Effect */}
                    <View style={styles.containerImageEffect} />

                    {/* Deal & Heart */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: myHeight(1.2)

                    }}>
                        {/* Deal */}
                        <View>
                            {
                                item.deal &&
                                <View style={{
                                    backgroundColor: myColors.primaryT,
                                    paddingHorizontal: myWidth(3),
                                    borderTopEndRadius: myWidth(1.5), paddingVertical: myHeight(0.4),
                                    borderBottomEndRadius: myWidth(1.5)
                                }}>
                                    <Text style={styles.textDeal}>{item.deal}</Text>
                                </View>

                            }

                            <Spacer paddingT={myHeight(0.8)} />
                            {/* Feature */}
                            <View style={{ flexDirection: 'row' }}>
                                {
                                    item.featured &&
                                    <View style={{
                                        backgroundColor: myColors.primaryT,
                                        paddingHorizontal: myWidth(3),
                                        borderTopEndRadius: myWidth(1.5), paddingVertical: myHeight(0.4),
                                        borderBottomEndRadius: myWidth(1.5)
                                    }}>
                                        <Text style={styles.textDeal}>{'Featured'}</Text>
                                    </View>

                                }
                            </View>
                        </View>
                        {/* Heart */}
                        <View>
                            <TouchableOpacity activeOpacity={0.85} style={styles.containerHeart}>
                                <Image style={styles.imageHeart} source={require('../../../../assets/home_main/dashboards/heart.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Spacer paddingT={myHeight(0.8)} />

                    {/* Time */}
                    <View style={styles.containerTime}>
                        <Text style={styles.textTime}>{item.deliveryTime}</Text>
                    </View>
                </ImageBackground>
            </View>

            <Spacer paddingT={myHeight(1)} />
            {/* Name & Rating */}
            <View style={{ flexDirection: 'row', }}>
                {/*icon & Name */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: "center" }}>
                    {item.featured &&

                        <Image style={styles.imageFeature} source={require('../../../../assets/home_main/dashboards/foods/feature.png')} />
                    }
                    {/* Name */}
                    <Text numberOfLines={1} style={styles.textName}>{item.name}</Text>
                </View>

                {/* Icon */}
                <View style={{ marginTop: -myHeight(4.5), marginRight: myWidth(4) }}>
                    <Image source={item.icon} style={{
                        height: myHeight(6.5),
                        width: myHeight(6.5),
                        resizeMode: 'cover',
                        borderWidth: myHeight(0.2),
                        borderColor: myColors.background,
                        borderRadius: myHeight(100),
                        overflow: 'hidden'
                    }} />

                    {
                        item.verified &&
                        <View style={{
                            position: 'absolute',
                            zIndex: 2,
                            right: myWidth(1.5),
                            bottom: myHeight(0.8),
                            backgroundColor: myColors.darkBlue,
                            padding: myHeight(0.085),
                            borderRadius: myHeight(2),
                        }}>
                            <Image style={{
                                height: myHeight(1.4),
                                width: myHeight(1.4),
                                resizeMode: 'contain',
                            }} source={require('../../../../assets/home_main/dashboards/foods/check.png')} />
                        </View>
                    }
                </View>
            </View>

            {/* Items */}
            <Text numberOfLines={1} style={styles.textItems}>{items}</Text>
            <Spacer paddingT={myHeight(0.5)} />

            {/* Delivery */}
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                {/* Delivery */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.imageDelivery} source={require('../../../../assets/home_main/dashboards/foods/bike.png')} />
                    <Spacer paddingEnd={myWidth(1)} />
                    <Text numberOfLines={1} style={styles.textDelivery_Time}>{item.delivery}</Text>
                </View>
                <Spacer paddingEnd={myWidth(1)} />
                {/* Rating */}
                <View style={styles.containerRating}>
                    <Image style={styles.imageStar} source={require('../../../../assets/home_main/star.png')} />
                    <Text style={styles.textRating}>{item.rating}<Text style={{ color: myColors.textL }}>{` (${item.totalRating})`}</Text></Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: myWidth(4),
        backgroundColor: myColors.background,
        overflow: 'hidden',

    },
    containerIcon: {
        position: 'absolute',
        zIndex: 2,
        right: myWidth(5),
        bottom: -myHeight(2),
    },
    containerVeri: {
        position: 'absolute',
        zIndex: 2,
        right: myWidth(0.7),
        bottom: -myHeight(0.1),
        backgroundColor: myColors.darkBlue,
        padding: myHeight(0.085),
        borderRadius: myHeight(2),
    },
    containerTime: {
        position: 'absolute',
        bottom: myHeight(0.8),
        left: myWidth(2),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: myColors.background,
        paddingHorizontal: myWidth(2.5),
        paddingVertical: myHeight(0.1),
        borderRadius: myWidth(1),
    },
    containerHeart: {
        marginEnd: myWidth(2),
        backgroundColor: myColors.background,
        padding: myHeight(0.85),
        borderRadius: myWidth(5),
    },
    containerImageEffect: {
        height: myHeight(18),
        width: '100%',
        top: 0,
        zIndex: 0, position: 'absolute',
        backgroundColor: '#00000020'
    },
    containerRating: {
        flexDirection: 'row',
        alignItems: 'center',

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
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textItems: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.body,
        color: myColors.textL4,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textDelivery_Time: {
        // flex: 1,
        fontSize: myFontSize.body,
        fontFamily: myFonts.bodyBold,
        color: myColors.primaryT,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textRating: {
        // flex: 1,
        fontSize: myFontSize.body2,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textTime: {
        fontSize: myFontSize.xxSmall,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textDeal: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.bodyBold,
        color: myColors.background,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },

    //Images
    imageRes: {
        height: myHeight(15),
        width: '100%',
        resizeMode: 'cover',
        borderRadius: myWidth(2.5),
    },
    imageDelivery: {
        height: myHeight(2.6),
        width: myHeight(2.6),
        resizeMode: 'contain',
    },
    imageTime: {
        height: myHeight(2),
        width: myHeight(2),
        resizeMode: 'contain',
    },
    imageIcon: {
        height: myHeight(5.5),
        width: myHeight(5.5),
        borderRadius: myHeight(4),
        resizeMode: 'contain',
        borderWidth: myHeight(0.2),
        borderColor: myColors.background,
    },
    imageVeri: {
        height: myHeight(1.2),
        width: myHeight(1.2),
        resizeMode: 'contain',
    },
    imageStar: {
        height: myHeight(2),
        width: myHeight(2),
        resizeMode: 'contain',
        marginEnd: myWidth(1.2)
    },
    imageFeature: {
        height: myHeight(2.35),
        width: myHeight(2.35),
        resizeMode: 'contain',
        marginEnd: myWidth(1.2)
    },
    imageHeart: {
        height: myHeight(2.5),
        width: myHeight(2.5),
        resizeMode: 'contain',
    },


})