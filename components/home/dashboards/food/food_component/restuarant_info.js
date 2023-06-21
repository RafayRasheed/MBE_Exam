import { Image, TouchableOpacity, SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { myColors } from '../../../../../ultils/myColors'
import { myWidth, myHeight, Spacer } from '../../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../../ultils/myFonts'

export const RestaurantInfo = ({ item }) => {

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

            <ImageBackground style={{
                height: myHeight(15),
                width: '100%',
                resizeMode: 'cover',
                borderRadius: myWidth(2.5),


            }} source={item.image}>

                {/* Image Effect */}
                <View style={styles.containerImageEffect} />
                {/* Icon */}
                <View style={styles.containerIcon}>
                    <Image style={styles.imageIcon} source={item.icon} />
                    {
                        item.verified &&
                        <View style={styles.containerVeri}>
                            <Image style={styles.imageVeri} source={require('../../../../assets/home_main/dashboards/foods/check.png')} />
                        </View>
                    }
                </View>


                {/* Rating & Heart */}
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-between', paddingHorizontal: myWidth(2.5),
                    paddingTop: myHeight(0.8)

                }}>
                    {/* Rating */}
                    <View>
                        <View style={styles.containerRating}>
                            <Text style={styles.textRating}>{item.rating}</Text>
                            <Spacer paddingEnd={myWidth(1)} />
                            <Image style={styles.imageStar} source={require('../../../../assets/home_main/star.png')} />
                        </View>
                    </View>
                    {/* Heart */}
                    <TouchableOpacity activeOpacity={0.85} style={styles.containerHeart}>
                        <Image style={styles.imageHeart} source={require('../../../../assets/home_main/dashboards/heart.png')} />
                    </TouchableOpacity>
                </View>

                <Spacer paddingT={myHeight(0.8)} />


                {
                    item.deal &&

                    <View style={{
                        backgroundColor: myColors.primaryT,
                        paddingHorizontal: myWidth(3), position: 'absolute', top: myHeight(5.5),
                        borderTopEndRadius: myWidth(1.5), paddingVertical: myHeight(0.3),
                        borderBottomEndRadius: myWidth(1.5)
                    }}>
                        <Text style={styles.textDeal}>{item.deal}</Text>
                    </View>

                }
            </ImageBackground>
            <Spacer paddingT={myHeight(1)} />

            {/* Name */}
            <Text style={styles.textName}>{item.name}</Text>

            {/* Items */}
            <Text numberOfLines={1} style={styles.textItems}>{items}</Text>
            <Spacer paddingT={myHeight(0.5)} />

            {/* Delivery & Time */}
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                {/* Delivery */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.imageDelivery} source={require('../../../../assets/home_main/dashboards/foods/bike.png')} />
                    <Spacer paddingEnd={myWidth(1)} />
                    <Text numberOfLines={1} style={styles.textDelivery_Time}>{item.delivery}</Text>
                </View>
                <Spacer paddingEnd={myWidth(1)} />

                {/* Time */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.imageTime} source={require('../../../../assets/home_main/dashboards/foods/clock.png')} />
                    <Spacer paddingEnd={myWidth(1.5)} />
                    <Text numberOfLines={1} style={styles.textDelivery_Time}>{item.deliveryTime}</Text>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: myWidth(70),
        backgroundColor: myColors.background,
        marginEnd: myWidth(5.5),
        overflow: 'hidden',
        borderRadius: myWidth(2.5),

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
    containerRating: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: myColors.background,
        paddingHorizontal: myWidth(2.5),
        paddingVertical: myHeight(0.1),
        borderRadius: myWidth(1),
    },
    containerHeart: {

        backgroundColor: myColors.background,
        padding: myHeight(0.75),
        borderRadius: myWidth(5),
    },
    containerImageEffect: {
        height: myHeight(13), top: 0,
        width: myWidth(52), zIndex: 0, position: 'absolute',
        backgroundColor: '#00000020'
    },

    //Text
    textName: {
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textItems: {
        fontSize: myFontSize.small3,
        fontFamily: myFonts.bodyBold,
        color: myColors.textL4,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textDelivery_Time: {
        // flex: 1,
        fontSize: myFontSize.xxSmall,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textRating: {
        // flex: 1,
        fontSize: myFontSize.xxSmall,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textDeal: {
        fontSize: myFontSize.xSmall,
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
        height: myHeight(1.8),
        width: myHeight(1.8),
        resizeMode: 'contain',
    },
    imageHeart: {
        height: myHeight(2.2),
        width: myHeight(2.2),
        resizeMode: 'contain',
    },


})