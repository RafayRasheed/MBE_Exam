import { Image, LayoutAnimation, Modal, Pressable, SafeAreaView, ScrollView, SliderBase, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { myColors } from '../../../../ultils/myColors'
import { Spacer, ios, myHeight, myWidth } from '../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Animated, { FadeIn, SlideInDown, SlideInLeft, SlideInUp, SlideOutDown, SlideOutLeft } from 'react-native-reanimated'
import { riderType } from './ride_data'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CalenderDate } from './ride_component/calender'


export const RideHome = ({ route, navigation }) => {
    const { currentLoc } = route.params
    const [pickLoc, setPickLoc] = useState(route.params.pickLocation)
    const [typeIndex, setTypeIndex] = useState(0)

    const [expandRiderModal, setExpandRiderModal] = useState(false)
    const [riderTypeModal, setRiderTypeModal] = useState(true)
    const [scheduleModal, setScheduleModal] = useState(false)
    const [promoModal, setPromoModal] = useState(false)
    const [cashModal, setCashModal] = useState(false)
    const [noDriverModal, setNoDriverModal] = useState(false)
    const [bookingDetailModal, setBookingDetailModal] = useState(false)

    const [promoCode, setPromoCode] = useState(null)
    const [useCredit, setUseCredit] = useState(false)
    const [isCashV, setIsCashV] = useState(true)
    const [date, setDate] = useState(null)
    const [time, setTime] = useState(null)
    const [calender, setCalender] = useState(false)

    // const [isFirst, setIsFirst] = useState(true)
    function onBookNow() {
        setNoDriverModal(true)
    }
    function onProceed() {
        setBookingDetailModal(true)
        setNoDriverModal(false)
    }
    function onBookARide() {
        setBookingDetailModal(false)
    }
    function formatTime(date) {
        const a = date.toLocaleTimeString().split(' ')
        const b = a[0].split(':')
        setTime(`${b[0]}:${b[1]} ${a[1]}`)
        console.log(time)
    }
    function formatDate(date) {
        a = date.toDateString().split(' ')
        setDate(`${a[0]}, ${a[2]} ${a[1]} ${a[3]}`)
    }

    useEffect(() => {
        if (scheduleModal && !time && !date) {
            formatTime(new Date())
            formatDate(new Date())
        }
    }, [scheduleModal])
    return (
        <>
            <SafeAreaView style={{ backgroundColor: myColors.primaryT }}></SafeAreaView>
            <SafeAreaView style={{ flex: 1, }}>
                <TouchableOpacity style={{ flex: 1 }} activeOpacity={1}
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
                </TouchableOpacity>
                <View style={{ position: 'absolute' }}>
                    <Spacer paddingT={myHeight(0.7)} />
                    <TouchableOpacity style={{
                        height: myHeight(5),
                        width: myHeight(7),
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                        onPress={() => scheduleModal ? setScheduleModal(false) : navigation.goBack()} activeOpacity={0.7}>
                        <Image style={{
                            height: myHeight(3),
                            width: myHeight(3) * 1.4,
                            resizeMode: "contain",
                            tintColor: myColors.text
                        }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                    </TouchableOpacity>
                </View>

            </SafeAreaView>





            {/*Rider Type OR pickup location */}
            {pickLoc ?
                <GestureHandlerRootView>

                    <Animated.View
                        entering={SlideInDown.duration(1000).delay(700)}
                        exiting={SlideOutDown}
                        style={{
                            display: scheduleModal || noDriverModal || bookingDetailModal ? 'none' : 'flex',
                            maxHeight: myHeight(80),
                            paddingHorizontal: myWidth(4.5),
                            backgroundColor: myColors.background,
                            width: "100%", position: 'absolute', bottom: 0,
                            borderTopStartRadius: myWidth(4),
                            borderTopEndRadius: myWidth(4),
                        }}
                    >

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
                            <TouchableOpacity activeOpacity={0.7} onPress={() => onBookNow()}
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

                    </Animated.View>
                </GestureHandlerRootView>
                :
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
                        onPress={() => setPickLoc({ some: "ok" })} activeOpacity={0.7}>
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.heading,
                            color: myColors.background,
                        }]}>Confirm Location</Text>
                    </TouchableOpacity>

                    <Spacer paddingT={myHeight(4)} />

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
                        borderTopStartRadius: myWidth(4),
                        borderTopEndRadius: myWidth(4),
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
                                <View>
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => setUseCredit(!useCredit)}
                                        style={{
                                            width: myWidth(14),
                                            height: myHeight(2.6),
                                            backgroundColor: myColors.offColor7,
                                            borderRadius: myHeight(2),
                                            justifyContent: 'center',
                                            paddingHorizontal: myWidth(1),

                                        }}>
                                        <View style={{
                                            height: myHeight(2),
                                            width: myHeight(2),
                                            borderRadius: myHeight(2),
                                            backgroundColor: myColors.background,
                                            borderWidth: myHeight(0.06)
                                        }} />
                                        {
                                            useCredit &&

                                            <Animated.View
                                                entering={SliderBase}
                                                exiting={SliderBase}
                                                style={{
                                                    position: 'absolute',
                                                    height: myHeight(2.6),
                                                    borderRadius: myHeight(2),
                                                    width: myWidth(14),
                                                    justifyContent: 'center',
                                                    backgroundColor: myColors.primaryT,
                                                    paddingVertical: myHeight(0.3),
                                                    paddingHorizontal: myWidth(1),
                                                }}>
                                                <View style={{
                                                    height: myHeight(2),
                                                    width: myHeight(2),
                                                    borderRadius: myHeight(2),
                                                    backgroundColor: myColors.background,
                                                    borderWidth: myHeight(0.06),
                                                    alignSelf: 'flex-end'

                                                }} />
                                            </Animated.View>
                                        }

                                    </TouchableOpacity>
                                </View>
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
                    style={{
                        // height: myHeight(100), width: myWidth(100),
                        // backgroundColor: '#00000030',
                        // position: 'absolute',
                        // borderTopStartRadius: myWidth(4),
                        // borderTopEndRadius: myWidth(4),
                        backgroundColor: '#00000030',
                        position: 'absolute',
                        zIndex: 11,
                    }}
                    contentContainerStyle={{
                        height: myHeight(100), width: myWidth(100),
                        borderTopStartRadius: myWidth(4),
                        borderTopEndRadius: myWidth(4),
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

                        {/* Book Now Button */}
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setPromoModal(false)}
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





            {/* Schedule Modal */}
            {
                scheduleModal &&
                <Animated.View
                    entering={FadeIn}
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
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setScheduleModal(false)}
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
                        <TouchableOpacity activeOpacity={0.8} onPress={() => onProceed()}
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

                <Animated.View
                    entering={SlideInDown.duration(700)}
                    exiting={SlideOutDown}
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
                    {/* Choose a type */}
                    <Text style={[
                        styles.textCommon,
                        {
                            fontSize: myFontSize.xxSmall,
                            fontFamily: myFonts.body,
                        }
                    ]}>Select your exact pickup point</Text>



                    <Spacer paddingT={myHeight(1.2)} />

                    {/* Rider */}
                    <TouchableOpacity activeOpacity={1} onPress={() => setTypeIndex(i)}
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
                            <View>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => setUseCredit(!useCredit)}
                                    style={{
                                        width: myWidth(14),
                                        height: myHeight(2.6),
                                        backgroundColor: myColors.offColor7,
                                        borderRadius: myHeight(2),
                                        justifyContent: 'center',
                                        paddingHorizontal: myWidth(1),

                                    }}>
                                    <View style={{
                                        height: myHeight(2),
                                        width: myHeight(2),
                                        borderRadius: myHeight(2),
                                        backgroundColor: myColors.background,
                                        borderWidth: myHeight(0.06)
                                    }} />
                                    {
                                        useCredit &&

                                        <Animated.View
                                            entering={SliderBase}
                                            exiting={SliderBase}
                                            style={{
                                                position: 'absolute',
                                                height: myHeight(2.6),
                                                borderRadius: myHeight(2),
                                                width: myWidth(14),
                                                justifyContent: 'center',
                                                backgroundColor: myColors.primaryT,
                                                paddingVertical: myHeight(0.3),
                                                paddingHorizontal: myWidth(1),
                                            }}>
                                            <View style={{
                                                height: myHeight(2),
                                                width: myHeight(2),
                                                borderRadius: myHeight(2),
                                                backgroundColor: myColors.background,
                                                borderWidth: myHeight(0.06),
                                                alignSelf: 'flex-end'

                                            }} />
                                        </Animated.View>
                                    }

                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

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



                    {/* Book Now Button */}
                    <TouchableOpacity activeOpacity={0.7} onPress={() => onBookARide()}
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