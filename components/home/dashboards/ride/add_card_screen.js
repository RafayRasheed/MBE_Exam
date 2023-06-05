import { Image, LayoutAnimation, SafeAreaView, ScrollView, SliderBase, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { myColors } from '../../../../ultils/myColors'
import { Spacer, ios, myHeight, myWidth } from '../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts'
import Animated, { SlideInDown, SlideInLeft, SlideInUp, SlideOutDown, SlideOutLeft } from 'react-native-reanimated'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Calender, CalenderDate } from './ride_component/calender'

export const AddCard = ({ navigation }) => {
    const [card, setCard] = useState(null);
    const [expiry, setExpiry] = useState(null);
    const [ccv, setCcv] = useState(null);
    const [name, setName] = useState(null);
    const [showCalender, setShowCalender] = useState(true)

    return (
        <>
            <SafeAreaView style={{ backgroundColor: myColors.primaryT }}></SafeAreaView>
            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView style={{ paddingHorizontal: myWidth(4.5) }}>
                    {/* Top */}
                    <Spacer paddingT={myHeight(1.7)} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.containerImageBack}
                            onPress={() => navigation.goBack()} activeOpacity={0.7}>
                            <Image style={{
                                height: myHeight(2.6),
                                width: myHeight(2.6) * 1.4,
                                resizeMode: "contain",
                                tintColor: myColors.text
                            }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                        </TouchableOpacity>
                        <Spacer paddingEnd={myWidth(3)} />

                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.heading,
                        }]}>Add Card</Text>
                    </View>

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
                            <View activeOpacity={0.8} style={[styles.containerInput,]}>

                                <TextInput placeholder="MM/YY"
                                    placeholderTextColor={myColors.textL3}
                                    selectionColor={myColors.primaryT}
                                    onPressIn={() => setShowCalender(true)}
                                    editable={false}
                                    cursorColor={myColors.primaryT}
                                    value={expiry} onChangeText={setExpiry}
                                    style={[styles.textInput]}
                                />
                                <Image source={require('../../../assets/home_main/dashboards/ride/question.png')}
                                    style={{
                                        width: myHeight(2),
                                        height: myHeight(2),
                                        resizeMode: 'contain',
                                        // tintColor: myColors.primaryT
                                    }}
                                />
                            </View>
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
                            <Image source={require('../../../assets/home_main/dashboards/ride/visa.png')}
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
                            <Image source={require('../../../assets/home_main/dashboards/ride/third.png')}
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
                            <Image source={require('../../../assets/home_main/dashboards/ride/american.png')}
                                style={{
                                    width: myHeight(2.3) * 2.58,
                                    height: myHeight(2.3),
                                    resizeMode: 'contain',
                                    // tintColor: myColors.primaryT
                                }}
                            />
                        </TouchableOpacity>


                    </View>
                </KeyboardAwareScrollView>

                {/* Bottom */}
                <View style={{ paddingHorizontal: myWidth(4.5) }}>
                    {/* Add Card Button */}
                    <TouchableOpacity activeOpacity={0.8} onPress={() => null}
                        onLongPress={() => navigation.navigate('CardDone')}
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
                        <Image source={require('../../../assets/home_main/dashboards/ride/safe.png')}
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
                <CalenderDate show={setShowCalender} value={setExpiry} />
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