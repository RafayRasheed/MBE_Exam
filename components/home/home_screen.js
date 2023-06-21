import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, View, Text, FlatList, Modal, UIManager, LayoutAnimation } from 'react-native'
import { MyError, Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';
import { bookNow, category, dailySpecial, nearDrivers, notifications, rewards } from './home_data';
import { DailySpecial } from './home.component/daily_special';
import LinearGradient from 'react-native-linear-gradient';


import { Status } from './home.component/status';

if (!ios && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}
export const HomeScreen = ({ navigation }) => {
    const name = "MBE";
    const dotArr = []
    const [notiLen, setNotiLen] = useState(notifications.length.toString())
    const [notificationVisible, setNotificationVisible] = useState(notifications.length != 0 ? [notifications[0]] : null)
    const [notificationExpand, setNotificationExpand] = useState(false)
    const [notificationsFocusID, setNotificationsFocusID] = useState(notifications.length != 0 ? notifications[0].orderID : null)
    const [loader, setLoader] = useState(true)
    const [i, setI] = useState(0)
    const lenBook = bookNow.length;
    const width = myWidth(92)
    for (let j = 0; j < lenBook; j++) {
        dotArr.push(<View key={j} style={[styles.containerDot, { backgroundColor: j == i ? myColors.text : myColors.dot, }]} />)
    }


    function handleScroll(event) {

        const a = (event.nativeEvent.contentOffset.x) / width
        var getDecimal = a.toString().split(".")[1];
        if (getDecimal) {
            if (getDecimal[0] < 5 || getDecimal[0] > 5) {
                const r = Math.round(a)
                setI(r)
            }
        }
    }
    function onNotificationsFocus(orderID) {
        if (orderID == notificationsFocusID) {
            setNotificationExpand(false)
            return
        }
        setNotificationsFocusID(orderID)
    }
    function settingNotification() {
        const s = notifications.filter((item) => item.orderID == notificationsFocusID)
        if (s.length) {
            setNotificationVisible(s)
        } else if (notifications.length) {
            setNotificationVisible([notifications[0]])
        } else {
            setNotificationVisible([])
        }
    }
    useEffect(() => {
        if (notificationExpand) {
            setNotificationVisible(notifications)
        }
        else {
            settingNotification()
        }

    }, [notificationExpand])

    useEffect(() => {
        settingNotification()
        setNotificationExpand(false)
    }, [notificationsFocusID])

    useEffect(() => {
        settingNotification()
        const l = notifications.length
        if (l) {
            setNotiLen(l.toString())
        }
    }, [notifications])

    // React.useLayoutEffect(() => {
    //     if (loader) {
    //         navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })

    //     }
    //     else {
    //         navigation.getParent().setOptions({
    //             tabBarStyle: {
    //                 display: 'flex',
    //                 backgroundColor: myColors.background,
    //                 paddingHorizontal: myWidth(3.5),
    //                 alignItems: 'center',
    //                 justifyContent: 'center',
    //                 height: myHeight(9.5),
    //                 paddingBottom: ios ? myHeight(2.2) : myHeight(1.5),
    //                 paddingTop: myHeight(2.5),
    //             },
    //         })
    //     }

    // }, [loader])
    // return (<Test />)
    return (
        <SafeAreaView style={styles.container}>


            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                <Spacer paddingT={myHeight(3.4)} />
                {/* Morning & Loca */}
                <View style={{ paddingHorizontal: myWidth(6.75) }}>
                    <Text style={styles.textGoodM}>{`Good Morning ${name}!`}</Text>
                    {/* <Spacer paddingT={myHeight(0.4)} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.imageLoc} source={require('../assets/home_main/location.png')} />
                        <Text style={styles.textLoc}>  Work - 100 Dynamic Drive</Text>
                    </View> */}
                </View>

                <Spacer paddingT={myHeight(1.2)} />

                {/* Category */}
                <View style={styles.containerCategory}>
                    {category.map((cat, index) =>
                        <TouchableOpacity key={index} onPress={() => navigation.navigate(cat.navigate)}
                            style={{ paddingTop: myHeight(1.2), flexBasis: '24%', }} activeOpacity={0.9}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: myWidth(23), alignItems: 'center', }}>
                                    <View style={styles.containerEachCate}>
                                        <Image style={styles.imageCate} source={cat.image} />
                                    </View>
                                    <Spacer paddingT={myHeight(1)} />
                                    <Text numberOfLines={1} style={styles.textCat}>{cat.name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
                <Spacer paddingT={myHeight(2.3)} />

                {/* Book Now */}
                <View style={styles.containerTry}>
                    <LinearGradient style={styles.containerBookNow} colors={['#FFEBCD', 'rgba(255, 235, 205, 0)']} >
                        <ScrollView scrollEventThrottle={1} onScroll={handleScroll} style={{ width: myWidth(92) }} pagingEnabled horizontal showsHorizontalScrollIndicator={false}>
                            {
                                bookNow.map((item, ind) =>
                                    <View key={ind} style={{ width: myWidth(92) - 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={styles.containerBookNowText}>
                                            <Text numberOfLines={2} style={styles.textBookNowName}>{item.name}</Text>
                                            <Spacer paddingT={myHeight(3.2)} />
                                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'baseline' }} activeOpacity={0.6} onPress={() => null}>
                                                <Text style={styles.textBookNow}>Book Now    </Text>
                                                <Image style={styles.imageArrow} source={require('../assets/home_main/arrow.png')} />
                                            </TouchableOpacity>
                                        </View>
                                        <Image style={styles.imageMan} source={require('../assets/home_main/man.png')} />
                                    </View>
                                )
                            }
                        </ScrollView>
                        {/* Dot */}
                        <View style={{ position: 'absolute', zIndex: 1, left: myWidth(4.2), bottom: myHeight(1.6), flexDirection: 'row' }}>
                            {dotArr}
                        </View>
                    </LinearGradient>
                </View>


                <Spacer paddingT={myHeight(2.5)} />
                {/* Daily Special */}
                <View style={{ paddingHorizontal: myWidth(4), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.textHeading}>Daily Special</Text>
                    <TouchableOpacity style={{ paddingVertical: myHeight(0.4), paddingStart: myWidth(2) }} activeOpacity={0.6} onPress={() => null}>
                        <Text style={styles.textSeeAll}>See all</Text>
                    </TouchableOpacity>
                </View>

                <Spacer paddingT={myHeight(1.5)} />
                {/* Row */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: myWidth(3.72) }}>
                    <View style={styles.containerDailyS}>
                        {dailySpecial.map((item, i) =>
                            <TouchableOpacity key={i} activeOpacity={0.6} onPress={() => navigation.navigate('RestaurantDetail', { item })} >
                                <DailySpecial item={item} />
                            </TouchableOpacity>
                        )}
                    </View>

                </ScrollView>

                {/* Rewards */}
                <View style={{ paddingHorizontal: myWidth(4) }}>
                    <Spacer paddingT={myHeight(3)} />
                    <Text style={styles.textHeading}>Exclusive Reward</Text>
                    <Spacer paddingT={myHeight(1.15)} />
                    {rewards.map((item, i) =>
                        <View key={i}>
                            <View style={styles.containerReward}>
                                <Image style={styles.imageSpeaker} source={require('../assets/home_main/speaker.png')} />
                                <Spacer paddingEnd={myWidth(3)} />
                                <Text numberOfLines={1} style={styles.textRewardTitle}>{item.title}</Text>
                                <TouchableOpacity activeOpacity={0.6} onPress={() => null}>
                                    <Spacer paddingT={myHeight(2.15)} />
                                    <Image style={styles.imageGoReward} source={require('../assets/home_main/go.png')} />
                                    <Spacer paddingT={myHeight(2.15)} />
                                </TouchableOpacity>
                            </View>
                            <Spacer paddingT={myHeight(1.15)} />

                        </View>
                    )}
                </View>

                {/* Near Drivers */}
                <View style={{ paddingHorizontal: myWidth(4) }}>
                    <Spacer paddingT={myHeight(3)} />
                    <Text style={styles.textHeading}>Nearby Drivers</Text>
                    <Spacer paddingT={myHeight(0.15)} />
                    {nearDrivers.map((item, i) =>
                        <View key={i}>
                            {i != 0 && <View style={{ borderColor: myColors.textL4, borderTopWidth: myHeight(0.1) }} />}
                            <TouchableOpacity activeOpacity={0.6} onPress={() => null}
                                style={styles.containerNearDriver}>
                                <Image style={styles.imageDriver} source={item.image} />
                                <Spacer paddingEnd={myWidth(3)} />
                                <View style={{ flex: 1 }}>
                                    <Text numberOfLines={1} style={styles.textDriverName}>{item.name}</Text>
                                    <Text numberOfLines={1} style={styles.textDriverTime}>{item.time}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    {/* <ScrollView bounces={false} horizontal contentContainerStyle={{ width: '100%' }}>

                        <FlatList
                            data={nearDrivers}
                            ItemSeparatorComponent={() => (
                                <View style={{ borderColor: myColors.textL4, borderTopWidth: myHeight(0.1) }} />
                            )}

                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity activeOpacity={0.6} onPress={() => null}
                                        style={styles.containerNearDriver}>
                                        <Image style={styles.imageDriver} source={item.image} />
                                        <Spacer paddingEnd={myWidth(3)} />
                                        <View style={{ flex: 1 }}>
                                            <Text numberOfLines={1} style={styles.textDriverName}>{item.name}</Text>
                                            <Text numberOfLines={1} style={styles.textDriverTime}>{item.time}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                            }
                            keyExtractor={item => item.name}
                        />
                    </ScrollView> */}

                </View>
                {notifications.length > 0 && <Spacer paddingT={myHeight(20)} />}
            </ScrollView>

            <Status notifications={notifications} />
            {/* Notification Section */}

        </SafeAreaView>
    )
}














const styles = StyleSheet.create({
    container: {
        backgroundColor: myColors.background
    },
    containerCategory: {

        flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-end',
        alignItems: 'center', justifyContent: 'center', paddingHorizontal: myWidth(2)

    },
    containerEachCate: {
        padding: myHeight(1.4),
        borderRadius: myHeight(5),
        backgroundColor: myColors.primaryL,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },

    containerBookNow: {
        // width: myWidth(92),
        alignSelf: 'center', height: myHeight(19),
        borderRadius: myWidth(3),
        overflow: 'hidden',
        borderColor: myColors.textL4,


    },
    containerTry: {
        alignSelf: 'center',
        borderRadius: myWidth(3),
        backgroundColor: myColors.background,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    containerBookNowText: {
        flex: 1,
        paddingVertical: myHeight(1.8),
        paddingHorizontal: myWidth(4.7),
    },
    containerDailyS: {
        flexDirection: 'row',
    },
    containerDot: {
        width: myHeight(1.18),
        height: myHeight(1.18),
        borderRadius: myHeight(1.18),
        marginEnd: myWidth(1.1),
    },
    containerReward: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: myColors.offColor3,
        paddingHorizontal: myWidth(2.5),
        borderRadius: myHeight(2.2),
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 3,

    },
    containerNearDriver: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: myColors.background,
        paddingVertical: myHeight(1.8),

    },
    containerNotification: {
        backgroundColor: myColors.background,
        width: myWidth(100),
        maxHeight: myHeight(80),
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        borderTopStartRadius: myWidth(6),
        borderTopEndRadius: myWidth(6),
    },
    containerNotiCount: {
        paddingHorizontal: myHeight(1.2),
        paddingVertical: myHeight(0.4),
        position: 'absolute',
        backgroundColor: myColors.primaryT,
        bottom: 0,
        borderRadius: myWidth(10),

    },
    containerNotiItem: {
        flexDirection: 'row',
        width: myWidth(100),
        backgroundColor: myColors.primaryT,
        paddingVertical: myHeight(1.3),
        paddingHorizontal: myWidth(4.6),

    },










    //Text
    textGoodM: {
        fontSize: myFontSize.medium0,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textLoc: {
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.heading,
        color: myColors.textL3,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textCat: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textBookNowName: {
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textBookNow: {
        fontSize: myFontSize.xxSmall,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
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

    textRewardTitle: {
        flex: 1,
        fontSize: myFontSize.body,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,

    },
    textDriverName: {
        flex: 1,
        fontSize: myFontSize.body2,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textDriverTime: {
        flex: 1,
        fontSize: myFontSize.xxSmall,
        fontFamily: myFonts.body,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textNotiSwipe: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.heading,
        color: myColors.primaryT,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
        alignSelf: 'center'
    },
    textNotiCount: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.heading,
        color: myColors.background,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textNotiItem: {
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.body,
        color: myColors.background,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },










    //Image
    imageLoc: {
        height: myHeight(1.93),
        width: myWidth(3.25),
        resizeMode: 'contain',
    },
    imageCate: {
        height: myWidth(11),
        width: myWidth(11),
        resizeMode: 'contain',

        // height: myHeight(5.37),
        // width: myHeight(5.37),
        // resizeMode: 'cover',
    },

    imageMan: {
        borderRadius: myWidth(3),
        height: myHeight(19),
        width: myWidth(43.2),
        resizeMode: 'stretch',
    },
    imageArrow: {
        height: myHeight(1),
        width: myWidth(3),
        resizeMode: 'stretch',
    },
    imageSpeaker: {
        height: myHeight(3),
        width: myHeight(3),
        resizeMode: 'contain',
    },
    imageGoReward: {
        height: myHeight(1.72),
        paddingHorizontal: myWidth(1.86),
        resizeMode: 'contain',
    },
    imageDriver: {
        height: myHeight(4.3),
        width: myHeight(4.3),
        borderRadius: myHeight(4.3),
        resizeMode: 'contain',
    },
    imageUp: {
        height: myHeight(3.8),
        width: myHeight(3.8),
        resizeMode: 'contain',
    }

})