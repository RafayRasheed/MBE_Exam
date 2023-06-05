import { Image, Button, TouchableOpacity, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { myColors } from '../../../../../ultils/myColors'
import { myWidth, myHeight, Spacer } from '../../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../../ultils/myFonts'
import { Calendar } from 'react-native-calendars'
// import { Calendar, LocaleConfig } from 'react-native-calendars';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export const CalenderDate = ({ show, value }) => {
    const [selected, setSelected] = useState('');
    // var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // function getDay(dateString) {
    //     return days[new Date(dateString).getDay()]
    // }
    // const getCurrentDate = () => {

    //     var day = new Date().getDate();
    //     var dayName = new Date('2023-02-03').getDay();
    //     var month = new Date().getMonth() + 1;
    //     var year = new Date().getFullYear();
    //     //Alert.alert(date + '-' + month + '-' + year);
    //     // You can turn it in to your desired format
    //     return [year, month, day];//format: d-m-y;
    // }
    // console.log(getCurrentDate())

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        show(false);
    };

    const handleConfirm = (date) => {
        value(date.toString())
        hideDatePicker();
    };

    return (
        <TouchableOpacity onPress={() => show(false)} style={styles.container}>
            <TouchableOpacity onPress={() => setSelected('2021-01')}>
                <Text>2021</Text>
            </TouchableOpacity>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
                accentColor={myColors.primaryT}
                buttonTextColorIOS={myColors.primaryT}
                isVisible={true}
                modalStyleIOS={{ backgroundColor: '#00000030', margin: 0, }}
                mode='time'
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
