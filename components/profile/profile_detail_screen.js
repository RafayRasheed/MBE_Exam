import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../ultils/myFonts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Animated, { SlideInDown } from 'react-native-reanimated';



export const ProfileDetails = ({ navigation }) => {
    const [email, setEmail] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [code, setCode] = useState(null)
    const [password, setPass] = useState(null)
    const [hidePass, setHidePass] = useState(true);

    const [confirmModal, setConfirmModal] = useState(null)

    function onLogout() {

        navigation.navigate('AccountNavigator')
    }

    return (
        <>
            {/* <StatusBar backgroundColor={orderModal ? '#00000030' : myColors.background} /> */}
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: myColors.background,
            }}>
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
                            }} source={require('../assets/home_main/dashboards/back2.png')} />
                        </TouchableOpacity>

                        <Spacer paddingEnd={myWidth(2)} />
                        {/* Name */}
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.bodyBold,
                        }]}>Profile</Text>
                    </View>

                </View>

                {/* Content */}
                <KeyboardAwareScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: myWidth(4), backgroundColor: myColors.background, flexGrow: 1
                }}>

                    <Spacer paddingT={myHeight(1)} />
                    {/* Referral Code */}
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body,
                        fontFamily: myFonts.body,
                    }]}>Referral Code</Text>

                    <Spacer paddingT={myHeight(1)} />
                    {/* Referral Code */}
                    <View style={styles.containerInput}>
                        <Image style={{
                            height: myHeight(2), width: myHeight(2), resizeMode: 'contain', tintColor: myColors.primaryT
                        }} source={require('../assets/profile/code.png')} />

                        <Spacer paddingEnd={myWidth(2.5)} />
                        <TextInput placeholder="Referral Code"
                            keyboardType={'number-pad'}
                            placeholderTextColor={myColors.offColor}
                            selectionColor={myColors.primaryT}
                            cursorColor={myColors.primaryT}
                            autoCorrect={false}
                            value={code} onChangeText={setCode}
                            style={styles.input}
                        />
                    </View>




                    <Spacer paddingT={myHeight(2)} />
                    {/* Phone Number */}
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body,
                        fontFamily: myFonts.body,
                    }]}>Phone Number</Text>

                    <Spacer paddingT={myHeight(1)} />
                    {/* Phone Number */}
                    <View style={styles.containerInput}>
                        <Image style={{
                            height: myHeight(2), width: myHeight(2), resizeMode: 'contain', tintColor: myColors.primaryT
                        }} source={require('../assets/account/iPhone.png')} />

                        <Spacer paddingEnd={myWidth(2.5)} />
                        <TextInput placeholder="Phone Number"
                            keyboardType={'number-pad'}
                            placeholderTextColor={myColors.offColor}
                            selectionColor={myColors.primaryT}
                            cursorColor={myColors.primaryT}
                            autoCorrect={false}
                            value={phone} onChangeText={setPhone}
                            style={styles.input}
                        />
                    </View>




                    <Spacer paddingT={myHeight(2)} />
                    {/* First Name */}
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body,
                        fontFamily: myFonts.body,
                    }]}>First Name</Text>

                    <Spacer paddingT={myHeight(1)} />
                    {/* First Name */}
                    <View style={styles.containerInput}>
                        <Image style={{
                            height: myHeight(2), width: myHeight(2), resizeMode: 'contain', tintColor: myColors.primaryT
                        }} source={require('../assets/account/iName.png')} />

                        <Spacer paddingEnd={myWidth(2.5)} />
                        <TextInput placeholder="First Name"
                            placeholderTextColor={myColors.offColor}
                            selectionColor={myColors.primaryT}
                            cursorColor={myColors.primaryT}
                            autoCorrect={false}
                            value={firstName} onChangeText={setFirstName}
                            style={styles.input}
                        />
                    </View>




                    <Spacer paddingT={myHeight(2)} />
                    {/* Last Name */}
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body,
                        fontFamily: myFonts.body,
                    }]}>Last Name</Text>

                    <Spacer paddingT={myHeight(1)} />
                    {/* Last Name */}
                    <View style={styles.containerInput}>
                        <Image style={{
                            height: myHeight(2), width: myHeight(2), resizeMode: 'contain', tintColor: myColors.primaryT
                        }} source={require('../assets/account/iName.png')} />

                        <Spacer paddingEnd={myWidth(2.5)} />
                        <TextInput placeholder="Last Name"
                            placeholderTextColor={myColors.offColor}
                            selectionColor={myColors.primaryT}
                            cursorColor={myColors.primaryT}
                            autoCorrect={false}
                            value={lastName} onChangeText={setLastName}
                            style={styles.input}
                        />
                    </View>




                    <Spacer paddingT={myHeight(2)} />
                    {/* Email Address */}
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body,
                        fontFamily: myFonts.body,
                    }]}>Email Address</Text>

                    <Spacer paddingT={myHeight(1)} />
                    {/* Email Address */}
                    <View style={styles.containerInput}>
                        <Image style={{
                            height: myHeight(2), width: myHeight(2), resizeMode: 'contain', tintColor: myColors.primaryT
                        }} source={require('../assets/account/iEmail.png')} />

                        <Spacer paddingEnd={myWidth(2.5)} />
                        <TextInput placeholder="Email Address"
                            keyboardType={'email-address'}
                            autoCorrect={false}
                            placeholderTextColor={myColors.offColor}
                            selectionColor={myColors.primaryT}
                            cursorColor={myColors.primaryT}
                            value={email} onChangeText={setEmail}
                            style={styles.input}
                        />
                    </View>




                    <Spacer paddingT={myHeight(2)} />
                    {/* Password */}
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body,
                        fontFamily: myFonts.body,
                    }]}>Password</Text>

                    <Spacer paddingT={myHeight(1)} />
                    {/* Password */}
                    <View style={styles.containerInput}>
                        <Image style={{
                            height: myHeight(2), width: myHeight(2), resizeMode: 'contain', tintColor: myColors.primaryT
                        }} source={require('../assets/account/iPass.png')} />

                        <Spacer paddingEnd={myWidth(2.5)} />
                        <TextInput placeholder="Password"
                            secureTextEntry={hidePass}
                            autoCorrect={false}
                            placeholderTextColor={myColors.offColor}
                            selectionColor={myColors.primaryT}
                            cursorColor={myColors.primaryT}
                            value={password} onChangeText={setPass}
                            style={styles.input}
                        />

                        <TouchableOpacity activeOpacity={0.6} onPress={() => setHidePass(!hidePass)}>
                            <Image style={{
                                height: myHeight(2.8),
                                width: myHeight(2.8),
                                resizeMode: 'contain',
                            }}
                                source={hidePass ? require('../assets/account/eyeC.png') : require('../assets/account/eyeO.png')} />
                        </TouchableOpacity>
                    </View>




                    <Spacer paddingT={myHeight(2)} />
                    {/* Buttons */}
                    <View style={{ paddingHorizontal: myWidth(0), }}>
                        <Spacer paddingT={myHeight(1.5)} />


                        {/* Edit Profile */}
                        <TouchableOpacity activeOpacity={0.9} onPress={() => null}
                            style={{
                                backgroundColor: myColors.primaryT,
                                borderRadius: myHeight(0.8),
                                paddingVertical: myHeight(1.1),
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.heading,
                                    color: myColors.background,
                                }
                            ]}>Edit Profile</Text>
                        </TouchableOpacity>


                        <Spacer paddingT={myHeight(2)} />
                        {/* Logout */}
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setConfirmModal(true)}
                            style={{
                                backgroundColor: myColors.background,
                                borderRadius: myHeight(0.8),
                                paddingVertical: myHeight(1.1),
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: myHeight(0.1), borderColor: myColors.primaryT,
                                flexDirection: 'row',
                            }}>

                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.heading,
                                    color: myColors.primaryT,
                                }
                            ]}>Logout</Text>
                        </TouchableOpacity>
                        <Spacer paddingT={myHeight(2.5)} />

                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>

            {/* Cancel a Ride*/}
            {
                confirmModal &&
                <View
                    style={{

                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        backgroundColor: '#00000030',
                    }}

                >
                    <TouchableOpacity activeOpacity={1}
                        style={{
                            flex: 1, paddingHorizontal: myWidth(4.5),
                        }}
                        onPress={() => setConfirmModal(false)}
                    >
                    </TouchableOpacity>
                    <Animated.View
                        entering={SlideInDown.duration(300)}
                        style={{
                            paddingHorizontal: myWidth(4.5),
                            backgroundColor: myColors.background,
                            borderTopStartRadius: myWidth(4),
                            borderTopEndRadius: myWidth(4),
                            // paddingHorizontal: myWidth(4.5),
                            // backgroundColor: myColors.background,
                            // width: "100%", position: 'absolute', bottom: 0,
                            // borderTopStartRadius: myWidth(4),
                            // borderTopEndRadius: myWidth(4),
                        }}>

                        <Spacer paddingT={myHeight(2)} />

                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.xBody,
                                fontFamily: myFonts.bodyBold,
                            }
                        ]}>Are you sure you want to sign out?</Text>
                        {/* <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body,
                                fontFamily: myFonts.body,
                            }
                        ]}>We are finding your nearest Captain.</Text> */}

                        <Spacer paddingT={myHeight(3)} />

                        {/* Yes Button */}
                        <TouchableOpacity activeOpacity={0.8} onPress={onLogout}
                            style={{
                                backgroundColor: myColors.primaryT,
                                borderRadius: myHeight(0.5),
                                paddingVertical: myHeight(1.1),
                                width: '100%', justifyContent: 'center',
                                alignItems: 'center', alignSelf: 'center'
                            }}>

                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.body,
                                    fontFamily: myFonts.bodyBold,
                                    color: myColors.background,
                                }
                            ]}>CONFIRM SIGN OUT</Text>

                        </TouchableOpacity>

                        <Spacer paddingT={myHeight(2)} />
                        {/* No Keep Ride Button */}
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setConfirmModal(false)}
                            style={{
                                borderColor: myColors.primaryT,
                                borderRadius: myHeight(0.5),
                                borderWidth: myHeight(0.2),
                                paddingVertical: myHeight(1),
                                width: '100%', justifyContent: 'center',
                                alignItems: 'center', alignSelf: 'center'
                            }}>

                            <Text style={[
                                styles.textCommon,
                                {
                                    fontSize: myFontSize.body,
                                    fontFamily: myFonts.bodyBold,
                                    color: myColors.primaryT,
                                }
                            ]}>CANCEL</Text>

                        </TouchableOpacity>
                        <Spacer paddingT={myHeight(4)} />

                    </Animated.View>

                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    //Text
    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },

    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: myWidth(2.5),
        paddingHorizontal: myWidth(3),
        borderWidth: myHeight(0.09),
        borderColor: myColors.primaryT,
        backgroundColor: myColors.background,
    },

    input: {
        flex: 1,
        textAlignVertical: 'center',
        paddingVertical: ios ? myHeight(1) : myHeight(100) > 600 ? myHeight(0.55) : myHeight(0.2),
        fontSize: myFontSize.body,
        color: myColors.text,
        includeFontPadding: false,
        fontFamily: myFonts.bodyBold,
    }
})