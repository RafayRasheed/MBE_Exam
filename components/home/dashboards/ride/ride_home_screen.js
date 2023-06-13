import { BackHandler, Image, LayoutAnimation, Modal, NativeModules, Pressable, SafeAreaView, ScrollView, SliderBase, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { myColors } from '../../../../ultils/myColors'
import { Spacer, ios, myHeight, myWidth } from '../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, FadeIn, SlideInDown, SlideInLeft, SlideInUp, SlideOutDown, SlideOutLeft } from 'react-native-reanimated'
import { riderType } from './ride_data'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { CalenderDate } from './ride_component/calender'
import { useFocusEffect } from '@react-navigation/native'

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

if (!ios) {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}


export const RideHome = ({ route, navigation }) => {
    const curLoc = route.params ? route.params.currentLoc : null
    const dropLocation = route.params ? route.params.dropLocation : null

    const [currentLoc, setCurrentLoc] = useState(null)
    const [dropLoc, setDropLoc] = useState(null)
    const [typeIndex, setTypeIndex] = useState(0)

    const [expandRiderModal, setExpandRiderModal] = useState(false)
    const [riderTypeModal, setRiderTypeModal] = useState(false)
    const [locOnMapModal, setLocOnMapModal] = useState(false)
    const [dropOfLocModal, setDropOfModal] = useState(false)
    const [scheduleModal, setScheduleModal] = useState(false)
    const [promoModal, setPromoModal] = useState(false)
    const [cashModal, setCashModal] = useState(false)
    const [noDriverModal, setNoDriverModal] = useState(false)
    const [bookingDetailModal, setBookingDetailModal] = useState(false)
    const [scheduleBookingDetailModal, setScheduleBookingDetailModal] = useState(false)
    const [connectedToDriverModal, setConnectedToDriverModal] = useState(false)
    const [captainModal, setCaptainModal] = useState(false)
    const [cancelRideModal, setCancelRideModal] = useState(false)
    const [captainModalExpand, setCaptainModalExpand] = useState(false)
    const [feedbackModal, setFeedbackModal] = useState(false)
    const [directCallModal, setDirectCallModal] = useState(false)



    const [promoCode, setPromoCode] = useState(null)
    const [useCredit, setUseCredit] = useState(false)
    const [isCashV, setIsCashV] = useState(true)
    const [date, setDate] = useState(null)
    const [time, setTime] = useState(null)
    const [calender, setCalender] = useState(false)
    const [feedBInd, setFeedBInd] = useState(null)

    useEffect(() => {
        if (scheduleModal && !time && !date) {
            formatTime(new Date())
            formatDate(new Date())
        }
    }, [scheduleModal])

    useEffect(() => {
        setDropLoc(dropLocation)
        setCurrentLoc(curLoc)
    }, [route])

    useEffect(() => {
        if (dropLoc && currentLoc) {
            setDropOfModal(false)
            setLocOnMapModal(false)
            setRiderTypeModal(true)

        } else if (currentLoc) {
            setDropOfModal(false)
            setLocOnMapModal(true)
        }
        else {
            setDropOfModal(true)
        }
    }, [dropLoc, currentLoc])

    useEffect(() => {
        if (connectedToDriverModal) {
            setTimeout(() => {
                onDriverConnected()
            }, 2000)
        }
    }, [connectedToDriverModal])


    const feedbackTexts = [
        'It took too long to find a Captain',
        'I don’t need a ride anymore',
        'I want to change my booking details',
        'I found another ride',
        'I booked by mistake',
        'Other',
    ]

    // const [isFirst, setIsFirst] = useState(true)
    function onDirectCall() {

    }
    function onConfirmLocation() {
        setDropLoc('Defence Housing Authority, Karachi, Karachi City, Sindh 75500, Pakistan')
    }
    function onBookNow() {
        setNoDriverModal(true)
    }
    function onProceed() {
        setBookingDetailModal(true)
        setNoDriverModal(false)
    }
    function onPickupTime() {
        setScheduleBookingDetailModal(true)
        // setScheduleModal(false)
    }
    function onBookARide() {
        // setBookingDetailModal(false)
        setConnectedToDriverModal(true)

    }
    function onCall() {
        setDirectCallModal(true)
    }
    function onChat() {
        navigation.navigate('Chat')
    }
    function onClickNeedHelp() {

    }
    function onClickCancelRide() {
        setCancelRideModal(true)
    }
    function onCancelRide() {
        setCancelRideModal(false)
        setFeedbackModal(true)
    }
    // When Captain Modal Arrive
    function onDriverConnected() {
        setConnectedToDriverModal(false)
        setCaptainModal(true)
    }
    // Activate Promo Code
    function onActivateCode() {
        setPromoModal(false)
    }
    function onSubmitFeedback() {
        navigation.navigate('HomeScreen')
    }



    //Back Functions
    function onBackScheduleBookingDetails() {
        setScheduleBookingDetailModal(false)
        // setScheduleModal(true)
    }

    function onMainScreenBack() {
        if (scheduleModal) {
            setScheduleModal(false)
            return
        }
        if (connectedToDriverModal) {
            // setConnectedToDriverModal(false)
            return
        }

        // if (captainModal) {
        //     navigation.navigate('HomeScreen')
        //     return
        // }
        navigation.goBack()
    }


    const onBackPress = () => {
        if (scheduleModal) {
            setScheduleModal(false)
            return true
        }
        if (cashModal) {
            setCashModal(false)
            return true
        }
        if (promoModal) {
            setPromoModal(false)
            return true
        }
        if (connectedToDriverModal) {
            // setConnectedToDriverModal(false)
            return true
        }
        if (bookingDetailModal) {
            setBookingDetailModal(false)
            return true
        }
        if (cancelRideModal) {
            setCancelRideModal(false)
            return true
        }
        if (scheduleBookingDetailModal) {
            setScheduleBookingDetailModal(false)
            return true
        }
        if (noDriverModal) {
            setNoDriverModal(false)
            return true
        }
        if (directCallModal) {
            setDirectCallModal(false)
            return true
        }

        // if (captainModal || feedbackModal) {
        //     navigation.navigate('HomeScreen')
        //     return true
        // }
        return false
    };



    function formatTime(date) {
        const a = date.toLocaleTimeString().split(' ')
        const b = a[0].split(':')
        setTime(`${b[0]}:${b[1]} ${a[1]}`)
    }
    function formatDate(date) {
        a = date.toDateString().split(' ')
        setDate(`${a[0]}, ${a[2]} ${a[1]} ${a[3]}`)
    }





    useFocusEffect(
        React.useCallback(() => {

            BackHandler.addEventListener(
                'hardwareBackPress', onBackPress
            );
            return () =>
                BackHandler.removeEventListener(
                    'hardwareBackPress', onBackPress
                );
        }, [feedbackModal, directCallModal, cancelRideModal, noDriverModal, connectedToDriverModal, scheduleModal, cashModal, promoModal, scheduleBookingDetailModal, bookingDetailModal])
    );




    const w = myWidth(8.2)
    const offset = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value * w }],
        };
    });
    const onPressToggle = () => {
        if (!useCredit) {
            offset.value = withTiming(1, {
                duration: 200,
            });
            setTimeout(() =>
                setUseCredit(true)
                , 50)

        } else {
            offset.value = withTiming(0, {
                duration: 200,
            });
            setUseCredit(false)


        }
    };

    return (
        <>
            <SafeAreaView style={{ backgroundColor: myColors.primaryT }}></SafeAreaView>
            <SafeAreaView style={{ flex: 1, }}>
                {/* Map */}
                <View style={{ height: myHeight(100), width: myWidth(100) }} activeOpacity={1}
                    onPress={() => null}>
                    <MapView
                        zoomEnabled
                        style={{
                            ...StyleSheet.absoluteFillObject,
                        }}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
                {/* Back */}
                {(!directCallModal && !noDriverModal && !connectedToDriverModal && !feedbackModal) &&
                    <View style={{ position: 'absolute' }}>
                        <Spacer paddingT={myHeight(0.7)} />
                        <TouchableOpacity style={{
                            height: myHeight(5),
                            width: myHeight(7),
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                            onPress={onMainScreenBack} activeOpacity={0.7}>
                            <Image style={{
                                height: myHeight(3),
                                width: myHeight(3) * 1.4,
                                resizeMode: "contain",
                                tintColor: myColors.text
                            }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                        </TouchableOpacity>
                    </View>}

            </SafeAreaView>


            {/*Rider Type OR pickup location */}
            {riderTypeModal &&

                <Animated.View
                    entering={SlideInDown.duration(800).delay(500)}
                    exiting={SlideOutDown}
                    style={{
                        display: captainModal || scheduleModal || noDriverModal || bookingDetailModal || scheduleBookingDetailModal ? 'none' : 'flex',
                        maxHeight: myHeight(80),
                        paddingHorizontal: myWidth(4.5),
                        borderTopStartRadius: myWidth(2.5),
                        borderTopEndRadius: myWidth(2.5),
                        backgroundColor: myColors.background,
                        width: "100%", position: 'absolute', bottom: 0,

                    }}
                >
                    <View style={{
                        flex: 1
                    }}>

                        <GestureHandlerRootView style={{
                            flex: 1,

                        }}>

                            <PanGestureHandler
                                onGestureEvent={(event) => {
                                    const s = event.nativeEvent.translationY
                                    if (s < -25) {
                                        if (!expandRiderModal) {
                                            setExpandRiderModal(true)
                                            // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)

                                            LayoutAnimation.configureNext({
                                                "create": { "property": "opacity", "type": "linear" },
                                                "delete": { "property": "opacity", "type": "linear" },
                                                "duration": 200,
                                                "update": { "type": "linear" }
                                            });
                                        }
                                    }
                                    else if (s > 25) {
                                        if (expandRiderModal) {
                                            setExpandRiderModal(false)
                                            LayoutAnimation.configureNext({
                                                "create": { "property": "opacity", "type": "linear" },
                                                "delete": { "property": "opacity", "type": "linear" },
                                                "duration": 200,
                                                "update": { "type": "linear" }
                                            });
                                            if (typeIndex > 2) {
                                                setTypeIndex(0)
                                            }
                                        }

                                    }
                                }}>
                                {/* Top Text */}
                                <View>

                                    <Spacer paddingT={myHeight(0.8)} />

                                    {/* Line */}
                                    <View style={{
                                        width: myWidth(30), height: myHeight(0.7),
                                        backgroundColor: myColors.dot, borderRadius: myHeight(2),
                                        alignSelf: 'center',
                                    }} />
                                    <Spacer paddingT={myHeight(0.7)} />
                                    {/* Select Ride */}
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.body2,
                                            fontFamily: myFonts.heading,
                                        }
                                    ]}>Select Rideshare Type</Text>
                                    {/* Choose a type */}
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xxSmall,
                                            fontFamily: myFonts.body,
                                        }
                                    ]}>Choose a type or swipe up for more</Text>



                                    <Spacer paddingT={myHeight(1.2)} />
                                </View>
                            </PanGestureHandler>
                        </GestureHandlerRootView>

                        {/* Rider Type List */}
                        <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
                            {
                                riderType.slice(0, expandRiderModal ? riderType.length : 3).map((item, i) =>
                                    <Animated.View key={i}
                                    // entering={SlideInLeft.delay(1300 + (i * 200)).duration(300)}
                                    >
                                        <TouchableOpacity activeOpacity={1} onPress={() => setTypeIndex(i)}
                                            style={{
                                                flexDirection: 'row', alignItems: 'center',
                                                backgroundColor: i == typeIndex ? myColors.primaryL5 : myColors.background,
                                                borderWidth: myHeight(0.07),
                                                borderColor: i == typeIndex ? myColors.primaryT : myColors.background,
                                                paddingHorizontal: myWidth(2.3), paddingVertical: myHeight(0.6),
                                                marginVertical: myHeight(0.7)
                                            }}>
                                            {/* Car Image */}
                                            <View style={{
                                                padding: myHeight(0.5),
                                                borderRadius: myHeight(4),
                                                paddingHorizontal: myHeight(0.6),
                                                backgroundColor: myColors.primaryL4
                                            }}>
                                                <Image source={item.image}
                                                    style={{
                                                        width: myHeight(2.7),
                                                        height: myHeight(2.7) * 1.12,
                                                        resizeMode: 'contain',
                                                    }}
                                                />
                                            </View>
                                            <Spacer paddingEnd={myWidth(2.5)} />

                                            {/* Name & Capacity */}
                                            <View style={{ flex: 1 }}>
                                                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                                    <Text style={[
                                                        styles.textCommon,
                                                        {
                                                            fontSize: myFontSize.body2,
                                                            fontFamily: myFonts.heading,
                                                            color: myColors.text
                                                        }
                                                    ]}>{item.name}</Text>
                                                    <Spacer paddingEnd={myWidth(3)} />
                                                    <Image source={item.icon}
                                                        style={{
                                                            width: myHeight(2.2),
                                                            height: myHeight(2.2),
                                                            resizeMode: 'contain',
                                                        }}
                                                    />
                                                </View>
                                                <Text style={[
                                                    styles.textCommon,
                                                    {
                                                        fontSize: myFontSize.xxSmall,
                                                        fontFamily: myFonts.body,
                                                        color: myColors.textL5
                                                    }
                                                ]}>Seating Capacity: {item.capacity}</Text>
                                            </View>

                                            {/* Price & Country */}
                                            <View style={{ alignItems: 'flex-end' }}>
                                                <Text style={[
                                                    styles.textCommon,
                                                    {
                                                        fontSize: myFontSize.body2,
                                                        fontFamily: myFonts.heading,
                                                        color: myColors.text
                                                    }
                                                ]}>{item.price}</Text>

                                                <Text style={[
                                                    styles.textCommon,
                                                    {
                                                        fontSize: myFontSize.xxSmall,
                                                        fontFamily: myFonts.body,
                                                        color: myColors.textL5
                                                    }
                                                ]}>{item.country}</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </Animated.View>
                                )
                            }
                        </ScrollView>

                        <Spacer paddingT={myHeight(3)} />
                        {/* Cash & Promo Code Button */}
                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                            {/* Cash Button */}
                            <TouchableOpacity activeOpacity={0.7} onPress={() => setCashModal(true)}
                                style={{
                                    paddingHorizontal: myWidth(2.3),
                                    backgroundColor: myColors.offColor6,
                                    paddingVertical: myHeight(1), borderRadius: myHeight(1),
                                    flexDirection: 'row', alignItems: 'center',
                                    width: '46%', justifyContent: 'space-between',
                                }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {isCashV ? <Image
                                        source={require('../../../assets/home_main/dashboards/ride/cash.png')}
                                        style={{
                                            width: myHeight(1.7),
                                            height: myHeight(1.7),
                                            resizeMode: 'contain',
                                            tintColor: myColors.text
                                        }}
                                    /> :
                                        <Image
                                            source={require('../../../assets/home_main/dashboards/ride/visa.png')}
                                            style={{
                                                width: myHeight(1.2) * 2.5,
                                                height: myHeight(1.2),
                                                resizeMode: 'contain',
                                            }}
                                        />}
                                    <Spacer paddingEnd={myWidth(3)} />
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xxSmall,
                                            fontFamily: myFonts.heading,
                                        }
                                    ]}>{isCashV ? 'CASH' : 'CARD'}</Text>
                                </View>
                                <Image source={require('../../../assets/home_main/go.png')}
                                    style={{
                                        width: myHeight(1.2),
                                        height: myHeight(1.2),
                                        resizeMode: 'contain',
                                        tintColor: myColors.text,
                                        transform: [{ rotate: '90deg' }]
                                    }}
                                />
                            </TouchableOpacity>

                            {/* Promo Code Button */}
                            <TouchableOpacity activeOpacity={0.7} onPress={() => setPromoModal(true)}
                                style={{
                                    paddingHorizontal: myWidth(2.3),
                                    backgroundColor: myColors.offColor6,
                                    paddingVertical: myHeight(1), borderRadius: myHeight(1),
                                    flexDirection: 'row', alignItems: 'center',
                                    width: '46%', justifyContent: 'space-between',
                                }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/home_main/dashboards/ride/discount.png')}
                                        style={{
                                            width: myHeight(1.9),
                                            height: myHeight(1.9),
                                            resizeMode: 'contain',
                                            tintColor: myColors.primaryT
                                        }}
                                    />
                                    <Spacer paddingEnd={myWidth(2)} />
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xxSmall,
                                            fontFamily: myFonts.heading,
                                            color: promoCode ? myColors.text : myColors.textL3
                                        }
                                    ]}>{promoCode ? promoCode : 'PROMO CODE'}</Text>
                                </View>
                                <Image source={require('../../../assets/home_main/go.png')}
                                    style={{
                                        width: myHeight(1.2),
                                        height: myHeight(1.2),
                                        resizeMode: 'contain',
                                        tintColor: myColors.text,
                                        transform: [{ rotate: '90deg' }]
                                    }}
                                />
                            </TouchableOpacity>
                        </View>

                        <Spacer paddingT={myHeight(2)} />
                        {/* Schedule & Book Now Code Button */}
                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                            {/* Schedule Button */}
                            <TouchableOpacity activeOpacity={0.7} onPress={() => setScheduleModal(true)}
                                style={{
                                    borderRadius: myHeight(1), height: myHeight(5),
                                    backgroundColor: myColors.offColor7,
                                    paddingHorizontal: myWidth(5),
                                    flexDirection: 'row', alignItems: 'center',
                                    width: '48.7%', justifyContent: 'space-between',
                                }}>
                                <Image source={require('../../../assets/home_main/dashboards/ride/carwaiting.png')}
                                    style={{
                                        height: myHeight(3),
                                        width: myHeight(3) * 1.5,
                                        resizeMode: 'contain',
                                        tintColor: myColors.text
                                    }}
                                />

                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.heading,
                                        color: myColors.text
                                    }
                                ]}>Schedule</Text>
                            </TouchableOpacity>

                            {/* Book Now Button */}
                            <TouchableOpacity activeOpacity={0.7} onPress={onBookNow}
                                style={{
                                    backgroundColor: myColors.primaryT,
                                    height: myHeight(5), borderRadius: myHeight(1),
                                    alignItems: 'center',
                                    width: '48.7%', justifyContent: 'center',
                                }}>

                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.heading,
                                        color: myColors.background,
                                    }
                                ]}>Book Now</Text>

                            </TouchableOpacity>
                        </View>
                        <Spacer paddingT={myHeight(4)} />
                    </View>

                </Animated.View>
            }

            {/* pickup location */}
            {locOnMapModal &&
                <View style={{
                    position: 'absolute', zIndex: 1, bottom: 0, width: '100%',
                    borderTopStartRadius: myWidth(2.5),
                    borderTopEndRadius: myWidth(2.5),
                    backgroundColor: myColors.background,
                    paddingHorizontal: myWidth(4),
                }}>
                    <Spacer paddingT={myHeight(1.5)} />
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body,
                        fontFamily: myFonts.heading,
                    }]}>Set your address spot</Text>
                    <Spacer paddingT={myHeight(1.5)} />

                    <View style={{
                        borderTopWidth: myHeight(0.1),
                        borderColor: myColors.offColor2
                    }} />
                    <Spacer paddingT={myHeight(2.5)} />

                    <TouchableOpacity style={{
                        backgroundColor: myColors.primaryT,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: myHeight(1.2)
                    }}
                        onPress={onConfirmLocation} activeOpacity={0.7}>
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.heading,
                            color: myColors.background,
                        }]}>Confirm Location</Text>
                    </TouchableOpacity>

                    <Spacer paddingT={myHeight(4)} />

                </View>
            }

            {
                dropOfLocModal &&
                <View style={{
                    position: 'absolute', zIndex: 1, bottom: 0,
                    width: '100%', borderTopStartRadius: myWidth(2),
                    borderTopEndRadius: myWidth(2),
                    backgroundColor: myColors.background,
                    paddingHorizontal: myWidth(4),
                }}>
                    <Spacer paddingT={myHeight(3.2)} />
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.xBody,
                        fontFamily: myFonts.bodyBold,
                    }]}>Hi, MBE</Text>
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.xxSmall,
                        fontFamily: myFonts.body,
                    }]}>Hope you’re having a great day!</Text>

                    <Spacer paddingT={myHeight(2.1)} />

                    <TouchableOpacity style={{
                        borderWidth: myHeight(0.1),
                        borderColor: myColors.primaryT,
                        padding: myHeight(1),
                    }}
                        onPress={() => navigation.navigate('DestinationScreen')} activeOpacity={0.7}>
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.xxSmall,
                            fontFamily: myFonts.body,
                        }]}>Enter your Drop off Location</Text>
                    </TouchableOpacity>

                    <Spacer paddingT={myHeight(4)} />

                </View>
            }




            {/* Schedule Modal */}
            {
                scheduleModal &&
                <Animated.View
                    entering={SlideInDown.duration(300)}
                    style={{
                        display: scheduleBookingDetailModal ? 'none' : 'flex',
                        paddingHorizontal: myWidth(4.5),
                        backgroundColor: myColors.background,
                        width: "100%", position: 'absolute', bottom: 0,
                        borderTopStartRadius: myWidth(4),
                        borderTopEndRadius: myWidth(4),
                    }}>

                    <Spacer paddingT={myHeight(1.5)} />

                    <Text style={[
                        styles.textCommon,
                        {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.heading,
                        }
                    ]}>Pickup date and time</Text>
                    <Text style={[
                        styles.textCommon,
                        {
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.body,
                        }
                    ]}>Select date and time to proceed further</Text>
                    <Spacer paddingT={myHeight(1.5)} />

                    {/* DIVIDER */}
                    <View style={{
                        borderTopWidth: myHeight(0.08),
                        borderColor: myColors.offColor2, width: '100%'
                    }} />
                    {/* Date */}
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setCalender(true)}>

                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.heading,
                                color: myColors.primaryT,
                                alignSelf: 'center',
                                paddingVertical: myHeight(1.2)
                            }
                        ]}>{date}</Text>
                    </TouchableOpacity>


                    {/* DIVIDER */}
                    <View style={{
                        borderTopWidth: myHeight(0.08),
                        borderColor: myColors.offColor2, width: '100%'
                    }} />
                    {/* Time */}
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setCalender('time')}>

                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.heading,
                                color: myColors.primaryT,
                                alignSelf: 'center',
                                paddingVertical: myHeight(1.2)
                            }
                        ]}>{time}</Text>
                    </TouchableOpacity>


                    <Spacer paddingT={myHeight(2)} />

                    {/* Pickup Time Button */}
                    <TouchableOpacity activeOpacity={0.8} onPress={onPickupTime}
                        style={{
                            backgroundColor: myColors.primaryT,
                            borderRadius: myHeight(0.5),
                            paddingVertical: myHeight(1.3),
                            alignItems: 'center',
                            width: '100%', justifyContent: 'center',
                        }}>

                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body,
                                fontFamily: myFonts.heading,
                                color: myColors.background,
                            }
                        ]}>Set Pickup Time</Text>

                    </TouchableOpacity>
                    <Spacer paddingT={myHeight(4)} />


                </Animated.View>
            }
            {/* <ScheduleModalComp /> */}




            {/* No Driver Modal */}
            {
                noDriverModal &&
                <View
                    style={{

                        backgroundColor: '#00000030',
                        height: myHeight(100), width: myWidth(100),
                        borderTopStartRadius: myWidth(4),
                        borderTopEndRadius: myWidth(4),
                        position: 'absolute',
                    }}

                >
                    <TouchableOpacity activeOpacity={1}
                        style={{
                            flex: 1, paddingHorizontal: myWidth(4.5),
                        }}
                        onPress={() => setNoDriverModal(false)}
                    >
                    </TouchableOpacity>
                    <Animated.View
                        entering={SlideInDown.duration(300)}
                        style={{
                            alignItems: 'center',
                            backgroundColor: myColors.background,
                            width: "100%", position: 'absolute', bottom: 0,
                            borderTopStartRadius: myWidth(4),
                            borderTopEndRadius: myWidth(4),
                        }}>

                        <Spacer paddingT={myHeight(1.5)} />

                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.heading,
                                alignSelf: 'center'
                            }
                        ]}>Select vehicle type</Text>

                        <Spacer paddingT={myHeight(1.2)} />
                        {/* DIVIDER */}
                        <View style={{
                            borderTopWidth: myHeight(0.08),
                            borderColor: myColors.text, width: '100%',
                        }} />

                        <Spacer paddingT={myHeight(0.5)} />
                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.xxSmall,
                                fontFamily: myFonts.body,
                                alignSelf: 'center'
                            }
                        ]}>No Driver Available</Text>

                        <Spacer paddingT={myHeight(1.5)} />

                        {/* Car Image */}
                        <View style={{
                            paddingVertical: myHeight(0.7),
                            borderRadius: myHeight(4),
                            paddingHorizontal: myHeight(1),
                            borderWidth: myHeight(0.08),
                            borderColor: myColors.text2,
                            backgroundColor: myColors.primaryL4
                        }}>
                            <Image source={riderType[typeIndex].image}
                                style={{
                                    width: myHeight(4.7),
                                    height: myHeight(4.7) * 1.12,
                                    resizeMode: 'contain',
                                }}
                            />
                        </View>

                        <Spacer paddingT={myHeight(1.5)} />
                        {/* cat name */}
                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body,
                                fontFamily: myFonts.body,
                                alignSelf: 'center',
                                color: myColors.primaryT
                            }
                        ]}>{riderType[typeIndex].name}</Text>

                        <Spacer paddingT={myHeight(1.1)} />
                        {/* Proceed Button */}
                        <TouchableOpacity activeOpacity={0.8} onPress={onProceed}
                            style={{
                                backgroundColor: myColors.primaryT,
                                borderRadius: myHeight(0.5),
                                paddingVertical: myHeight(1.2),
                                width: '91%', justifyContent: 'center',
                                alignItems: 'center',
                            }}>

                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.body,
                                    fontFamily: myFonts.heading,
                                    color: myColors.background,
                                }
                            ]}>Proceed</Text>

                        </TouchableOpacity>
                        <Spacer paddingT={myHeight(4)} />

                    </Animated.View>

                </View>
            }




            {/* Calender */}
            {
                calender &&
                <CalenderDate show={setCalender} time={calender == 'time' ? true : null} value={calender == 'time' ? formatTime : formatDate} />
            }





            {/* Booking Detail */}
            {
                bookingDetailModal &&
                <View style={{
                    display: captainModal || connectedToDriverModal ? 'none' : 'flex',
                    backgroundColor: 'transparent', height: '100%',
                    width: '100%', position: 'absolute', zIndex: 0
                }}>
                    <SafeAreaView style={{ backgroundColor: 'transparent' }}></SafeAreaView>

                    <SafeAreaView style={{
                        flex: 1,
                    }}>

                        {/* Top */}
                        <View style={{
                            width: "100%", flexDirection: 'row',
                            backgroundColor: myColors.background,
                            paddingHorizontal: myWidth(3), paddingVertical: myHeight(1.5)
                        }}>

                            {/* <Spacer paddingT={myHeight(0.7)} /> */}
                            <TouchableOpacity style={{
                            }}
                                onPress={() => setBookingDetailModal(false)} activeOpacity={0.7}>
                                <Image style={{
                                    height: myHeight(3),
                                    width: myHeight(3) * 1.4,
                                    resizeMode: "contain",
                                    tintColor: myColors.text,
                                }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                            </TouchableOpacity>

                            <Spacer paddingEnd={myWidth(3)} />
                            {/* Current Location */}
                            <View style={{ flexDirection: 'row', marginTop: myHeight(0.4), flex: 1 }}>
                                <View style={{
                                    width: myHeight(1.4), height: myHeight(1.4),
                                    borderRadius: myHeight(1), marginTop: myHeight(0.4),
                                    backgroundColor: myColors.primaryT,
                                }} />
                                <Spacer paddingEnd={myWidth(1.5)} />
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body,
                                        fontFamily: myFonts.body,
                                        color: myColors.text
                                    }
                                ]}>{currentLoc}</Text>

                            </View>


                        </View>

                        {/* Modal */}
                        <Animated.View
                            entering={SlideInDown.duration(700).delay(100)}
                            // exiting={SlideOutDown}
                            style={{

                                paddingHorizontal: myWidth(4.5),
                                backgroundColor: myColors.background,
                                width: "100%", position: 'absolute', bottom: 0,
                                borderTopStartRadius: myWidth(4),
                                borderTopEndRadius: myWidth(4), zIndex: 1,
                            }}
                        >

                            <Spacer paddingT={myHeight(1.7)} />
                            {/* Select Ride */}
                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.heading,
                                }
                            ]}>Set your pickup spot</Text>
                            {/* Select your */}
                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.xxSmall,
                                    fontFamily: myFonts.body,
                                }
                            ]}>Select your exact pickup point</Text>



                            <Spacer paddingT={myHeight(1.2)} />
                            <View style={{
                                borderTopWidth: myHeight(0.08),
                                borderColor: myColors.offColor2, width: '100%'
                            }} />

                            <Spacer paddingT={myHeight(1.2)} />
                            {/* Location */}
                            <View style={{ flexDirection: 'row' }}>
                                {/* location image */}
                                <View style={{
                                    width: myHeight(3), height: myHeight(3),
                                    borderRadius: myHeight(2), justifyContent: 'center',
                                    backgroundColor: myColors.primaryL2, alignItems: 'center'
                                }}>
                                    <Image style={{
                                        width: myHeight(2),
                                        height: myHeight(2),
                                        resizeMode: 'contain',

                                    }}
                                        source={require('../../../assets/home_main/dashboards/location.png')} />
                                </View>
                                <Spacer paddingEnd={myWidth(2)} />
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        flex: 1,
                                        fontSize: myFontSize.body,
                                        fontFamily: myFonts.body,
                                        color: myColors.textL6
                                    }
                                ]}>{dropLoc}</Text>
                            </View>
                            <Spacer paddingT={myHeight(1.2)} />

                            {/* Divider */}
                            <View style={{
                                borderTopWidth: myHeight(0.08),
                                borderColor: myColors.offColor2, width: '100%'
                            }} />

                            <Spacer paddingT={myHeight(1.2)} />
                            {/* Rider */}
                            <TouchableOpacity activeOpacity={1}
                                style={{
                                    flexDirection: 'row', alignItems: 'center',
                                    paddingVertical: myHeight(0.6),
                                    marginVertical: myHeight(0.7)
                                }}>
                                {/* Car Image */}
                                <View style={{
                                    padding: myHeight(0.5),
                                    borderRadius: myHeight(4),
                                    paddingHorizontal: myHeight(0.6),
                                    backgroundColor: myColors.primaryL4
                                }}>
                                    <Image source={riderType[typeIndex].image}
                                        style={{
                                            width: myHeight(2.7),
                                            height: myHeight(2.7) * 1.12,
                                            resizeMode: 'contain',
                                        }}
                                    />
                                </View>
                                <Spacer paddingEnd={myWidth(2.5)} />

                                {/* Name & Capacity */}
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                        <Text style={[
                                            styles.textCommon,
                                            {
                                                fontSize: myFontSize.body2,
                                                fontFamily: myFonts.heading,
                                                color: myColors.text
                                            }
                                        ]}>{riderType[typeIndex].name}</Text>
                                        <Spacer paddingEnd={myWidth(3)} />
                                        <Image source={riderType[typeIndex].icon}
                                            style={{
                                                width: myHeight(2.2),
                                                height: myHeight(2.2),
                                                resizeMode: 'contain',
                                            }}
                                        />
                                    </View>
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xxSmall,
                                            fontFamily: myFonts.body,
                                            color: myColors.textL5
                                        }
                                    ]}>Seating Capacity: {riderType[typeIndex].capacity}</Text>
                                </View>

                                {/* Price & Country */}
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.body2,
                                            fontFamily: myFonts.heading,
                                            color: myColors.text
                                        }
                                    ]}>{riderType[typeIndex].price}</Text>

                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xxSmall,
                                            fontFamily: myFonts.body,
                                            color: myColors.textL5
                                        }
                                    ]}>{riderType[typeIndex].country}</Text>
                                </View>
                            </TouchableOpacity>

                            <Spacer paddingT={myHeight(1.5)} />

                            {/* M Rie & Toggle Buttom */}
                            {
                                useCredit &&
                                <View style={{ flexDirection: 'row', }}>
                                    {/* M-RIDE */}
                                    <View>
                                        <View style={{
                                            borderRadius: myWidth(1),
                                            paddingHorizontal: myWidth(2),
                                            paddingVertical: myHeight(0.3),
                                            backgroundColor: myColors.primaryT
                                        }}>
                                            <Text style={[
                                                styles.textCommon,
                                                {
                                                    fontSize: myFontSize.xSmall,
                                                    fontFamily: myFonts.heading,
                                                    color: myColors.background,
                                                }
                                            ]}>M-Ride</Text>
                                        </View>
                                    </View>
                                    <Spacer paddingEnd={myWidth(4)} />
                                    {/* M-Ride Pay */}
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            flex: 1,
                                            fontSize: myFontSize.xSmall,
                                            fontFamily: myFonts.bodyBold,
                                        }
                                    ]}>M-Ride Pay {'\n'}<Text style={{ fontFamily: myFonts.body, }}>Use Credit first</Text></Text>

                                    {/* Price & Toggle */}
                                    <View style={{ flexDirection: 'row', }}>
                                        {/* Price */}
                                        <Text style={[
                                            styles.textCommon,
                                            {
                                                fontSize: myFontSize.body2,
                                                fontFamily: myFonts.headingBold,
                                                color: myColors.text,
                                            }
                                        ]}>{riderType[typeIndex].price}</Text>
                                        <Spacer paddingEnd={myWidth(3)} />

                                        {/* Toggle */}
                                        <TouchableOpacity style={{}} activeOpacity={0.9} onPress={onPressToggle} >
                                            <Animated.View style={{
                                                width: myWidth(14),
                                                height: myHeight(2.6),
                                                backgroundColor: useCredit ? myColors.primaryT : myColors.offColor7,
                                                borderRadius: myHeight(2),
                                                justifyContent: 'center',
                                                paddingHorizontal: myWidth(1),
                                            }} >

                                                <Animated.View style={[{
                                                    height: myHeight(2),
                                                    width: myHeight(2),
                                                    backgroundColor: myColors.background,
                                                    borderRadius: myHeight(2),
                                                    borderWidth: myHeight(0.06),

                                                }, animatedStyles]} />
                                            </Animated.View>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            }

                            <Spacer paddingT={myHeight(2)} />
                            {/* Cash & Promo Code Button */}
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                {/* Cash Button */}
                                <TouchableOpacity activeOpacity={0.7} onPress={() => setCashModal(true)}
                                    style={{
                                        paddingHorizontal: myWidth(2.3),
                                        backgroundColor: myColors.offColor6,
                                        paddingVertical: myHeight(1), borderRadius: myHeight(1),
                                        flexDirection: 'row', alignItems: 'center',
                                        width: '46%', justifyContent: 'space-between',
                                    }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        {isCashV ? <Image
                                            source={require('../../../assets/home_main/dashboards/ride/cash.png')}
                                            style={{
                                                width: myHeight(1.7),
                                                height: myHeight(1.7),
                                                resizeMode: 'contain',
                                                tintColor: myColors.text
                                            }}
                                        /> :
                                            <Image
                                                source={require('../../../assets/home_main/dashboards/ride/visa.png')}
                                                style={{
                                                    width: myHeight(1.2) * 2.5,
                                                    height: myHeight(1.2),
                                                    resizeMode: 'contain',
                                                }}
                                            />}
                                        <Spacer paddingEnd={myWidth(3)} />
                                        <Text style={[
                                            styles.textCommon,
                                            {
                                                fontSize: myFontSize.xxSmall,
                                                fontFamily: myFonts.heading,
                                            }
                                        ]}>{isCashV ? 'CASH' : 'CARD'}</Text>
                                    </View>
                                    <Image source={require('../../../assets/home_main/go.png')}
                                        style={{
                                            width: myHeight(1.2),
                                            height: myHeight(1.2),
                                            resizeMode: 'contain',
                                            tintColor: myColors.text,
                                            transform: [{ rotate: '90deg' }]
                                        }}
                                    />
                                </TouchableOpacity>

                                {/* Promo Code Button */}
                                <TouchableOpacity activeOpacity={0.7} onPress={() => setPromoModal(true)}
                                    style={{
                                        paddingHorizontal: myWidth(2.3),
                                        backgroundColor: myColors.offColor6,
                                        paddingVertical: myHeight(1), borderRadius: myHeight(1),
                                        flexDirection: 'row', alignItems: 'center',
                                        width: '46%', justifyContent: 'space-between',
                                    }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../../../assets/home_main/dashboards/ride/discount.png')}
                                            style={{
                                                width: myHeight(1.9),
                                                height: myHeight(1.9),
                                                resizeMode: 'contain',
                                                tintColor: myColors.primaryT
                                            }}
                                        />
                                        <Spacer paddingEnd={myWidth(2)} />
                                        <Text style={[
                                            styles.textCommon,
                                            {
                                                fontSize: myFontSize.xxSmall,
                                                fontFamily: myFonts.heading,
                                                color: promoCode ? myColors.text : myColors.textL3
                                            }
                                        ]}>{promoCode ? promoCode : 'PROMO CODE'}</Text>
                                    </View>
                                    <Image source={require('../../../assets/home_main/go.png')}
                                        style={{
                                            width: myHeight(1.2),
                                            height: myHeight(1.2),
                                            resizeMode: 'contain',
                                            tintColor: myColors.text,
                                            transform: [{ rotate: '90deg' }]
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Spacer paddingT={myHeight(2)} />



                            {/* Book a ride Button */}
                            <TouchableOpacity activeOpacity={0.7} onPress={onBookARide}
                                style={{
                                    backgroundColor: myColors.primaryT,
                                    height: myHeight(5), borderRadius: myHeight(1),
                                    alignItems: 'center',
                                    width: '100%', justifyContent: 'center',
                                }}>

                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.heading,
                                        color: myColors.background,
                                    }
                                ]}>Book a ride</Text>

                            </TouchableOpacity>
                            <Spacer paddingT={myHeight(4)} />

                        </Animated.View>
                    </SafeAreaView>


                </View>

            }

            {/*Schedule Booking Detail */}
            {
                scheduleBookingDetailModal &&
                <View style={{
                    display: captainModal || connectedToDriverModal ? 'none' : 'flex',
                    backgroundColor: 'transparent', height: '100%',
                    width: '100%', position: 'absolute', zIndex: 0
                }}>
                    <SafeAreaView style={{ backgroundColor: 'transparent' }}></SafeAreaView>

                    <SafeAreaView style={{
                        flex: 1
                    }}>

                        {/* Top */}
                        <View style={{
                            width: "100%", flexDirection: 'row',
                            backgroundColor: myColors.background,
                            paddingHorizontal: myWidth(3), paddingVertical: myHeight(1.5)
                        }}>

                            {/* <Spacer paddingT={myHeight(0.7)} /> */}
                            <TouchableOpacity style={{
                            }}
                                onPress={onBackScheduleBookingDetails} activeOpacity={0.7}>
                                <Image style={{
                                    height: myHeight(3),
                                    width: myHeight(3) * 1.4,
                                    resizeMode: "contain",
                                    tintColor: myColors.text,
                                }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                            </TouchableOpacity>

                            <Spacer paddingEnd={myWidth(3)} />
                            {/* Current Location */}
                            <View style={{ flexDirection: 'row', marginTop: myHeight(0.4), flex: 1 }}>
                                <View style={{
                                    width: myHeight(1.4), height: myHeight(1.4),
                                    borderRadius: myHeight(1), marginTop: myHeight(0.4),
                                    backgroundColor: myColors.primaryT,
                                }} />
                                <Spacer paddingEnd={myWidth(1.5)} />
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body,
                                        fontFamily: myFonts.body,
                                        color: myColors.text
                                    }
                                ]}>{currentLoc}</Text>

                            </View>


                        </View>

                        {/* Modal */}
                        <Animated.View
                            entering={SlideInDown.duration(700).delay(100)}
                            // exiting={SlideOutDown}
                            style={{

                                paddingHorizontal: myWidth(4.5),
                                backgroundColor: myColors.background,
                                width: "100%", position: 'absolute', bottom: 0,
                                borderTopStartRadius: myWidth(4),
                                borderTopEndRadius: myWidth(4),
                            }}
                        >

                            <Spacer paddingT={myHeight(1.7)} />
                            {/* Select Ride */}
                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.heading,
                                }
                            ]}>Set your pickup spot</Text>
                            {/* Select your */}
                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.xxSmall,
                                    fontFamily: myFonts.body,
                                }
                            ]}>Select your exact pickup point</Text>



                            <Spacer paddingT={myHeight(1.2)} />
                            <View style={{
                                borderTopWidth: myHeight(0.08),
                                borderColor: myColors.offColor2, width: '100%'
                            }} />

                            <Spacer paddingT={myHeight(1.2)} />
                            {/* Location */}
                            <View style={{ flexDirection: 'row' }}>
                                {/* location image */}
                                <View style={{
                                    width: myHeight(3), height: myHeight(3),
                                    borderRadius: myHeight(2), justifyContent: 'center',
                                    backgroundColor: myColors.primaryL2, alignItems: 'center'
                                }}>
                                    <Image style={{
                                        width: myHeight(2),
                                        height: myHeight(2),
                                        resizeMode: 'contain',

                                    }}
                                        source={require('../../../assets/home_main/dashboards/location.png')} />
                                </View>
                                <Spacer paddingEnd={myWidth(2)} />
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        flex: 1,
                                        fontSize: myFontSize.body,
                                        fontFamily: myFonts.body,
                                        color: myColors.textL6
                                    }
                                ]}>{dropLoc}</Text>
                            </View>
                            <Spacer paddingT={myHeight(1.2)} />

                            {/* Divider */}
                            <View style={{
                                borderTopWidth: myHeight(0.08),
                                borderColor: myColors.offColor2, width: '100%'
                            }} />

                            <Spacer paddingT={myHeight(1.2)} />
                            {/* Rider */}
                            <TouchableOpacity activeOpacity={1}
                                style={{
                                    flexDirection: 'row', alignItems: 'center',
                                    paddingVertical: myHeight(0.6),
                                    marginVertical: myHeight(0.7)
                                }}>
                                {/* Car Image */}
                                <View style={{
                                    padding: myHeight(0.5),
                                    borderRadius: myHeight(4),
                                    paddingHorizontal: myHeight(0.6),
                                    backgroundColor: myColors.primaryL4
                                }}>
                                    <Image source={riderType[typeIndex].image}
                                        style={{
                                            width: myHeight(2.7),
                                            height: myHeight(2.7) * 1.12,
                                            resizeMode: 'contain',
                                        }}
                                    />
                                </View>
                                <Spacer paddingEnd={myWidth(2.5)} />

                                {/* Name & Capacity */}
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                        <Text style={[
                                            styles.textCommon,
                                            {
                                                fontSize: myFontSize.body2,
                                                fontFamily: myFonts.heading,
                                                color: myColors.text
                                            }
                                        ]}>{riderType[typeIndex].name}</Text>
                                        <Spacer paddingEnd={myWidth(3)} />
                                        <Image source={riderType[typeIndex].icon}
                                            style={{
                                                width: myHeight(2.2),
                                                height: myHeight(2.2),
                                                resizeMode: 'contain',
                                            }}
                                        />
                                    </View>
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xxSmall,
                                            fontFamily: myFonts.body,
                                            color: myColors.textL5
                                        }
                                    ]}>Seating Capacity: {riderType[typeIndex].capacity}</Text>
                                </View>

                                {/* Price & Country */}
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.body2,
                                            fontFamily: myFonts.heading,
                                            color: myColors.text
                                        }
                                    ]}>{riderType[typeIndex].price}</Text>

                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xxSmall,
                                            fontFamily: myFonts.body,
                                            color: myColors.textL5
                                        }
                                    ]}>{riderType[typeIndex].country}</Text>
                                </View>
                            </TouchableOpacity>

                            <Spacer paddingT={myHeight(1.5)} />

                            {/* M Rie & Toggle Buttom */}
                            {
                                useCredit &&
                                <View style={{ flexDirection: 'row', }}>
                                    {/* M-RIDE */}
                                    <View>
                                        <View style={{
                                            borderRadius: myWidth(1),
                                            paddingHorizontal: myWidth(2),
                                            paddingVertical: myHeight(0.3),
                                            backgroundColor: myColors.primaryT
                                        }}>
                                            <Text style={[
                                                styles.textCommon,
                                                {
                                                    fontSize: myFontSize.xSmall,
                                                    fontFamily: myFonts.heading,
                                                    color: myColors.background,
                                                }
                                            ]}>M-Ride</Text>
                                        </View>
                                    </View>
                                    <Spacer paddingEnd={myWidth(4)} />
                                    {/* M-Ride Pay */}
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            flex: 1,
                                            fontSize: myFontSize.xSmall,
                                            fontFamily: myFonts.bodyBold,
                                        }
                                    ]}>M-Ride Pay {'\n'}<Text style={{ fontFamily: myFonts.body, }}>Use Credit first</Text></Text>

                                    {/* Price & Toggle */}
                                    <View style={{ flexDirection: 'row', }}>
                                        {/* Price */}
                                        <Text style={[
                                            styles.textCommon,
                                            {
                                                fontSize: myFontSize.body2,
                                                fontFamily: myFonts.headingBold,
                                                color: myColors.text,
                                            }
                                        ]}>{riderType[typeIndex].price}</Text>
                                        <Spacer paddingEnd={myWidth(3)} />
                                        <TouchableOpacity style={{}} activeOpacity={0.9} onPress={onPressToggle} >
                                            <Animated.View style={{
                                                width: myWidth(14),
                                                height: myHeight(2.6),
                                                backgroundColor: useCredit ? myColors.primaryT : myColors.offColor7,
                                                borderRadius: myHeight(2),
                                                justifyContent: 'center',
                                                paddingHorizontal: myWidth(1),
                                            }} >

                                                <Animated.View style={[{
                                                    height: myHeight(2),
                                                    width: myHeight(2),
                                                    backgroundColor: myColors.background,
                                                    borderRadius: myHeight(2),
                                                    borderWidth: myHeight(0.06),

                                                }, animatedStyles]} />
                                            </Animated.View>
                                        </TouchableOpacity>
                                        {/* <Toggle button={useCredit} setButton={setUseCredit} /> */}

                                    </View>
                                </View>
                            }

                            <Spacer paddingT={myHeight(2)} />
                            {/* Cash & Promo Code Button */}
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                {/* Cash Button */}
                                <TouchableOpacity activeOpacity={0.7} onPress={() => setCashModal(true)}
                                    style={{
                                        paddingHorizontal: myWidth(2.3),
                                        backgroundColor: myColors.offColor6,
                                        paddingVertical: myHeight(1), borderRadius: myHeight(1),
                                        flexDirection: 'row', alignItems: 'center',
                                        width: '46%', justifyContent: 'space-between',
                                    }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        {isCashV ? <Image
                                            source={require('../../../assets/home_main/dashboards/ride/cash.png')}
                                            style={{
                                                width: myHeight(1.7),
                                                height: myHeight(1.7),
                                                resizeMode: 'contain',
                                                tintColor: myColors.text
                                            }}
                                        /> :
                                            <Image
                                                source={require('../../../assets/home_main/dashboards/ride/visa.png')}
                                                style={{
                                                    width: myHeight(1.2) * 2.5,
                                                    height: myHeight(1.2),
                                                    resizeMode: 'contain',
                                                }}
                                            />}
                                        <Spacer paddingEnd={myWidth(3)} />
                                        <Text style={[
                                            styles.textCommon,
                                            {
                                                fontSize: myFontSize.xxSmall,
                                                fontFamily: myFonts.heading,
                                            }
                                        ]}>{isCashV ? 'CASH' : 'CARD'}</Text>
                                    </View>
                                    <Image source={require('../../../assets/home_main/go.png')}
                                        style={{
                                            width: myHeight(1.2),
                                            height: myHeight(1.2),
                                            resizeMode: 'contain',
                                            tintColor: myColors.text,
                                            transform: [{ rotate: '90deg' }]
                                        }}
                                    />
                                </TouchableOpacity>

                                {/* Promo Code Button */}
                                <TouchableOpacity activeOpacity={0.7} onPress={() => setPromoModal(true)}
                                    style={{
                                        paddingHorizontal: myWidth(2.3),
                                        backgroundColor: myColors.offColor6,
                                        paddingVertical: myHeight(1), borderRadius: myHeight(1),
                                        flexDirection: 'row', alignItems: 'center',
                                        width: '46%', justifyContent: 'space-between',
                                    }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../../../assets/home_main/dashboards/ride/discount.png')}
                                            style={{
                                                width: myHeight(1.9),
                                                height: myHeight(1.9),
                                                resizeMode: 'contain',
                                                tintColor: myColors.primaryT
                                            }}
                                        />
                                        <Spacer paddingEnd={myWidth(2)} />
                                        <Text style={[
                                            styles.textCommon,
                                            {
                                                fontSize: myFontSize.xxSmall,
                                                fontFamily: myFonts.heading,
                                                color: promoCode ? myColors.text : myColors.textL3
                                            }
                                        ]}>{promoCode ? promoCode : 'PROMO CODE'}</Text>
                                    </View>
                                    <Image source={require('../../../assets/home_main/go.png')}
                                        style={{
                                            width: myHeight(1.2),
                                            height: myHeight(1.2),
                                            resizeMode: 'contain',
                                            tintColor: myColors.text,
                                            transform: [{ rotate: '90deg' }]
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Spacer paddingT={myHeight(2)} />




                            {/* Schedule Button && Alert*/}
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>

                                {/* Schedule Button */}
                                <TouchableOpacity activeOpacity={0.7} onPress={onBookARide}
                                    style={{
                                        backgroundColor: myColors.primaryT,
                                        borderRadius: myHeight(0.5),
                                        paddingVertical: myHeight(0.5),
                                        width: myWidth(75), alignItems: 'center'
                                    }}>

                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.body,
                                            fontFamily: myFonts.heading,
                                            color: myColors.background,
                                        }
                                    ]}>Schedule</Text>
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xxSmall,
                                            fontFamily: myFonts.heading,
                                            color: myColors.background,
                                        }
                                    ]}>{date} {time}</Text>

                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => setCancelRideModal(true)}>

                                    <Image source={require('../../../assets/home_main/dashboards/ride/alert.png')}
                                        style={{
                                            width: myWidth(11),
                                            height: myWidth(11),
                                            resizeMode: 'contain',

                                        }} />
                                </TouchableOpacity>
                            </View>

                            <Spacer paddingT={myHeight(4)} />

                        </Animated.View>
                    </SafeAreaView>

                </View>

            }


            {/* Cash Modal */}
            {
                cashModal &&
                <View
                    style={{
                        height: myHeight(100), width: myWidth(100),
                        backgroundColor: '#00000030',
                        position: 'absolute', zIndex: 11,

                    }}
                >
                    <TouchableOpacity activeOpacity={1}
                        style={{
                            flex: 1, paddingHorizontal: myWidth(4.5),
                        }}
                        onPress={() => setCashModal(false)}
                    >
                    </TouchableOpacity>
                    <Animated.View
                        entering={SlideInDown.duration(300)}
                        style={{
                            paddingHorizontal: myWidth(4.5),
                            backgroundColor: myColors.background,
                            width: "100%", position: 'absolute', bottom: 0,
                            borderTopStartRadius: myWidth(4),
                            borderTopEndRadius: myWidth(4),
                            overflow: 'hidden'
                        }}>
                        <Spacer paddingT={myHeight(0.8)} />

                        {/* Line */}
                        <View style={{
                            width: myWidth(30), height: myHeight(0.7),
                            backgroundColor: myColors.dot, borderRadius: myHeight(2),
                            alignSelf: 'center',
                        }} />
                        <Spacer paddingT={myHeight(1.7)} />
                        {/* M Rie & Toggle Buttom */}
                        <View style={{ flexDirection: 'row', }}>
                            {/* M-RIDE */}
                            <View>
                                <View style={{
                                    borderRadius: myWidth(1),
                                    paddingHorizontal: myWidth(2),
                                    paddingVertical: myHeight(0.3),
                                    backgroundColor: myColors.primaryT
                                }}>
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xSmall,
                                            fontFamily: myFonts.heading,
                                            color: myColors.background,
                                        }
                                    ]}>M-Ride</Text>
                                </View>
                            </View>
                            <Spacer paddingEnd={myWidth(4)} />
                            {/* M-Ride Pay */}
                            <Text style={[
                                styles.textCommon,
                                {
                                    flex: 1,
                                    fontSize: myFontSize.xSmall,
                                    fontFamily: myFonts.bodyBold,
                                }
                            ]}>M-Ride Pay {'\n'}<Text style={{ fontFamily: myFonts.body, }}>Use Credit first</Text></Text>

                            {/* Price & Toggle */}
                            <View style={{ flexDirection: 'row', }}>
                                {/* Price */}
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.headingBold,
                                        color: myColors.text,
                                    }
                                ]}>{riderType[typeIndex].price}</Text>
                                <Spacer paddingEnd={myWidth(3)} />

                                {/* Toggle */}
                                <TouchableOpacity style={{}} activeOpacity={0.9} onPress={onPressToggle} >
                                    <Animated.View style={{
                                        width: myWidth(14),
                                        height: myHeight(2.6),
                                        backgroundColor: useCredit ? myColors.primaryT : myColors.offColor7,
                                        borderRadius: myHeight(2),
                                        justifyContent: 'center',
                                        paddingHorizontal: myWidth(1),
                                    }} >

                                        <Animated.View style={[{
                                            height: myHeight(2),
                                            width: myHeight(2),
                                            backgroundColor: myColors.background,
                                            borderRadius: myHeight(2),
                                            borderWidth: myHeight(0.06),

                                        }, animatedStyles]} />
                                    </Animated.View>
                                </TouchableOpacity>
                                {/* <Toggle button={useCredit} setButton={setUseCredit} /> */}

                            </View>
                        </View>
                        <Spacer paddingT={myHeight(2.5)} />

                        {/* Cash Select */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: myHeight(2.5) * 2.5, alignItems: 'center' }}>
                                <Image source={require('../../../assets/home_main/dashboards/ride/cash.png')}
                                    style={{
                                        width: myHeight(3.2),
                                        height: myHeight(3.2),
                                        resizeMode: 'contain',
                                        tintColor: myColors.text
                                    }}
                                />
                            </View>
                            <Spacer paddingEnd={myWidth(4)} />
                            <Text style={[
                                styles.textCommon,
                                {
                                    flex: 1,
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.heading,
                                }
                            ]}>Cash</Text>

                            {/* Select Cash */}
                            <TouchableOpacity activeOpacity={0.6} onPress={() => setIsCashV(true)}
                                style={{
                                    width: myHeight(3),
                                    height: myHeight(3),
                                    borderWidth: myHeight(0.1),
                                    borderRadius: myHeight(3),
                                    borderColor: myColors.primaryT,
                                    padding: myHeight(0.2)

                                }}>
                                <View style={{
                                    flex: 1, backgroundColor: isCashV ? myColors.primaryT : myColors.offColor7,
                                    borderRadius: myHeight(3),
                                }} />

                            </TouchableOpacity>
                        </View>
                        <Spacer paddingT={myHeight(2.5)} />

                        {/* Visa Select */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: myHeight(2.5) * 2.5, alignItems: 'center' }}>
                                <Image source={require('../../../assets/home_main/dashboards/ride/visa.png')}
                                    style={{
                                        width: myHeight(2.5) * 2.5,
                                        height: myHeight(2.5),
                                        resizeMode: 'contain',
                                        // tintColor: myColors.text
                                    }}
                                />
                            </View>
                            <Spacer paddingEnd={myWidth(4)} />
                            <Text style={[
                                styles.textCommon,
                                {
                                    flex: 1,
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.heading,
                                }
                            ]}>******707</Text>

                            {/* Select Visa */}
                            <TouchableOpacity activeOpacity={0.6} onPress={() => setIsCashV(false)}
                                style={{
                                    width: myHeight(3),
                                    height: myHeight(3),
                                    borderWidth: myHeight(0.1),
                                    borderRadius: myHeight(3),
                                    borderColor: myColors.primaryT,
                                    padding: myHeight(0.2)

                                }}>
                                <View style={{
                                    flex: 1, backgroundColor: isCashV == false ? myColors.primaryT : myColors.offColor7,
                                    borderRadius: myHeight(3),
                                }} />

                            </TouchableOpacity>
                        </View>
                        <Spacer paddingT={myHeight(3.5)} />

                        {/* Add Card */}
                        <TouchableOpacity activeOpacity={0.7}
                            style={{
                                paddingHorizontal: myWidth(4.5),
                                flexDirection: 'row', alignItems: 'center',
                            }}
                            onPress={() => navigation.navigate('AddCard')}
                        >
                            <Image source={require('../../../assets/home_main/plus.png')}
                                style={{
                                    width: myHeight(1.8),
                                    height: myHeight(1.8),
                                    resizeMode: 'contain',
                                    tintColor: myColors.primaryT
                                }}
                            />
                            <Spacer paddingEnd={myWidth(2)} />
                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.heading,
                                    color: myColors.primaryT,
                                }
                            ]}>ADD CARD</Text>
                        </TouchableOpacity>

                        <Spacer paddingT={myHeight(4)} />


                    </Animated.View>

                </View>
            }



            {/* Promo Code Modal */}
            {
                promoModal &&

                <KeyboardAwareScrollView
                    bounces={false}
                    extraScrollHeight={100}
                    extraHeight={100}
                    contentContainerStyle={{
                        height: myHeight(100), width: myWidth(100),
                        backgroundColor: '#00000030',
                    }}

                >

                    <TouchableOpacity activeOpacity={1}
                        style={{
                            flex: 1, paddingHorizontal: myWidth(4.5),
                        }}
                        onPress={() => setPromoModal(false)}
                    >
                    </TouchableOpacity>
                    <Animated.View
                        entering={SlideInDown.duration(300)}
                        style={{
                            paddingHorizontal: myWidth(4.5),
                            backgroundColor: myColors.background,
                            width: "100%", position: 'absolute', bottom: 0,
                            borderTopStartRadius: myWidth(4),
                            borderTopEndRadius: myWidth(4),
                        }}>
                        <Spacer paddingT={myHeight(0.8)} />

                        {/* Line */}
                        <View style={{
                            width: myWidth(30), height: myHeight(0.7),
                            backgroundColor: myColors.dot, borderRadius: myHeight(2),
                            alignSelf: 'center',
                        }} />
                        <Spacer paddingT={myHeight(1.5)} />

                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.xBody,
                                fontFamily: myFonts.heading,
                            }
                        ]}>Add Promo</Text>
                        <Spacer paddingT={myHeight(1.5)} />

                        {/* Input */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: myHeight(0.8),
                            paddingHorizontal: myWidth(2.5),
                            borderWidth: myHeight(0.09),
                            borderColor: myColors.primaryT,
                            backgroundColor: myColors.background,
                            elevation: 3,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                        }}>

                            <TextInput placeholder="Enter promo code"
                                keyboardType={'number-pad'}
                                placeholderTextColor={myColors.offColor}
                                selectionColor={myColors.primaryT}
                                cursorColor={myColors.primaryT}
                                value={promoCode} onChangeText={setPromoCode}
                                style={{
                                    flex: 1,
                                    textAlignVertical: 'center',
                                    paddingVertical: ios ? myHeight(1.2) : myHeight(100) > 600 ? myHeight(0.8) : myHeight(0.1),
                                    fontSize: myFontSize.body,
                                    color: myColors.text,
                                    includeFontPadding: false,
                                    fontFamily: myFonts.heading,
                                }}
                            />
                        </View>

                        <Spacer paddingT={myHeight(8)} />
                        {/* Activate Code Button */}
                        <TouchableOpacity activeOpacity={0.8} onPress={onActivateCode}
                            style={{
                                backgroundColor: myColors.primaryT,
                                borderRadius: myHeight(0.5),
                                paddingVertical: myHeight(1),
                                alignItems: 'center',
                                width: '100%', justifyContent: 'center',
                            }}>

                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.body,
                                    fontFamily: myFonts.heading,
                                    color: myColors.background,
                                }
                            ]}>Activate Code</Text>

                        </TouchableOpacity>
                        <Spacer paddingT={myHeight(4)} />

                    </Animated.View>

                </KeyboardAwareScrollView>

            }



            {/* Connected To Driver Modal */}
            {
                connectedToDriverModal &&
                <Animated.View
                    entering={SlideInDown.duration(600).delay(500)}
                    style={{
                        paddingHorizontal: myWidth(4.5),
                        backgroundColor: myColors.background,
                        width: "100%", position: 'absolute', bottom: 0,
                        borderTopStartRadius: myWidth(4),
                        borderTopEndRadius: myWidth(4),
                    }}>

                    <Spacer paddingT={myHeight(1.5)} />

                    <Text style={[
                        styles.textCommon,
                        {
                            fontSize: myFontSize.xBody,
                            fontFamily: myFonts.bodyBold,
                            color: myColors.primaryT
                        }
                    ]}>Connecting to the nearest driver.</Text>



                    <Spacer paddingT={myHeight(1.5)} />

                    {/* Pick to Destination */}
                    <View style={{ flexDirection: 'row', }}>
                        {/* Circles & Line*/}
                        <View style={{
                            justifyContent: 'space-between',
                            alignItems: 'center', paddingVertical: myHeight(0.5)
                        }}>
                            <View style={{
                                height: myHeight(3), width: myHeight(3),
                                borderRadius: myHeight(3), borderWidth: myHeight(0.07),
                                borderColor: myColors.primaryT,
                                backgroundColor: myColors.background,

                            }} />
                            <View style={{
                                flex: 1, width: myWidth(0.5),
                                backgroundColor: myColors.primaryT, marginVertical: myHeight(0.4)
                            }} />
                            <View style={{
                                height: myHeight(3), width: myHeight(3),
                                borderRadius: myHeight(3),
                                backgroundColor: myColors.primaryT,

                            }} />
                        </View>

                        <Spacer paddingEnd={myWidth(3)} />
                        {/* Text Pick & Desti */}
                        <View style={{}}>
                            {/* Pick */}
                            <View>
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.xBody,
                                        fontFamily: myFonts.bodyBold,
                                    }
                                ]}>Work</Text>
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.xxSmall,
                                        fontFamily: myFonts.body,
                                    }
                                ]}>Block#7 Signature Apartment</Text>
                            </View>

                            <Spacer paddingT={myHeight(2.5)} />

                            {/* Destination */}
                            <View>
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.xBody,
                                        fontFamily: myFonts.bodyBold,
                                    }
                                ]}>Kings Cottages</Text>
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.xxSmall,
                                        fontFamily: myFonts.body,
                                    }
                                ]}>Kings Communication</Text>
                            </View>
                        </View>
                    </View>

                    <Spacer paddingT={myHeight(4)} />

                    {/* Rider */}
                    <View
                        style={{
                            flexDirection: 'row', alignItems: 'center',
                            paddingVertical: myHeight(0.6),
                            marginVertical: myHeight(0.7)
                        }}>
                        {/* Car Image */}
                        <View style={{
                            padding: myHeight(0.5),
                            borderRadius: myHeight(4),
                            paddingHorizontal: myHeight(0.6),
                            backgroundColor: myColors.primaryL4
                        }}>
                            <Image source={riderType[typeIndex].image}
                                style={{
                                    width: myHeight(2.7),
                                    height: myHeight(2.7) * 1.12,
                                    resizeMode: 'contain',
                                }}
                            />
                        </View>
                        <Spacer paddingEnd={myWidth(2.5)} />

                        {/* Name & Capacity */}
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.heading,
                                        color: myColors.text
                                    }
                                ]}>{riderType[typeIndex].name}</Text>
                                <Spacer paddingEnd={myWidth(3)} />
                                <Image source={riderType[typeIndex].icon}
                                    style={{
                                        width: myHeight(2.2),
                                        height: myHeight(2.2),
                                        resizeMode: 'contain',
                                    }}
                                />
                            </View>
                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.xxSmall,
                                    fontFamily: myFonts.body,
                                    color: myColors.textL5
                                }
                            ]}>Seating Capacity: {riderType[typeIndex].capacity}</Text>
                        </View>


                    </View>

                    <Spacer paddingT={myHeight(2)} />

                    {/* Cash Or Card */}
                    <View style={{ marginStart: myWidth(1), flexDirection: 'row', alignItems: 'center' }}>
                        {isCashV ? <Image
                            source={require('../../../assets/home_main/dashboards/ride/cash.png')}
                            style={{
                                width: myHeight(3),
                                height: myHeight(3),
                                resizeMode: 'contain',
                                tintColor: myColors.primaryT
                            }}
                        /> :
                            <Image
                                source={require('../../../assets/home_main/dashboards/ride/visa.png')}
                                style={{
                                    width: myHeight(2.5) * 2.5,
                                    height: myHeight(2.5),
                                    resizeMode: 'contain',
                                }}
                            />}
                        <Spacer paddingEnd={myWidth(3)} />
                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.xBody,
                                fontFamily: myFonts.bodyBold,
                            }
                        ]}>{isCashV ? 'CASH' : 'CARD'}</Text>
                    </View>

                    <Spacer paddingT={myHeight(3)} />

                </Animated.View>
            }


            {/* Captain Modal */}
            {
                captainModal &&
                <Animated.View

                    entering={SlideInDown.duration(500)}
                    exiting={SlideOutDown}
                    style={{
                        display: feedbackModal ? 'none' : 'flex',
                        paddingHorizontal: myWidth(4.5),
                        borderTopStartRadius: myWidth(4),
                        borderTopEndRadius: myWidth(4),
                        backgroundColor: myColors.background,
                        width: "100%", position: 'absolute', bottom: 0,
                    }}
                >

                    <GestureHandlerRootView style={{
                        flex: 1,
                    }}>

                        <PanGestureHandler
                            onGestureEvent={(event) => {
                                const s = event.nativeEvent.translationY
                                if (s < -25) {
                                    if (!captainModalExpand) {
                                        LayoutAnimation.configureNext({
                                            "create": { "property": "opacity", "type": "linear" },
                                            "delete": { "property": "opacity", "type": "linear" },
                                            "duration": 300,
                                            "update": { "type": "linear" }
                                        })
                                        setCaptainModalExpand(true)

                                    }
                                }
                                else if (s > 25) {
                                    if (captainModalExpand) {
                                        LayoutAnimation.configureNext({
                                            "create": { "property": "opacity", "type": "linear" },
                                            "delete": { "property": "opacity", "type": "linear" },
                                            "duration": 300,
                                            "update": { "type": "linear" }
                                        })
                                        setCaptainModalExpand(false)

                                    }
                                }
                            }}>
                            <View style={{
                                flex: 1
                            }}>
                                {/* Top Text */}
                                <View>
                                    <Spacer paddingT={myHeight(0.8)} />

                                    {/* Line */}
                                    <View style={{
                                        width: myWidth(20), height: myHeight(1),
                                        backgroundColor: myColors.dot, borderRadius: myHeight(2),
                                        alignSelf: 'center',
                                    }} />
                                    <Spacer paddingT={myHeight(0.7)} />
                                    {/* Your Captain is on the way */}
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xBody,
                                            fontFamily: myFonts.bodyBold,
                                        }
                                    ]}>Your Captain is on the way</Text>

                                </View>

                                <Spacer paddingT={myHeight(2)} />
                                {/* Captain Detail */}
                                <View style={{ flexDirection: 'row', }}>
                                    <Image source={require('../../../assets/home_main/driver.png')}
                                        style={{
                                            width: myHeight(7.58),
                                            height: myHeight(7.58),
                                            resizeMode: 'contain',
                                            borderRadius: myHeight(7.58),
                                        }}
                                    />
                                    <Spacer paddingEnd={myWidth(3)} />

                                    {/* RATING & Car NAME */}
                                    <View style={{
                                        justifyContent: 'center', flex: 1,
                                        // backgroundColor: 'red'
                                    }}>
                                        {/* Rating */}
                                        <Text style={[
                                            styles.textCommon,
                                            {
                                                fontSize: myFontSize.body2,
                                                fontFamily: myFonts.heading,
                                                color: myColors.textL4,
                                                alignItems: 'center',
                                            }
                                        ]}>Azeem Khan. {'4.9'} <Image source={require('../../../assets/home_main/star.png')}
                                            style={{
                                                width: myHeight(2),
                                                height: myHeight(2),
                                                resizeMode: 'contain',
                                                tintColor: myColors.star
                                            }}
                                            />
                                        </Text>

                                        {/* Car Name */}
                                        <Text numberOfLines={2} style={[
                                            styles.textCommon,
                                            {
                                                fontSize: myFontSize.body2,
                                                fontFamily: myFonts.bodyBold,
                                                color: myColors.text,
                                                alignItems: 'center',
                                            }
                                        ]}>{"White Suzuki Alto Japanese."}</Text>
                                    </View>

                                    <Spacer paddingEnd={myWidth(3)} />
                                    {/* Car Plate */}
                                    <View style={{ justifyContent: 'flex-end' }}>
                                        <View style={{
                                            backgroundColor: myColors.primaryT,
                                            padding: myWidth(1.4),
                                            borderRadius: myWidth(2),
                                        }}>
                                            <Text style={[
                                                styles.textCommon,
                                                {
                                                    fontSize: myFontSize.body2,
                                                    fontFamily: myFonts.heading,
                                                    color: myColors.background,
                                                }
                                            ]}>{"WBVS-987"}</Text>

                                        </View>
                                        <Spacer paddingT={myHeight(1)} />
                                    </View>

                                </View>

                                <Spacer paddingT={myHeight(2)} />
                                {/* Divider */}
                                <View style={{
                                    borderTopWidth: myHeight(0.12), marginStart: -myWidth(4.5),
                                    borderColor: myColors.offColor2, width: myWidth(100),
                                }} />

                                {/*Phone &  Chat */}
                                <View style={{ flexDirection: 'row', width: myWidth(100), marginStart: -myWidth(4.5) }}>
                                    {/* Phone */}
                                    <TouchableOpacity activeOpacity={0.7} onPress={onCall}
                                        style={{
                                            width: '50%', flexDirection: 'row', paddingVertical: myHeight(1.6),
                                            alignItems: 'center', justifyContent: 'center', borderEndWidth: myWidth(0.3),
                                            borderColor: myColors.offColor2,
                                        }}>
                                        <Image source={require('../../../assets/home_main/dashboards/ride/phone.png')}
                                            style={{
                                                width: myHeight(2.58),
                                                height: myHeight(2.58),
                                                resizeMode: 'contain',
                                                tintColor: myColors.primaryT
                                            }}
                                        />
                                        <Spacer paddingEnd={myWidth(3)} />
                                        <Text style={[
                                            styles.textCommon,
                                            {
                                                fontSize: myFontSize.body2,
                                                fontFamily: myFonts.heading,
                                                color: myColors.textL5
                                            }
                                        ]}>CALL</Text>
                                    </TouchableOpacity>

                                    {/* Chat */}
                                    <TouchableOpacity activeOpacity={0.7} onPress={onChat}
                                        style={{
                                            width: '50%', flexDirection: 'row', paddingVertical: myHeight(1.6),
                                            alignItems: 'center', justifyContent: 'center'
                                        }}>
                                        <Image source={require('../../../assets/home_main/dashboards/ride/chat.png')}
                                            style={{
                                                width: myHeight(2.58),
                                                height: myHeight(2.58),
                                                resizeMode: 'contain',
                                                tintColor: myColors.primaryT
                                            }}
                                        />
                                        <Spacer paddingEnd={myWidth(3)} />
                                        <Text style={[
                                            styles.textCommon,
                                            {
                                                fontSize: myFontSize.body2,
                                                fontFamily: myFonts.heading,
                                                color: myColors.textL5
                                            }
                                        ]}>CHAT</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{
                                    borderTopWidth: myHeight(0.12), marginStart: -myWidth(4.5),
                                    borderColor: myColors.offColor2, width: myWidth(100),
                                }} />

                                <Spacer paddingT={myHeight(2)} />
                                {/* Expand Items */}
                                {captainModalExpand &&
                                    <Animated.View
                                        style={{}}
                                    >
                                        {/* Pick to Destination */}
                                        <View style={{ flexDirection: 'row', }}>
                                            {/* Circles & Line*/}
                                            <View style={{
                                                justifyContent: 'space-between',
                                                alignItems: 'center', paddingVertical: myHeight(0.5)
                                            }}>
                                                <View style={{
                                                    height: myHeight(2.2), width: myHeight(2.2),
                                                    borderRadius: myHeight(3), borderWidth: myHeight(0.07),
                                                    borderColor: myColors.primaryT,
                                                    backgroundColor: myColors.background,

                                                }} />
                                                <View style={{
                                                    flex: 1, width: myWidth(0.5),
                                                    backgroundColor: myColors.primaryT, marginVertical: myHeight(0.4)
                                                }} />
                                                <View style={{
                                                    height: myHeight(2.2), width: myHeight(2.2),
                                                    borderRadius: myHeight(3),
                                                    backgroundColor: myColors.primaryT,

                                                }} />
                                            </View>

                                            <Spacer paddingEnd={myWidth(3)} />
                                            {/* Text Pick & Desti */}
                                            <View style={{}}>
                                                {/* Pick */}
                                                <View>
                                                    <Text style={[
                                                        styles.textCommon,
                                                        {
                                                            fontSize: myFontSize.body2,
                                                            fontFamily: myFonts.bodyBold,
                                                        }
                                                    ]}>Work</Text>
                                                    <Text style={[
                                                        styles.textCommon,
                                                        {
                                                            fontSize: myFontSize.xSmall,
                                                            fontFamily: myFonts.body,
                                                        }
                                                    ]}>Block#7 Signature Apartment</Text>
                                                </View>

                                                <Spacer paddingT={myHeight(2.5)} />

                                                {/* Destination */}
                                                <View>
                                                    <Text style={[
                                                        styles.textCommon,
                                                        {
                                                            fontSize: myFontSize.body2,
                                                            fontFamily: myFonts.bodyBold,
                                                        }
                                                    ]}>Kings Cottages</Text>
                                                    <Text style={[
                                                        styles.textCommon,
                                                        {
                                                            fontSize: myFontSize.xSmall,
                                                            fontFamily: myFonts.body,
                                                        }
                                                    ]}>Kings Communication</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <Spacer paddingT={myHeight(2)} />
                                        {/* Divider */}
                                        <View style={{
                                            borderTopWidth: myHeight(0.12), marginStart: -myWidth(4.5),
                                            borderColor: myColors.offColor2, width: myWidth(100),
                                        }} />

                                        <Spacer paddingT={myHeight(1.4)} />
                                        {/* Booking Details */}
                                        <Text style={[
                                            styles.textCommon,
                                            {
                                                fontSize: myFontSize.xSmall,
                                                fontFamily: myFonts.bodyBold,
                                                color: myColors.textL5
                                            }
                                        ]}>Booking Details</Text>

                                        {/* Car & Destination */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                            <View style={{ width: myHeight(5), height: myHeight(5), justifyContent: 'center' }}>
                                                <Image source={require('../../../assets/home_main/dashboards/ride/car.png')}
                                                    style={{
                                                        width: myHeight(3),
                                                        height: myHeight(3),
                                                        resizeMode: 'contain',
                                                    }}
                                                />
                                            </View>
                                            <Text style={[
                                                styles.textCommon,
                                                {
                                                    fontSize: myFontSize.body2,
                                                    fontFamily: myFonts.bodyBold,
                                                    color: myColors.textL5
                                                }
                                            ]}>{'Go'}</Text>
                                        </View>

                                        {/* Cash or Card*/}
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ width: myHeight(5), height: myHeight(5), justifyContent: 'center' }}>
                                                <Image source={require('../../../assets/home_main/dashboards/ride/cash.png')}
                                                    style={{
                                                        width: myHeight(2.5),
                                                        height: myHeight(2.5),
                                                        resizeMode: 'contain',
                                                        tintColor: myColors.primaryT
                                                    }}
                                                />
                                            </View>
                                            <Text style={[
                                                styles.textCommon,
                                                {
                                                    fontSize: myFontSize.body2,
                                                    fontFamily: myFonts.bodyBold,
                                                    color: myColors.textL5
                                                }
                                            ]}>{isCashV ? "CASH" : 'CARD'}</Text>
                                        </View>
                                        <Spacer paddingT={myHeight(0.4)} />

                                        {/* Divider */}
                                        <View style={{
                                            borderTopWidth: myHeight(0.12), marginStart: -myWidth(4.5),
                                            borderColor: myColors.offColor2, width: myWidth(100),
                                        }} />

                                        <Spacer paddingT={myHeight(1.4)} />
                                        {/* Booking Details */}
                                        <Text style={[
                                            styles.textCommon,
                                            {
                                                fontSize: myFontSize.xSmall,
                                                fontFamily: myFonts.bodyBold,
                                                color: myColors.textL5
                                            }
                                        ]}>Manage Ride</Text>

                                        {/* Need Help */}
                                        <TouchableOpacity activeOpacity={0.8} onPress={onClickNeedHelp} style={{ flexDirection: 'row', alignItems: 'center', }}>

                                            <View style={{ width: myHeight(5), height: myHeight(5), justifyContent: 'center' }}>
                                                <Image source={require('../../../assets/home_main/dashboards/ride/headphone.png')}
                                                    style={{
                                                        width: myHeight(2.5),
                                                        height: myHeight(2.5),
                                                        resizeMode: 'contain',
                                                    }}
                                                />
                                            </View>
                                            <Text style={[
                                                styles.textCommon,
                                                {
                                                    fontSize: myFontSize.body2,
                                                    fontFamily: myFonts.bodyBold,
                                                    color: myColors.textL5
                                                }
                                            ]}>Need our help?</Text>
                                        </TouchableOpacity>

                                        {/* Cancel Ride*/}
                                        <TouchableOpacity activeOpacity={0.8} onPress={() => onClickCancelRide()} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ width: myHeight(5), height: myHeight(5), justifyContent: 'center' }}>
                                                <Image source={require('../../../assets/home_main/dashboards/ride/cancel.png')}
                                                    style={{
                                                        width: myHeight(2.5),
                                                        height: myHeight(2.5),
                                                        resizeMode: 'contain',
                                                        tintColor: myColors.primaryT
                                                    }}
                                                />
                                            </View>
                                            <Text style={[
                                                styles.textCommon,
                                                {
                                                    fontSize: myFontSize.body2,
                                                    fontFamily: myFonts.bodyBold,
                                                    color: myColors.textL5
                                                }
                                            ]}>Cancel Ride</Text>
                                        </TouchableOpacity>

                                        <Spacer paddingT={myHeight(1.5)} />


                                    </Animated.View>
                                }

                            </View>
                        </PanGestureHandler>
                    </GestureHandlerRootView>
                </Animated.View>
            }



            {/* Cancel a Ride*/}
            {
                cancelRideModal &&
                <View
                    style={{

                        backgroundColor: '#00000030',
                        height: myHeight(100), width: myWidth(100),
                        borderTopStartRadius: myWidth(4),
                        borderTopEndRadius: myWidth(4),
                        position: 'absolute', zIndex: 9,
                    }}

                >
                    <TouchableOpacity activeOpacity={1}
                        style={{
                            flex: 1, paddingHorizontal: myWidth(4.5),
                        }}
                        onPress={() => setCancelRideModal(false)}
                    >
                    </TouchableOpacity>
                    <Animated.View
                        entering={SlideInDown.duration(300)}
                        style={{
                            paddingHorizontal: myWidth(4.5),
                            backgroundColor: myColors.background,
                            width: "100%", position: 'absolute', bottom: 0,
                            borderTopStartRadius: myWidth(4),
                            borderTopEndRadius: myWidth(4),
                        }}>

                        <Spacer paddingT={myHeight(1.5)} />

                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.xMedium,
                                fontFamily: myFonts.bodyBold,
                            }
                        ]}>Are you sure you want to cancel?</Text>
                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.xBody,
                                fontFamily: myFonts.body,
                            }
                        ]}>We are finding your nearest Captain.</Text>

                        <Spacer paddingT={myHeight(4)} />

                        {/* Yes Button */}
                        <TouchableOpacity activeOpacity={0.8} onPress={onCancelRide}
                            style={{
                                backgroundColor: myColors.primaryT,
                                borderRadius: myHeight(0.5),
                                paddingVertical: myHeight(1.4),
                                width: '100%', justifyContent: 'center',
                                alignItems: 'center', alignSelf: 'center'
                            }}>

                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.bodyBold,
                                    color: myColors.background,
                                }
                            ]}>Yes, Cancel</Text>

                        </TouchableOpacity>

                        <Spacer paddingT={myHeight(2)} />
                        {/* No Keep Ride Button */}
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setCancelRideModal(false)}
                            style={{
                                borderColor: myColors.primaryT,
                                borderRadius: myHeight(0.5),
                                borderWidth: myHeight(0.2),
                                paddingVertical: myHeight(1.4),
                                width: '100%', justifyContent: 'center',
                                alignItems: 'center', alignSelf: 'center'
                            }}>

                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.bodyBold,
                                    color: myColors.primaryT,
                                }
                            ]}>No, Keep ride</Text>

                        </TouchableOpacity>
                        <Spacer paddingT={myHeight(4)} />

                    </Animated.View>

                </View>
            }

            {/* FeedBack Modal*/}
            {
                feedbackModal &&
                <View
                    style={{

                        backgroundColor: '#00000010',
                        height: myHeight(100), width: myWidth(100),
                        position: 'absolute', zIndex: 8,
                        justifyContent: 'flex-end',
                    }}

                >
                    <Animated.View
                        entering={FadeIn.duration(500)}
                        style={{
                            flex: 1, paddingHorizontal: myWidth(4.5),
                            justifyContent: 'flex-end',
                        }}
                        onPress={() => null}
                    >
                        {/* Feedback Card */}
                        <View style={{
                            width: '100%', backgroundColor: myColors.background,
                            borderRadius: myWidth(4), paddingHorizontal: myWidth(4)

                        }}>
                            <Spacer paddingT={myHeight(2)} />

                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.xMedium,
                                    fontFamily: myFonts.bodyBold,
                                }
                            ]}>Tell us why you want to cancel.</Text>
                            <Spacer paddingT={myHeight(1.5)} />

                            {/* Feedback */}
                            {
                                feedbackTexts.map((item, i) =>
                                    <TouchableOpacity activeOpacity={0.8}
                                        onPress={() => setFeedBInd(i)} key={i}
                                        style={{
                                            flexDirection: 'row', paddingVertical: myHeight(2),
                                        }}>
                                        <View style={{
                                            height: myHeight(3),
                                            width: myHeight(3),
                                            marginTop: myHeight(0.2),
                                            borderRadius: myHeight(2),
                                            backgroundColor: myColors.divider,
                                            borderColor: myColors.primaryT,
                                            borderWidth: feedBInd == i ? myHeight(0.9) : myHeight(0.2)
                                        }} />
                                        <Spacer paddingEnd={myWidth(2)} />
                                        <Text style={[
                                            styles.textCommon,
                                            {
                                                flex: 1,
                                                fontSize: myFontSize.xBody,
                                                fontFamily: myFonts.body,
                                                paddingHorizontal: myWidth(1)
                                            }
                                        ]}>{item}</Text>
                                    </TouchableOpacity>
                                )

                            }
                            <Spacer paddingT={myHeight(1)} />

                        </View>
                        <Spacer paddingT={myHeight(3.5)} />
                        {/* Submit */}
                        <TouchableOpacity activeOpacity={0.9} onPress={onSubmitFeedback}
                            style={{
                                backgroundColor: myColors.primaryT,
                                borderRadius: myHeight(0.5),
                                paddingVertical: myHeight(1.4),
                                width: '100%', justifyContent: 'center',
                                alignItems: 'center', alignSelf: 'center'
                            }}>

                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.heading,
                                    color: myColors.background,
                                }
                            ]}>Submit</Text>

                        </TouchableOpacity>
                    </Animated.View>
                    <Spacer paddingT={myHeight(5)} />
                </View>
            }

            {/* Direct Call Modal  */}

            {
                directCallModal &&
                <View
                    style={{

                        backgroundColor: '#00000030',
                        height: myHeight(100), width: myWidth(100),
                        borderTopStartRadius: myWidth(4),
                        borderTopEndRadius: myWidth(4),
                        position: 'absolute',
                    }}

                >
                    <TouchableOpacity activeOpacity={1}
                        style={{
                            flex: 1, paddingHorizontal: myWidth(4.5),
                        }}
                        onPress={() => setDirectCallModal(false)}
                    >
                    </TouchableOpacity>
                    <Animated.View
                        entering={SlideInDown.duration(300)}
                        style={{
                            backgroundColor: myColors.background,
                            width: "100%", position: 'absolute', bottom: 0,
                            borderTopStartRadius: myWidth(4),
                            borderTopEndRadius: myWidth(4),
                        }}>

                        <Spacer paddingT={myHeight(2.5)} />
                        <TouchableOpacity activeOpacity={0.8} style={{ paddingHorizontal: myWidth(4), flexDirection: 'row', alignItems: 'center' }}
                            onPress={onDirectCall}>

                            <Image source={require('../../../assets/home_main/dashboards/ride/callO.png')}
                                style={{
                                    width: myHeight(4.7),
                                    height: myHeight(4.7),
                                    resizeMode: 'contain',
                                }}
                            />
                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.xBody,
                                    fontFamily: myFonts.bodyBold,
                                    alignSelf: 'center',
                                    paddingStart: myWidth(2)
                                }
                            ]}>Call Captain Directly</Text>
                        </TouchableOpacity>

                        <Spacer paddingT={myHeight(2.5)} />

                    </Animated.View>

                </View>
            }
        </>
    )
}
const styles = StyleSheet.create({
    container: {

    },

    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },

})