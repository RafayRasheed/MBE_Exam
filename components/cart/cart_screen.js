import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../ultils/myFonts';



export const Cart = ({ navigation }) => {


    return (
        <>
            {/* <StatusBar backgroundColor={orderModal ? '#00000030' : myColors.background} /> */}
            <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background, }}>

                <Spacer paddingT={myHeight(2)} />
                <View style={{ paddingHorizontal: myWidth(4) }}>
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.medium2,
                        fontFamily: myFonts.heading,
                    }]}>Carts</Text>
                </View>
            </SafeAreaView>
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

})