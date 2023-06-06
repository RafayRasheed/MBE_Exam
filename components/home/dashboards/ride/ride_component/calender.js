import { Image, Button, TouchableOpacity, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { myColors } from '../../../../../ultils/myColors'
import { myWidth, myHeight, Spacer } from '../../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../../ultils/myFonts'
import { Calendar, NewCalendarList } from 'react-native-calendars'
// import { Calendar, LocaleConfig } from 'react-native-calendars';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export const CalenderDate = ({ show, value, time = null }) => {


    const hideDatePicker = () => {
        show(false);
    };

    const handleConfirm = (date) => {
        value(date)
        hideDatePicker();
    };



    return (
        <TouchableOpacity onPress={() => show(false)} style={styles.container}>

            <DateTimePickerModal
                minimumDate={time ? null : new Date()}
                accentColor={myColors.primaryT}
                buttonTextColorIOS={myColors.primaryT}
                isVisible={true}
                modalStyleIOS={{ backgroundColor: '#00000030', margin: 0, }}
                mode={time ? 'time' : 'date'}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />


            {/* <Calendar

                style={{
                    // borderWidth: 1,
                    // borderColor: 'gray',
                    // height: 350
                }}
                onPress={() => console.log('m')}
                current={selected}
                key={selected}
                // date='false'
                theme={{
                    arrowColor: myColors.textL3,
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: myColors.primaryT,
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: myColors.primary,
                    textDayStyle: {
                        includeFontPadding: false,
                        padding: 0
                    },
                    textDayFontSize: myFontSize.xxSmall,
                    textDayFontFamily: myFonts.body,
                    dayTextColor: '#2d4150',
                }}


                // Specify the current date
                // current={'2012-03-01'}
                // Callback that gets called when the user selects a day
                //  date={(day) => {
                //     console.log(day)
                // }}
                onDayPress={(day) => {
                    setSelected(day.dateString);
                }}

                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, },
                    '2023-03-02': { marked: false },
                }}

            // Mark specific dates as marked

            /> */}
        </TouchableOpacity>
    );


}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: "100%",
        position: 'absolute',
        zIndex: 1,
        backgroundColor: '#00000030',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
