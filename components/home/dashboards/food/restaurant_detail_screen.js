import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { myColors } from '../../../../ultils/myColors';
import { Spacer, ios, myHeight, myWidth } from '../../../common';
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts';
import { ResCategories, mainCourse } from './food_data';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';
import { ItemInfo } from './food_component/item_info';

export const RestaurantDetail = ({ route, navigation }) => {
    const [i, setI] = useState(0)
    const [dotModal, setDotModal] = useState(false)
    const { item } = route.params
    const [searchModal, setSearchModal] = useState(false)
    const [search, setSearch] = useState(null)

    function onSearchStore() {

    }
    function onAddToFav() {

    }
    function onShare() {

    }
    function onViewStoreInfo() {

    }
    React.useLayoutEffect(() => {

        if (dotModal) {
            navigation.getParent().getParent().setOptions({ tabBarStyle: { display: 'none' } })

        }
        else {
            navigation.getParent().getParent().setOptions({
                tabBarStyle: {
                    display: 'flex',
                    backgroundColor: myColors.background,
                    paddingHorizontal: myWidth(3.5),
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: myHeight(9.5),
                    paddingBottom: ios ? myHeight(2.2) : myHeight(1.5),
                    paddingTop: myHeight(2.5),
                },
            })
        }

    }, [dotModal])

    //Component 

    return (
        <>
            <View style={styles.container}>

                {/* Top */}
                <ImageBackground imageStyle={{ borderRadius: 0 }} source={item.image} resizeMode={'cover'} style={styles.imageTop} >
                    {/* Top Arrow Search Dots */}
                    <SafeAreaView >
                        <Spacer paddingT={ios ? myHeight(1) : myHeight(1) + StatusBar.currentHeight} />
                        <View style={{ paddingHorizontal: myWidth(4), flexDirection: 'row', justifyContent: 'space-between' }}>

                            {/* Arrow */}
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} style={styles.containerIcon}>
                                <Image style={styles.imageDots} source={require('../../../assets/home_main/dashboards/back2.png')} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                {/* Search */}
                                <TouchableOpacity activeOpacity={0.7} onPress={() => setSearchModal(true)} style={styles.containerIcon}>
                                    <Image style={styles.imageSearch} source={require('../../../assets/home_main/search2.png')} />
                                </TouchableOpacity>
                                <Spacer paddingEnd={myWidth(4)} />
                                {/* Dots */}
                                <TouchableOpacity activeOpacity={0.7} onPress={() => setDotModal(true)}
                                    style={[styles.containerIcon]}>
                                    <Image style={styles.imageDots} source={require('../../../assets/home_main/dots.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                </ImageBackground>

                <Spacer paddingT={myHeight(0.4)} />
                {/* Content */}
                <View style={{
                    paddingHorizontal: myWidth(4),
                    borderRadius: myWidth(5), backgroundColor: myColors.background,
                    // marginTop: -myWidth(5)
                }}>
                    <Spacer paddingT={myHeight(1)} />

                    {/* Name */}
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text numberOfLines={1} style={styles.textName}>{item.name}</Text>
                        <TouchableOpacity style={{ paddingStart: myWidth(1), paddingVertical: myHeight(0.5) }} activeOpacity={0.6}
                            onPress={() => null}>
                            <Image style={styles.imageHeart} source={require('../../../assets/home_main/dashboards/heart_o.png')} />
                        </TouchableOpacity>
                    </View>
                    <Spacer paddingT={myHeight(0.4)} />

                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => navigation.navigate('RestaurantMoreInfo', { restaurant: item })}>
                        {/* Rating */}
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            {/* Star */}
                            <Image style={styles.imageStar} source={require('../../../assets/home_main/star.png')} />
                            <Spacer paddingEnd={myWidth(1)} />
                            {/* rating */}
                            <Text numberOfLines={1} style={styles.textRating}
                            >{item.rating} ({item.totalRating} ratings) - {item.country} - $$</Text>
                            {/* Go */}
                            <View style={{ paddingStart: myWidth(1), paddingVertical: myHeight(0.5) }} >
                                <Image style={[styles.imageGo]}
                                    source={require('../../../assets/home_main/go.png')} />
                            </View>
                        </View>
                        {/* Open until */}
                        <Text numberOfLines={1} style={styles.textOpen}>Open until 10:30pm - Tap for store information</Text>
                    </TouchableOpacity>

                    <Spacer paddingT={myHeight(0.6)} />
                </View>


                {/* Res Category */}
                <View>
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
                </View>

                <View style={styles.containerLine} />
                {/* Main Courses */}
                <ScrollView contentContainerStyle={{ paddingHorizontal: myWidth(4.1) }} showsVerticalScrollIndicator={false}>
                    <Spacer paddingT={myHeight(0.6)} />
                    <Text style={styles.textMain}>Main Courses</Text>

                    {mainCourse.map((item, i) =>
                        <TouchableOpacity key={i} activeOpacity={0.8} onPress={() => navigation.navigate('ItemDetail', { item })}>
                            <ItemInfo navigate={navigation.navigate} item={item} />
                        </TouchableOpacity>
                    )}
                </ScrollView>



            </View>


            {/* Dot  Modal */}
            {
                dotModal &&
                <TouchableOpacity activeOpacity={1} onPress={() => setDotModal(false)} style={{ height: '100%', width: '100%', position: 'absolute', justifyContent: 'flex-end', backgroundColor: '#00000030' }}>
                    <View>
                        <Animated.View
                            entering={SlideInDown.duration(300)}
                            exiting={SlideOutDown}
                            style={{
                                paddingHorizontal: myWidth(4.5),
                                backgroundColor: myColors.background,
                                borderTopStartRadius: myWidth(4),
                                borderTopEndRadius: myWidth(4),

                            }}>
                            <Spacer paddingT={myHeight(0.8)} />


                            {/* <Spacer paddingT={myHeight(1.7)} /> */}

                            {/* Search */}
                            <TouchableOpacity activeOpacity={0.8} onPress={onSearchStore} style={{ paddingVertical: myHeight(2.6), flexDirection: 'row', alignItems: "center" }}>
                                <Image source={require('../../../assets/home_main/search2.png')}
                                    style={{
                                        width: myHeight(3.2),
                                        height: myHeight(3.2),
                                        resizeMode: 'contain',
                                        tintColor: myColors.primaryT
                                    }}
                                />
                                <Spacer paddingEnd={myWidth(3)} />
                                <Text style={[styles.textCommon, {
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.bodyBold,
                                }]}>Search the store</Text>
                            </TouchableOpacity>

                            {/* Divider */}
                            <View style={{
                                width: myWidth(88) - myHeight(3.2), height: myHeight(0.15), alignSelf: 'flex-end',
                                backgroundColor: myColors.dot,
                            }} />
                            {/* Favroute */}
                            <TouchableOpacity activeOpacity={0.8} onPress={onAddToFav} style={{ paddingVertical: myHeight(2.6), flexDirection: 'row', alignItems: "center" }}>
                                <Image source={require('../../../assets/home_main/dashboards/heart_o.png')}
                                    style={{
                                        width: myHeight(3.2),
                                        height: myHeight(3.2),
                                        resizeMode: 'contain',
                                        tintColor: myColors.primaryT
                                    }}
                                />
                                <Spacer paddingEnd={myWidth(3)} />
                                <Text style={[styles.textCommon, {
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.bodyBold,
                                }]}>Add to Favorites</Text>
                            </TouchableOpacity>
                            {/* Divider */}
                            <View style={{
                                width: myWidth(88) - myHeight(3.2), height: myHeight(0.15), alignSelf: 'flex-end',
                                backgroundColor: myColors.dot,
                            }} />

                            {/* Share */}
                            <TouchableOpacity activeOpacity={0.8} onPress={onShare}
                                style={{ flexDirection: 'row', alignItems: "center", paddingVertical: myHeight(2.6) }}>
                                <Image source={require('../../../assets/home_main/share.png')}
                                    style={{
                                        width: myHeight(3.2),
                                        height: myHeight(3.2),
                                        resizeMode: 'contain',
                                        tintColor: myColors.primaryT
                                    }}
                                />
                                <Spacer paddingEnd={myWidth(3)} />
                                <Text style={[styles.textCommon, {
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.bodyBold,
                                }]}>Share</Text>
                            </TouchableOpacity>

                            {/* Divider */}
                            <View style={{
                                width: myWidth(88) - myHeight(3.2), height: myHeight(0.15), alignSelf: 'flex-end',
                                backgroundColor: myColors.dot,
                            }} />

                            {/* View Store */}
                            <TouchableOpacity activeOpacity={0.8} onPress={onViewStoreInfo}
                                style={{ flexDirection: 'row', alignItems: "center", paddingVertical: myHeight(2.6) }}>
                                <Image source={require('../../../assets/home_main/dashboards/ride/wrong.png')}
                                    style={{
                                        width: myHeight(3.2),
                                        height: myHeight(3.2),
                                        resizeMode: 'contain',
                                        tintColor: myColors.primaryT
                                    }}
                                />
                                <Spacer paddingEnd={myWidth(3)} />
                                <Text style={[styles.textCommon, {
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.bodyBold,
                                }]}>View store info</Text>
                            </TouchableOpacity>

                            {/* <Spacer paddingT={myHeight(4)} /> */}

                            <Spacer paddingT={myHeight(1)} />
                        </Animated.View>
                    </View>

                </TouchableOpacity>
            }


            {
                searchModal &&
                <SafeAreaView style={{
                    height: '100%', width: '100%', position: 'absolute', backgroundColor: myColors.background,
                    paddingTop: !ios && StatusBar.currentHeight,
                }}>
                    <Spacer paddingT={myHeight(0.5)} />
                    {/* Top */}

                    {/* Search */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: myWidth(3),
                        paddingVertical: myHeight(0.2),
                        borderRadius: myWidth(1.5),
                        backgroundColor: myColors.dot,
                        marginHorizontal: myWidth(4)

                    }}>
                        {/* Arrow */}
                        <TouchableOpacity activeOpacity={0.7} onPress={() => setSearchModal(false)} style={{}}>
                            <Image style={{
                                height: myHeight(2.5),
                                width: myHeight(2.5),
                                resizeMode: 'contain',
                                tintColor: myColors.text
                            }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                        </TouchableOpacity>
                        <Spacer paddingEnd={myWidth(2)} />
                        <TextInput placeholder=" Search Any Item"
                            placeholderTextColor={myColors.textL5}
                            autoCorrect={false}
                            selectionColor={myColors.primaryT}
                            style={{
                                flex: 1,
                                textAlignVertical: 'center',
                                paddingVertical: ios ? myHeight(0.8) : myHeight(100) > 600 ? myHeight(0.4) : myHeight(0),
                                fontSize: myFontSize.xxSmall,
                                color: myColors.text,
                                includeFontPadding: false,
                                fontFamily: myFonts.bodyBold,
                            }}
                            cursorColor={myColors.primaryT}
                            value={search} onChangeText={setSearch}
                        // value={search} onChangeText={(val) => null}
                        />
                    </View>


                    {/* Icon Empty Or Content */}
                    {
                        search ?
                            <View style={{ flex: 1 }}>
                                <ScrollView contentContainerStyle={{ paddingHorizontal: myWidth(4.1) }} showsVerticalScrollIndicator={false}>
                                    <Spacer paddingT={myHeight(1.3)} />

                                    {mainCourse.map((main, i) =>
                                        <ItemInfo key={i} plus={false} item={main} />
                                    )}
                                </ScrollView>

                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Image style={{
                                    height: myHeight(14),
                                    width: myHeight(14),
                                    resizeMode: 'contain',
                                    alignSelf: 'center',
                                }} source={require('../../../assets/home_main/dashboards/foods/iconEm.png')} />
                            </View>
                    }

                </SafeAreaView>
            }

        </>

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
        height: myHeight(27),
        width: myWidth(100),
        borderRadius: 0,
        // borderBottomStartRadius: myWidth(10),
        // borderBottomEndRadius: myWidth(10),
        // overflow: 'hidden'


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