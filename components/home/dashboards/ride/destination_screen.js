import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { myColors } from '../../../../ultils/myColors'
import { Spacer, ios, myHeight, myWidth } from '../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts'
import { recentLocations, saveLocIds } from './ride_data'
import Animated, { BounceIn, FadeInUp, FadingTransition } from 'react-native-reanimated'

export const DestinationScreen = ({ navigation }) => {
    const [currentLoc, setCurrentLoc] = useState('61-C 24th St, Phase V Tauheed')
    const [destination, setDestination] = useState(null)
    const [showRecentList, setShowResentList] = useState(false)
    const [showPopUp, setShowPopUp] = useState(false)
    return (
        <>
            <SafeAreaView style={{ backgroundColor: myColors.primaryT }}></SafeAreaView>

            <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background }}>
                {/* Top */}
                <Spacer paddingT={myHeight(0.7)} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.containerImageBack}
                        onPress={() => navigation.goBack()} activeOpacity={0.7}>
                        <Image style={styles.imageBack} source={require('../../../assets/home_main/dashboards/back2.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textTop}>Book a service</Text>
                </View>
                <Spacer paddingT={myHeight(2)} />

                {/* Locations */}
                <View style={{ overflow: 'hidden', paddingBottom: myHeight(1) }}>

                    <View style={styles.containerLocations}>
                        <View style={{ flexDirection: 'row' }}>
                            {/* Dot & Img Loc */}
                            <View style={{ paddingVertical: ios ? 0 : myHeight(0.9), alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={styles.containerDot} />
                                <Text style={{
                                    fontFamily: myFonts.bodyBold,
                                    fontSize: myFontSize.body,
                                    letterSpacing: myLetSpacing.common,
                                    includeFontPadding: false,
                                    padding: 0, color: myColors.text, height: myHeight(1)
                                }}>|</Text>
                                <Text style={{
                                    fontFamily: myFonts.bodyBold,
                                    fontSize: myFontSize.body,
                                    letterSpacing: myLetSpacing.common,
                                    includeFontPadding: false,
                                    padding: 0, color: myColors.text, height: myHeight(1)
                                }}>|</Text>
                                <Image style={styles.imageLoc}
                                    source={require('../../../assets/home_main/dashboards/location2.png')} />
                            </View>

                            {/* Current Loc & Where */}
                            <View style={{ flex: 1, paddingStart: myWidth(2) }}>
                                <TextInput placeholder="Your Location"
                                    placeholderTextColor={myColors.textL6}
                                    selectionColor={myColors.primaryT}
                                    style={styles.containerInput} cursorColor={myColors.primaryT}
                                    value={currentLoc} onChangeText={setCurrentLoc}
                                    autoCorrect={false} />

                                <Spacer paddingT={myHeight(0.8)} />
                                <View style={styles.containerDivider} />
                                <Spacer paddingT={myHeight(0.8)} />
                                <TextInput placeholder="Where to?"
                                    onFocus={() => setShowResentList(true)}
                                    // onEndEditing={() => console.log('k1')}
                                    placeholderTextColor={myColors.textL6}
                                    selectionColor={myColors.primaryT}
                                    style={styles.containerInput} cursorColor={myColors.primaryT}
                                    value={destination} onChangeText={setDestination}
                                    autoCorrect={false} />
                                {/* <TouchableOpacity activeOpacity={0.7} onPress={() => null}>
                                <Text numberOfLines={1}
                                    style={[styles.textLoc, { color: myColors.textL6 }]}>Where to?</Text>
                            </TouchableOpacity> */}
                            </View>
                        </View>
                        <Spacer paddingT={myHeight(1.6)} />

                    </View>
                </View>

                <Spacer paddingT={myHeight(1.6)} />

                {/* Recent Locations */}
                <View style={{ paddingHorizontal: myWidth(4.6) }}>
                    <Text style={styles.textRecent}>Recent Locations</Text>
                    <Spacer paddingT={myHeight(1.6)} />

                    {/* Save Place */}
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }} activeOpacity={0.7}>
                            <View style={{
                                borderRadius: myHeight(2), padding: myHeight(0.6), paddingTop: myHeight(0.4),
                                backgroundColor: myColors.primaryL2
                            }}>
                                <Image style={styles.imageStar}
                                    source={require('../../../assets/home_main/dashboards/starF.png')} />
                            </View>
                            <Spacer paddingEnd={myWidth(3)} />
                            <Text style={styles.textSavePlace}>SAVED PLACE</Text>
                        </TouchableOpacity>
                    </View>

                    <Spacer paddingT={myHeight(1.1)} />
                    <View style={styles.containerDivider} />
                    {/* Recent Location List */}
                    {showRecentList &&
                        recentLocations.map((item, i) => {
                            const isInSave = saveLocIds.includes(item.id)
                            return (
                                <Animated.View entering={FadeInUp.delay(0 + (150 * i))} key={i} style={{}}>
                                    <Spacer paddingT={myHeight(2)} />

                                    <TouchableOpacity activeOpacity={0.8}
                                        onPress={() => navigation.navigate('RideHome', { currentLoc, pickLocation: item.address })} style={{ flexDirection: 'row' }}>
                                        <View style={{
                                            marginTop: myHeight(0.5),
                                            width: myHeight(3.2), height: myHeight(3.2),
                                            borderRadius: myHeight(2), justifyContent: 'center',
                                            backgroundColor: myColors.primaryL2, alignItems: 'center'
                                        }}>
                                            <Image style={styles.imageStar}
                                                source={require('../../../assets/home_main/dashboards/location.png')} />
                                        </View>
                                        <Spacer paddingEnd={myWidth(3)} />

                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ flex: 1 }}>
                                                <Text numberOfLines={1} style={styles.textRecentLocName}>{item.name}</Text>
                                                <Text numberOfLines={1} style={styles.textRecentLoc}>{item.address}</Text>
                                            </View>

                                            <TouchableOpacity activeOpacity={0.7}
                                                onPress={() => {
                                                    if (isInSave) {
                                                        setShowPopUp(true)
                                                        return
                                                    }
                                                    navigation.navigate('SaveLocation', { item })
                                                }}
                                                style={{ padding: myHeight(0.5) }}>
                                                <Image style={styles.imageHeart}
                                                    source={isInSave ? require('../../../assets/home_main/dashboards/heart.png')
                                                        : require('../../../assets/home_main/dashboards/heart_o.png')} />
                                            </TouchableOpacity>
                                        </View>

                                    </TouchableOpacity>
                                    <Spacer paddingT={myHeight(2)} />

                                    <View style={styles.containerDivider} />

                                </Animated.View>
                            )
                        }

                        )
                    }
                    <Spacer paddingT={myHeight(2)} />

                    {/* Set Location On map */}
                    {showRecentList &&
                        <Animated.View entering={FadeInUp.delay(150 * recentLocations.length)} style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('RideHome', { currentLoc, pickLocation: null })}
                                style={{ alignItems: 'center', flexDirection: 'row' }}
                                activeOpacity={0.7}>
                                <View style={{
                                    borderRadius: myHeight(2), padding: myHeight(0.6),
                                    backgroundColor: myColors.primaryL2
                                }}>
                                    <Image style={styles.imageStar}
                                        source={require('../../../assets/home_main/dashboards/location.png')} />
                                </View>
                                <Spacer paddingEnd={myWidth(3)} />
                                <Text style={styles.textRecentLocName}>Set location on map</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    }
                </View>


            </SafeAreaView>


            {/* POP Up */}
            {
                showPopUp &&


                <View style={{
                    position: 'absolute', justifyContent: 'center',
                    backgroundColor: '#00000042', height: myHeight(100), width: myWidth(100),
                    alignItems: 'center', paddingHorizontal: myWidth(4.5)
                }}>

                    <Animated.View
                        entering={BounceIn.duration(300)}
                        style={{
                            width: "100%", backgroundColor: myColors.background,
                            paddingHorizontal: myWidth(4.6), borderRadius: myHeight(1.5)

                        }}>
                        <Spacer paddingT={myHeight(2)} />
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.bodyBold,
                                color: myColors.text,
                                letterSpacing: myLetSpacing.common,
                                includeFontPadding: false,
                                padding: 0,
                            }}
                        >Are you sure you want to remove{'\n'}this saved location?</Text>
                        <Spacer paddingT={myHeight(2)} />
                        <View
                            style={{
                                flexDirection: 'row', justifyContent: 'space-between',
                            }}>
                            {/* NO */}
                            <TouchableOpacity activeOpacity={0.6} onPress={() => setShowPopUp(false)}
                                style={{
                                    width: '48%', borderWidth: myHeight(0.09),
                                    borderColor: myColors.primaryT, borderRadius: myHeight(0.8),
                                    paddingVertical: myHeight(0.8)
                                }}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontSize: myFontSize.xBody,
                                        fontFamily: myFonts.bodyBold,
                                        color: myColors.primaryT,
                                        letterSpacing: myLetSpacing.common,
                                        includeFontPadding: false,
                                        padding: 0,
                                    }}
                                >No</Text>
                            </TouchableOpacity>
                            {/* Yes */}
                            <TouchableOpacity activeOpacity={0.8} onPress={() => null}
                                style={{
                                    width: '48%', borderWidth: myHeight(0.09),
                                    borderColor: myColors.primaryT, borderRadius: myHeight(0.8),
                                    paddingVertical: myHeight(0.8), backgroundColor: myColors.primaryT
                                }}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontSize: myFontSize.xBody,
                                        fontFamily: myFonts.bodyBold,
                                        color: myColors.background,
                                        letterSpacing: myLetSpacing.common,
                                        includeFontPadding: false,
                                        padding: 0,
                                    }}
                                >Yes</Text>
                            </TouchableOpacity>
                        </View>
                        <Spacer paddingT={myHeight(3)} />



                    </Animated.View>

                </View>
            }
        </>

    )
}
const styles = StyleSheet.create({
    containerImageBack: {
        height: myHeight(5),
        width: myHeight(7),
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerDot: {
        height: myHeight(1.4),
        width: myHeight(1.4),
        backgroundColor: myColors.primaryT,
        borderRadius: myHeight(2),
    },
    containerDivider: {
        borderTopWidth: myHeight(0.075),
        borderColor: myColors.offColor
    },
    containerLocations: {
        paddingHorizontal: myWidth(5),
        backgroundColor: myColors.background,
        elevation: 8, shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    containerInput: {
        textAlignVertical: 'center',
        fontSize: myFontSize.body2,
        color: myColors.text,
        fontFamily: myFonts.body,
        // backgroundColor: 'red',
        includeFontPadding: false,
        paddingHorizontal: 0,
        paddingVertical: 0,
        // paddingVertical: ios ? myHeight(0.6) : myHeight(100) > 600 ? myHeight(0.5) : myHeight(0),
    },


    //Text
    textTop: {
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textLoc: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.body,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textRecent: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.bodyBold,
        color: myColors.primaryT,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textSavePlace: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textRecentLocName: {
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textRecentLoc: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.body,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },


    // Image
    imageBack: {
        height: myHeight(3),
        width: myHeight(3) * 1.4,
        resizeMode: "contain",
        tintColor: myColors.text
    },
    imageLoc: {
        height: myHeight(2.6),
        width: myHeight(2.6),
        resizeMode: "contain",
        tintColor: myColors.text
    },
    imageStar: {
        height: myHeight(2),
        width: myHeight(2),
        resizeMode: "contain",
        tintColor: myColors.primaryT
    },
    imageHeart: {
        height: myHeight(3.2),
        width: myHeight(3.2),
        resizeMode: "contain",
        tintColor: myColors.primaryT
    }

})