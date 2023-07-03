import { Spacer, ios, myHeight, myWidth } from '../../../../../common';
import { myFonts, myLetSpacing, myFontSize } from '../../../../../../ultils/myFonts';

import { myColors } from '../../../../../../ultils/myColors';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { CalenderDate } from '../../../ride/ride_component/calender';
import { useEffect, useState } from 'react';


export const Schedule = ({ setDateTime, setShowModal, setDeleivry }) => {
    const [showCalenderModal, setShowCalenderModal] = useState(false)
    const [PickUpDate, setPickUpDate] = useState(null)
    const [PickUpTime, setPickUpTime] = useState(null)

    function onUpdate() {

        if (PickUpDate && PickUpTime) {
            const dt = `${PickUpDate}, ${PickUpTime}`
            setDateTime(dt)
            setDeleivry(false)
            hideModal()

        }

    }
    function hideModal() {
        setShowModal(false)
    }

    function formatTime(date) {
        const t = formT(date)

        setPickUpTime(t)

    }
    function formatDate(date) {
        const t = formD(date)

        setPickUpDate(t)

    }
    function formD(date) {
        a = date.toDateString().split(' ')
        const t = `${a[1]} ${a[2]}`
        return t
    }

    function formT(date) {
        const a = date.toLocaleTimeString().split(' ')
        const b = a[0].split(':')

        return `${b[0]}:${b[1]} ${a[1]}`
    }



    // useEffect(() => {
    //     if (!PickUpDate && !PickUpTime) {

    //         const date = formD(new Date())
    //         const time = formT(new Date())

    //         setPickUpTime(time)
    //         setPickUpDate(date)

    //         // formatDate(new Date())
    //     }
    // }, [])


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
                            activeOpacity={0.7} onPress={hideModal}
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
                        onPress={() => setShowCalenderModal(true)}
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
                        }]}>{PickUpDate ? PickUpDate : 'Select Date'}</Text>
                    </TouchableOpacity>

                    <Spacer paddingT={myHeight(2)} />

                    {/*Clock && Select Time */}
                    <TouchableOpacity activeOpacity={0.85}
                        onPress={() => setShowCalenderModal('time')}
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
                        }]}>{PickUpTime ? PickUpTime : 'Select Time'}</Text>
                    </TouchableOpacity>


                </View>

            </SafeAreaView>

            {/* Update Button */}
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


            {
                showCalenderModal &&
                <CalenderDate show={setShowCalenderModal} time={showCalenderModal == 'time' ? true : null} value={showCalenderModal == 'time' ? formatTime : formatDate} />
            }
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
