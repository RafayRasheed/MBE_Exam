import { Spacer, ios, myHeight, myWidth } from '../../../../../common';
import { myFonts, myLetSpacing, myFontSize } from '../../../../../../ultils/myFonts';

import { myColors } from '../../../../../../ultils/myColors';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';


export const Schedule = ({ setDateTime, hideModal, setDeleivry }) => {
    function onUpdate() {
        setDateTime('jhyvb')
        hideModal(false)
        setDeleivry(false)
    }


    return (

        <SafeAreaView style={{
            height: '100%', width: myWidth(100), position: 'absolute',
            backgroundColor: myColors.background,
        }}>
            <SafeAreaView style={{ flex: 1 }}>
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
                            }} source={require('../../../../../assets/home_main/dashboards/back2.png')} />
                        </TouchableOpacity>

                        <Spacer paddingEnd={myWidth(2)} />
                        {/* Name */}
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.bodyBold,
                        }]}>Schedule</Text>
                    </View>
                </View>


                <Spacer paddingT={myHeight(2)} />
                {/* Content */}
                <View style={{ paddingHorizontal: myWidth(4) }}>
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.medium0,
                        fontFamily: myFonts.bodyBold,
                    }]}>When do you want your order delivered?</Text>

                    <Spacer paddingT={myHeight(2)} />

                    {/*Calender && Select Date */}
                    <TouchableOpacity activeOpacity={0.85}
                        onPress={() => null}
                        style={{
                            flexDirection: 'row', alignItems: 'center',
                            paddingVertical: myHeight(1.4), paddingHorizontal: myWidth(4),
                            borderWidth: myHeight(0.2), borderColor: myColors.primaryT,
                            borderRadius: myWidth(3)
                        }}>
                        {/* Calender */}
                        <Image style={{
                            height: myHeight(2.8),
                            width: myHeight(2.8),
                            resizeMode: 'contain',
                            tintColor: myColors.primaryT
                        }} source={require('../../../../../assets/home_main/dashboards/calendarF.png')} />

                        <Spacer paddingEnd={myWidth(3)} />
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.bodyBold,
                            color: myColors.textL4
                        }]}>Select Date</Text>
                    </TouchableOpacity>

                    <Spacer paddingT={myHeight(2)} />

                    {/*Clock && Select Time */}
                    <TouchableOpacity activeOpacity={0.85}
                        onPress={() => null}
                        style={{
                            flexDirection: 'row', alignItems: 'center',
                            paddingVertical: myHeight(1.4), paddingHorizontal: myWidth(4),
                            borderWidth: myHeight(0.2), borderColor: myColors.primaryT,
                            borderRadius: myWidth(3)
                        }}>
                        {/* Calender */}
                        <Image style={{
                            height: myHeight(2.8),
                            width: myHeight(2.8),
                            resizeMode: 'contain',
                            tintColor: myColors.primaryT
                        }} source={require('../../../../../assets/home_main/dashboards/clock2F.png')} />

                        <Spacer paddingEnd={myWidth(3)} />
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.bodyBold,
                            color: myColors.textL4
                        }]}>Select Time</Text>
                    </TouchableOpacity>


                </View>

            </SafeAreaView>
            <TouchableOpacity activeOpacity={0.9} onPress={onUpdate}
                style={{
                    backgroundColor: myColors.primaryT,
                    borderRadius: myHeight(0.8),
                    paddingVertical: myHeight(1.1),
                    marginVertical: myHeight(1.5),
                    marginHorizontal: myWidth(4),
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
                ]}>Update</Text>
            </TouchableOpacity>
        </SafeAreaView>

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

})
