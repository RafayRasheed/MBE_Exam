import React, { useEffect, useRef, useState } from 'react';
import { Animated, ScrollView, NativeModules, StyleSheet, TouchableOpacity, Image, View, Text, FlatList, Modal, LayoutAnimation } from 'react-native'
import { MyError, Spacer, ios, myHeight, myWidth } from '../../common';
import { myFontSize, myFonts, myLetSpacing } from '../../../ultils/myFonts';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import { myColors } from '../../../ultils/myColors';
// import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const { UIManager } = NativeModules;


if (!ios && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}
export const Status = ({ notifications, navigate }) => {
    const [notiLen, setNotiLen] = useState(notifications.length.toString())
    const [notificationVisible, setNotificationVisible] = useState(notifications.length != 0 ? [notifications[0]] : null)
    const [notificationExpand, setNotificationExpand] = useState(false)
    const [notificationsFocusID, setNotificationsFocusID] = useState(notifications.length != 0 ? notifications[0].orderID : null)
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

    return (
        <Animated.View style={[styles.containerNotification]}>
            <View>

                <GestureHandlerRootView onLayout={(event) => {
                }} style={{ flex: 1, alignItems: 'center' }} >
                    {notifications.length > 1 &&
                        <PanGestureHandler
                            onGestureEvent={(event) => {
                                const s = event.nativeEvent.translationY
                                if (s < -25) {
                                    if (!notificationExpand) {
                                        // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
                                        // LayoutAnimation.configureNext({
                                        //     "create": { "property": "opacity", "type": "linear" },
                                        //     "delete": { "property": "opacity", "type": "linear" },
                                        //     "duration": 300,
                                        //     "update": { "type": "linear" }
                                        // });
                                        setNotificationExpand(true)
                                        LayoutAnimation.configureNext({
                                            duration: 400,
                                            create: {
                                                type: LayoutAnimation.Types.linear,
                                                property: LayoutAnimation.Properties.opacity,
                                            },
                                            update: { type: LayoutAnimation.Types.linear },
                                        });
                                    }
                                }
                                else if (s > 25) {
                                    if (notificationExpand) {
                                        // LayoutAnimation.configureNext({
                                        //     "create": { "property": "opacity", "type": "linear" },
                                        //     "delete": { "property": "opacity", "type": "linear" },
                                        //     "duration": 300,
                                        //     "update": { "type": "linear" }
                                        // });
                                        setNotificationExpand(false)
                                        LayoutAnimation.configureNext({
                                            duration: 200,
                                            create: {
                                                type: LayoutAnimation.Types.linear,
                                                property: LayoutAnimation.Properties.opacity,
                                            },
                                            update: { type: LayoutAnimation.Types.linear },
                                        });
                                    }

                                }
                            }}
                        >
                            <Animated.View
                                style={{
                                    alignItems: 'center', marginBottom: myHeight(1),
                                    width: '100%'
                                }}>
                                <View>
                                    <Spacer paddingT={myHeight(0.5)} />
                                    <Image style={[styles.imageUp, notificationExpand && { transform: [{ rotate: '180deg' }] }]}
                                        source={require('../../assets/home_main/up.png')} />
                                    <Spacer paddingT={myHeight(0.5)} />
                                </View>
                                <Text style={styles.textNotiSwipe}>{notificationExpand ? 'Swipe down to see less requests' : 'Swipe up to see more requests'}</Text>
                                <View style={[styles.containerNotiCount, { right: -(myWidth(9.5) + (myWidth(1) * notiLen.length)), }]}>
                                    <Text style={styles.textNotiCount}>{notifications.length}</Text>
                                </View>
                            </Animated.View>
                        </PanGestureHandler>
                    }
                    <ScrollView bounces={false}

                        contentContainerStyle={{ flexGrow: 1 }}>
                        <Animated.View>
                            {notificationVisible &&
                                notificationVisible.map((item, i) =>

                                    <TouchableOpacity
                                        // onLayout={(event) => console.log('item', event.nativeEvent.layout.height)}
                                        activeOpacity={notificationExpand ? 0.8 : 1}
                                        onPress={() => {
                                            if (notificationExpand) {
                                                // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
                                                LayoutAnimation.configureNext({
                                                    "create": { "property": "opacity", "type": "linear" },
                                                    "delete": { "property": "opacity", "type": "linear" },
                                                    "duration": 300,
                                                    "update": { "type": "linear" }
                                                });
                                                onNotificationsFocus(item.orderID)
                                            }
                                        }
                                        }
                                        key={i}
                                        style={[styles.containerNotiItem, notificationExpand && i != 0 && { borderTopWidth: myHeight(0.085) }]}>
                                        <View style={{ flex: 1 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={[styles.textNotiItem, { fontFamily: myFonts.heading }]}>Order ID: </Text>
                                                <Text style={[styles.textNotiItem, { flex: 1 }]} numberOfLines={1} >{item.orderID}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={[styles.textNotiItem, { fontFamily: myFonts.heading }]}>Estimated Time: </Text>
                                                <Text style={[styles.textNotiItem, { flex: 1 }]} numberOfLines={1} >{item.estimateTime}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={[styles.textNotiItem, { fontFamily: myFonts.heading }]}>Status: </Text>
                                                <Text style={[styles.textNotiItem, { flex: 1 }]} numberOfLines={1} >{item.status}</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigate('TrackingNavigator')}>
                                            <Spacer paddingT={myHeight(2.15)} />
                                            <Image style={[styles.imageGo]} source={require('../../assets/home_main/go.png')} />
                                            <Spacer paddingT={myHeight(2.15)} />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                )
                            }
                        </Animated.View>
                    </ScrollView>
                </GestureHandlerRootView>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
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
    imageUp: {
        height: myHeight(3.8),
        width: myHeight(3.8),
        resizeMode: 'contain',
    },
    imageGo: {
        height: myHeight(1.72),
        paddingHorizontal: myWidth(1.86),
        resizeMode: 'contain',
        tintColor: myColors.background
    }
})