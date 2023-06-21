import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView } from 'react-native';
import { myColors } from '../../../../ultils/myColors';
import { Spacer, ios, myHeight, myWidth } from '../../../common';
import { myFonts, myLetSpacing, myFontSize } from '../../../../ultils/myFonts';
import { FoodOpenNow } from './food_data';
import { RestaurantInfo } from './food_component/restuarant_info';

export const FoodScreen = ({ navigation }) => {
    const [i, setI] = useState(0)
    const [search, setSearch] = useState(null)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{}}>
                <Spacer paddingT={myHeight(1.8)} />
                {/* Top */}
                <View style={styles.containerTop}>
                    <Image style={styles.imageLoc} source={require('../../../assets/home_main/dashboards/location.png')} />
                    <Spacer paddingEnd={myWidth(2)} />
                    <Text numberOfLines={2} style={styles.textLoc}>67 Buick boulevard Brampton Canada</Text>
                    <Spacer paddingEnd={myWidth(2)} />

                    <View style={styles.containerTopDelivery}>
                        <TouchableOpacity onPress={() => setI(0)} activeOpacity={0.6}
                            style={[styles.containerDelivery,
                            i == 0 && { backgroundColor: myColors.primaryT }]}>
                            <Image style={[styles.imageDelivery, i == 0 && { tintColor: myColors.background }]}
                                source={require('../../../assets/home_main/dashboards/delivery.png')} />

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setI(1)} activeOpacity={0.6}
                            style={[styles.containerDelivery,
                            i == 1 && { backgroundColor: myColors.primaryT }]}>
                            <Image style={[styles.imageDelivery, i == 1 && { tintColor: myColors.background }]}
                                source={require('../../../assets/home_main/dashboards/man_shop.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Mid */}
                <View style={{ paddingHorizontal: myWidth(4) }}>
                    <Spacer paddingT={myHeight(2)} />
                    {/* Let finds */}
                    <Text style={styles.textFind}>Let’s Find {'\n'}Some Foods!</Text>

                    <Spacer paddingT={myHeight(2.2)} />
                    {/* Search */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.containerSearchPortion}>
                            <Image style={styles.imageSearch} source={require('../../../assets/home_main/dashboards/search.png')} />
                            <Spacer paddingEnd={myWidth(3.5)} />
                            <TextInput placeholder=" Search Any Item"
                                placeholderTextColor={myColors.textL5}
                                autoCorrect={false}
                                selectionColor={myColors.primaryT}
                                style={styles.containerSearch}
                                cursorColor={myColors.primaryT}
                                value={search} onChangeText={setSearch}
                            // value={search} onChangeText={(val) => null}
                            />
                        </View>
                        <Spacer paddingEnd={myWidth(3.7)} />
                        {/* Filter */}
                        <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')} activeOpacity={0.6}
                            style={styles.containerFilter}>
                            <Image style={styles.imageFilter}
                                source={require('../../../assets/home_main/dashboards/filter.png')} />
                        </TouchableOpacity>
                    </View>
                    <Spacer paddingT={myHeight(3.3)} />

                    {/* Offer */}
                    <View style={styles.containerOffer}>
                        <View style={styles.containerOfferText}>
                            <Text style={styles.textOfferTitle}>Buy one get one free</Text>
                            <Spacer paddingT={myHeight(0.2)} />
                            <Text style={styles.textOfferDeadline}>Until 20 Jan</Text>
                            <Spacer paddingT={myHeight(0.2)} />
                            <TouchableOpacity onPress={() => null} activeOpacity={0.6}
                                style={styles.containerOfferButton}>
                                <Text style={styles.textOfferButton}>Get Now</Text>
                            </TouchableOpacity>
                        </View>
                        <Image style={styles.imageOfferImage}
                            source={require('../../../assets/home_main/dashboards/burger.png')} />
                    </View>
                </View>
                {/* Open Now*/}
                <View>
                    <Spacer paddingT={myHeight(3.3)} />

                    {/* Open Now */}
                    <View style={styles.containerHeading}>
                        <Text style={styles.textHeading}>Open Now</Text>
                        <TouchableOpacity style={{ paddingVertical: myHeight(0.4), paddingStart: myWidth(2) }} activeOpacity={0.6}
                            onPress={() => navigation.navigate('RestaurantAll', { name: 'Open Now', restuarants: FoodOpenNow })}>
                            <Text style={styles.textSeeAll}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer paddingT={myHeight(2)} />

                    <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: myWidth(5) }}
                        showsHorizontalScrollIndicator={false} >
                        {
                            FoodOpenNow.map((item, i) =>
                                <TouchableOpacity key={i} activeOpacity={0.8} onPress={() => navigation.navigate("RestaurantDetail", { item })}>
                                    <RestaurantInfo item={item} />
                                </TouchableOpacity>
                            )
                        }
                    </ScrollView>
                </View>

                {/* Popular Stores */}
                <View>
                    <Spacer paddingT={myHeight(2.4)} />

                    {/*Popular Stores */}
                    <View style={styles.containerHeading}>
                        <Text style={styles.textHeading}>Popular Stores</Text>
                        <TouchableOpacity style={{ paddingVertical: myHeight(0.4), paddingStart: myWidth(2) }} activeOpacity={0.6}
                            onPress={() => navigation.navigate('RestaurantAll', { name: 'Popular Stores', restuarants: FoodOpenNow })}>

                            <Text style={styles.textSeeAll}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer paddingT={myHeight(2)} />

                    <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: myWidth(4) }}
                        showsHorizontalScrollIndicator={false} >
                        {
                            FoodOpenNow.map((item, i) =>
                                <TouchableOpacity key={i} activeOpacity={0.8} onPress={() => navigation.navigate("RestaurantDetail", { item })}>
                                    <RestaurantInfo item={item} />
                                </TouchableOpacity>
                            )
                        }
                    </ScrollView>
                </View>
                <Spacer paddingT={myHeight(1.8)} />

            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background,
    },
    containerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: myWidth(4),
    },
    containerTopDelivery: {
        flexDirection: 'row',
        height: myHeight(3.76),
        width: myWidth(21),
        borderRadius: myWidth(10),
        backgroundColor: myColors.offColor4,
        overflow: 'hidden'
    },
    containerDelivery: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerFilter: {
        // height: myHeight(4.6),
        // width: myWidth(10),
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingVertical: myHeight(1.5),
        paddingHorizontal: myWidth(2.8),
        backgroundColor: myColors.primaryT,
        borderRadius: myWidth(2),

    },
    containerSearchPortion: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: myWidth(3),
        paddingVertical: myHeight(0.2),
        backgroundColor: myColors.offColor5,
        borderRadius: myWidth(3.5),
    },
    containerSearch: {
        flex: 1,
        textAlignVertical: 'center',
        paddingVertical: ios ? myHeight(1.2) : myHeight(100) > 600 ? myHeight(0.6) : myHeight(0.1),
        fontSize: myFontSize.xxSmall,
        color: myColors.text,
        includeFontPadding: false,
        fontFamily: myFonts.bodyBold,
        // lineHeight: 0,
    },
    containerOffer: {
        flexDirection: 'row',
        backgroundColor: myColors.primaryL3,
        borderRadius: myWidth(3),
        alignItems: 'center'
    },
    containerOfferButton: {
        backgroundColor: myColors.primaryT,
        borderRadius: myWidth(2.6),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: myWidth(5.8),
        paddingVertical: myHeight(0.5),
    },
    containerOfferText: {
        flex: 0.41,
        marginHorizontal: myWidth(9.3),
        marginVertical: myHeight(2.5),
        // backgroundColor: 'blue'
    },
    containerHeading: {
        paddingHorizontal: myWidth(4), alignItems: 'center',
        flexDirection: 'row', justifyContent: 'space-between'
    },

    //Text
    textLoc: {
        flex: 1,
        fontSize: myFontSize.body,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textFind: {
        fontSize: myFontSize.medium0,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textOfferTitle: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.headingIt,
        color: myColors.text3,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
        textTransform: 'uppercase',
    },
    textOfferDeadline: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.body,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textOfferButton: {
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.heading,
        color: myColors.background,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },

    textHeading: {
        fontSize: myFontSize.xxBody,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textSeeAll: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.heading,
        color: myColors.primaryT,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },



    //Image
    imageLoc: {
        width: myHeight(2.6),
        height: myHeight(2.6),
        resizeMode: 'contain',
    },
    imageDelivery: {
        // width: myHeight(2.6),
        height: myHeight(2.15),
        resizeMode: 'contain',
        tintColor: myColors.primaryT
    },
    imageFilter: {
        width: myHeight(2.15),
        height: myHeight(1.6),
        resizeMode: 'contain',
    },
    imageSearch: {
        height: myHeight(2.15),
        width: myHeight(2.15),
        resizeMode: 'contain',
        tintColor: myColors.textL5
    },
    imageOfferImage: {
        height: myHeight(23),
        width: myWidth(48),
        resizeMode: 'contain',
        position: 'absolute',
        zIndex: 2,
        right: 0,
        // backgroundColor: 'red'
    },
})