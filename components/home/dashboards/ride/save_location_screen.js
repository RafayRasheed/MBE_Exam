import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { myColors } from '../../../../ultils/myColors'
import { Spacer, myHeight, myWidth } from '../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts'
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated'

export const SaveLocation = ({ route, navigation }) => {
    const location = route.params.item
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [showCity, setShowCity] = useState(false)

    return (<>

        <SafeAreaView style={{ backgroundColor: myColors.primaryT }}></SafeAreaView>

        <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background }}>
            {/* Top */}
            <Spacer paddingT={myHeight(0.7)} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={styles.containerImageBack}
                    onPress={() => navigation.goBack()} activeOpacity={0.7}>
                    <Image style={styles.imageBack} source={require('../../../assets/home_main/dashboards/back2.png')} />
                </TouchableOpacity>
                <Text style={styles.textTop}>Save Location</Text>
            </View>
            <Spacer paddingT={myHeight(2)} />

            {/* Content */}
            <View style={{ paddingHorizontal: myWidth(4.5) }}>
                {/* Location Card */}
                <View style={styles.containerLocCard}>
                    {/* Dummy Map */}
                    <View style={{
                        width: myWidth(91),
                        height: myWidth(91) * 0.4,
                        backgroundColor: myColors.primaryL
                    }} />
                    <Spacer paddingT={myHeight(0.8)} />
                    {/* Locations Text */}
                    <View style={{ paddingHorizontal: myWidth(2), flexDirection: 'row', alignItems: 'center' }}>
                        <View style={[styles.containerCircle]} />

                        <Spacer paddingEnd={myWidth(3)} />
                        <View style={{ flex: 1 }}>
                            <Text numberOfLines={1} style={styles.textLocName}>{location.name}</Text>
                            <Text numberOfLines={1} style={styles.textLocAddress}>{location.address}</Text>
                        </View>
                    </View>
                    <Spacer paddingT={myHeight(0.8)} />
                </View>

                <Spacer paddingT={myHeight(3)} />
                <TextInput placeholder=" Name your location (Home/Work etc.)"
                    placeholderTextColor={myColors.textL4}
                    selectionColor={myColors.primaryT}
                    style={styles.containerInput} cursorColor={myColors.primaryT}
                    value={name} onChangeText={setName}
                    autoCorrect={false} />

                {/* Divider */}
                <View style={styles.containerDivider} />


                <View style={{ height: myHeight(7.5), justifyContent: 'center' }}>
                    {showCity ?
                        <Animated.View entering={FadeIn.duration(800)}>
                            {/* <Spacer paddingT={myHeight(3)} /> */}
                            <TextInput placeholder=" City Name"
                                // onEndEditing={() => console.log('k1')}
                                placeholderTextColor={myColors.textL4}
                                selectionColor={myColors.primaryT}
                                style={styles.containerInput} cursorColor={myColors.primaryT}
                                value={city} onChangeText={setCity}
                                autoCorrect={false} />
                            {/* Divider */}
                            <View style={styles.containerDivider} />
                        </Animated.View>
                        :
                        <TouchableOpacity style={{ paddingTop: myHeight(2), alignItems: 'center', flexDirection: 'row' }} activeOpacity={0.7} onPress={() => setShowCity(true)}>
                            <Image style={styles.imagePlus} source={require('../../../assets/home_main/plus.png')} />
                            <Spacer paddingEnd={myWidth(1)} />
                            <Text style={styles.textAddOther}>ADD OTHER DETAILS</Text>
                        </TouchableOpacity>
                    }
                    {/* <Spacer paddingT={myHeight(3)} /> */}
                </View>

                <Spacer paddingT={myHeight(1.5)} />
                {/* Save Button */}
                <TouchableOpacity activeOpacity={0.8} onPress={() => null} style={styles.containerSave}>
                    <Text style={styles.textSave}>Save</Text>
                </TouchableOpacity>
            </View>



        </SafeAreaView>
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
    containerCircle: {
        height: myHeight(2.77),
        width: myHeight(2.77),
        borderRadius: myHeight(2),
        borderColor: myColors.primaryT,
        borderWidth: myHeight(0.75)
    },
    containerLocCard: {
        backgroundColor: myColors.background,
        elevation: 4, shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
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
    containerDivider: {
        borderTopWidth: myHeight(0.1),
        borderColor: myColors.offColor
    },
    containerSave: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: myColors.primaryT,
        paddingVertical: myHeight(1),
        borderRadius: myWidth(3.2),
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
    textLocName: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textLocAddress: {
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.body,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textAddOther: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.heading,
        color: myColors.primaryT,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textSave: {
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.heading,
        color: myColors.background,
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
    imagePlus: {
        height: myHeight(1.5),
        width: myHeight(1.5),
        resizeMode: "contain",
        tintColor: myColors.primaryT
    },
})
