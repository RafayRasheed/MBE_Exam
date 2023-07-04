import { Image, LayoutAnimation, SafeAreaView, ScrollView, SliderBase, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { myColors } from '../../../../../ultils/myColors'
import { Spacer, ios, myHeight, myWidth } from '../../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../../ultils/myFonts'
import Animated, { SlideInDown, SlideInLeft, SlideInUp, SlideOutDown, SlideOutLeft } from 'react-native-reanimated'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CalenderDate } from '../../ride/ride_component/calender'

export const ResAddCard = ({ navigation }) => {
    const [card, setCard] = useState(null);
    const [expiry, setExpiry] = useState(null);
    const [ccv, setCcv] = useState(null);
    const [name, setName] = useState(null);
    const [showCalender, setShowCalender] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(null)


    useEffect(() => {
        console.log(errorMessage)
        if (errorMessage) {
            setTimeout(() => {
                setErrorMessage(null)
            }, 2000)
        }
    }, [errorMessage])

    function onAddCard() {
        setLoading(true)
        if (verifyCard() && verifyExpiry() && verifyCVV() && verifyName()) {
            setTimeout(() => {
                setLoading(false)
                navigation.navigate('CardDone')
            }, 1000)
        } else {
            setLoading(false)
        }
    }
    function verifyCard() {
        if (card) {
            return true
        }
        setErrorMessage('Please Enter a Card Number')
        return false
    }
    function verifyExpiry() {
        if (expiry) {
            return true
        }
        setErrorMessage('Please Enter a Expiry Date')
        return false
    }
    function verifyCVV() {
        if (ccv) {
            return true
        }
        setErrorMessage('Please Enter a CVV Number')
        return false
    }
    function verifyName() {
        if (name) {
            return true
        }
        setErrorMessage('Please Enter a Full Name')
        return false
    }

    function getDate(date) {
        const d = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
        setExpiry(d)
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView style={{}}>
                    {/* Top  */}
                    <View style={{ overflow: 'hidden', paddingBottom: myHeight(1), }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: myColors.background,
                            elevation: 6.5, shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2.5 },
                            shadowOpacity: 0.2,
                            shadowRadius: 2,
                            paddingVertical: myHeight(1)
                        }}>
                            <Spacer paddingEnd={myWidth(3)} />
                            {/* Back */}
                            <TouchableOpacity
                                activeOpacity={0.7} onPress={() => navigation.goBack()}
                                style={{
                                    height: myHeight(3.8),
                                    width: myHeight(3.8),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image style={{
                                    height: myHeight(2.8),
                                    width: myHeight(2.8),
                                    resizeMode: 'contain',
                                    tintColor: myColors.text
                                }} source={require('../../../../assets/home_main/dashboards/back2.png')} />
                            </TouchableOpacity>

                            <Spacer paddingEnd={myWidth(2)} />
                            {/* Name */}
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.body,
                                fontFamily: myFonts.bodyBold,
                            }]}>Add Card</Text>
                        </View>

                    </View>
                    <View style={{ paddingHorizontal: myWidth(4.5) }}>


                        <Spacer paddingT={myHeight(2.5)} />

                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.xBody,
                            fontFamily: myFonts.heading,
                        }]}>Add Card Details</Text>
                        <Spacer paddingT={myHeight(1)} />

                        {/* Add to card */}
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body0,
                            fontFamily: myFonts.headingBold,
                        }]}>Note: <Text style={{ fontFamily: myFonts.body, }}>
                                In order to verify your account we may charge your account with small amount that will be refunded.
                            </Text>
                        </Text>
                        <Spacer paddingT={myHeight(3.3)} />

                        {/* text card num */}
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.bodyBold,
                        }]}>Card number</Text>
                        <Spacer paddingT={myHeight(1)} />

                        {/* Input Card Number */}
                        <View style={styles.containerInput}>

                            <TextInput placeholder=""
                                keyboardType={'number-pad'}
                                placeholderTextColor={myColors.textL3}
                                selectionColor={myColors.primaryT}
                                cursorColor={myColors.primaryT}
                                value={card} onChangeText={setCard}
                                style={styles.textInput}
                            />
                        </View>

                        <Spacer paddingT={myHeight(2)} />

                        {/* Expiry & CCV */}
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>

                            <View style={{ width: '53%' }}>
                                {/* text expiry date*/}
                                <Text style={[styles.textCommon, {
                                    fontSize: myFontSize.body,
                                    fontFamily: myFonts.bodyBold,
                                }]}>Expiry date</Text>
                                <Spacer paddingT={myHeight(1)} />

                                {/* Input expiry date */}
                                <TouchableOpacity activeOpacity={0.8} onPress={() => setShowCalender(true)}
                                    style={[styles.containerInput,]}>

                                    <TextInput placeholder="MM/YY"
                                        placeholderTextColor={myColors.textL3}
                                        pointerEvents="none"
                                        editable={false}
                                        value={expiry}
                                        style={[styles.textInput]}
                                    />
                                    <Image source={require('../../../../assets/home_main/dashboards/ride/question.png')}
                                        style={{
                                            width: myHeight(2),
                                            height: myHeight(2),
                                            resizeMode: 'contain',
                                            // tintColor: myColors.primaryT
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '43%' }}>
                                {/* text CCV*/}
                                <Text style={[styles.textCommon, {
                                    fontSize: myFontSize.body,
                                    fontFamily: myFonts.bodyBold,
                                }]}>CVV</Text>
                                <Spacer paddingT={myHeight(1)} />
                                {/* Input CCV */}
                                <View style={[styles.containerInput,]}>

                                    <TextInput placeholder=" CVV"
                                        keyboardType={'number-pad'}
                                        placeholderTextColor={myColors.textL3}
                                        selectionColor={myColors.primaryT}
                                        cursorColor={myColors.primaryT}
                                        value={ccv} onChangeText={setCcv}
                                        style={[styles.textInput]}
                                    />
                                </View>
                            </View>
                        </View>

                        <Spacer paddingT={myHeight(2)} />
                        {/* text name */}
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.bodyBold,
                        }]}>Full name</Text>

                        <Spacer paddingT={myHeight(1)} />
                        {/* Input name*/}
                        <View style={styles.containerInput}>

                            <TextInput placeholder=" Enter your name"
                                placeholderTextColor={myColors.textL3}
                                selectionColor={myColors.primaryT}
                                cursorColor={myColors.primaryT}
                                value={name} onChangeText={setName}
                                style={styles.textInput}
                            />
                        </View>

                        <Spacer paddingT={myHeight(1.5)} />
                        {/* Visa, ---, America  */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => null}>
                                <Image source={require('../../../../assets/home_main/dashboards/ride/visa.png')}
                                    style={{
                                        width: myHeight(2.58) * 2.58,
                                        height: myHeight(2.58),
                                        resizeMode: 'contain',
                                        // tintColor: myColors.primaryT
                                    }}
                                />
                            </TouchableOpacity>
                            <Spacer paddingEnd={myWidth(2.5)} />

                            <TouchableOpacity activeOpacity={0.7} onPress={() => null}>
                                <Image source={require('../../../../assets/home_main/dashboards/ride/third.png')}
                                    style={{
                                        width: myHeight(2.58) * 2.58,
                                        height: myHeight(2.58),
                                        resizeMode: 'contain',
                                        // tintColor: myColors.primaryT
                                    }}
                                />
                            </TouchableOpacity>
                            <Spacer paddingEnd={myWidth(2.5)} />

                            <TouchableOpacity activeOpacity={0.7} onPress={() => null}>
                                <Image source={require('../../../../assets/home_main/dashboards/ride/american.png')}
                                    style={{
                                        width: myHeight(2.3) * 2.58,
                                        height: myHeight(2.3),
                                        resizeMode: 'contain',
                                        // tintColor: myColors.primaryT
                                    }}
                                />
                            </TouchableOpacity>


                        </View>
                    </View>

                </KeyboardAwareScrollView>

                {/* Bottom */}
                <View style={{ paddingHorizontal: myWidth(4.5) }}>
                    {/* Add Card Button */}
                    <TouchableOpacity activeOpacity={0.8} onPress={onAddCard}
                        onLongPress={() => navigation.navigate('ResCardDone')}
                        style={{
                            backgroundColor: myColors.primaryT,
                            borderRadius: myHeight(1),
                            paddingVertical: myHeight(1),
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
                        ]}>Add Card</Text>

                    </TouchableOpacity>

                    {/* Safe & All  */}
                    <View style={{
                        height: myHeight(4), flexDirection: 'row',
                        alignItems: 'center', alignSelf: 'center', justifyContent: 'center'
                    }}
                    >
                        <Image source={require('../../../../assets/home_main/dashboards/ride/safe.png')}
                            style={{
                                width: myHeight(1.5),
                                height: myHeight(1.5),
                                resizeMode: 'contain',
                                // tintColor: myColors.primaryT
                            }}
                        />
                        <Spacer paddingEnd={myWidth(1)} />
                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.xSmall,
                                fontFamily: myFonts.body,
                            }
                        ]}>All payment information is stored securely</Text>
                    </View>

                </View>

            </SafeAreaView>

            {
                showCalender &&
                <CalenderDate show={setShowCalender} value={getDate} />
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background,
        justifyContent: 'space-between',
        // paddingHorizontal: 

    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: myHeight(0.8),
        paddingHorizontal: myWidth(2.5),
        borderWidth: myHeight(0.09),
        borderColor: myColors.primaryT,
        backgroundColor: myColors.offColor4,

        // elevation: 2,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.1,
        // shadowRadius: 3,
    },
    textInput: {
        flex: 1,
        textAlignVertical: 'center',
        paddingVertical: ios ? myHeight(1) : myHeight(100) > 600 ? myHeight(0.7) : myHeight(0.1),
        fontSize: myFontSize.body2,
        color: myColors.text,
        includeFontPadding: false,
        fontFamily: myFonts.bodyBold,
    },

    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },



})