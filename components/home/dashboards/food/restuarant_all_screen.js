import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { myColors } from '../../../../ultils/myColors';
import { Spacer, ios, myHeight, myWidth } from '../../../common';
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts';
import { ResCategories, mainCourse } from './food_data';
import { RestaurantFullInfo } from './food_component/restuarant_info_full';


export const RestaurantAll = ({ navigation, route }) => {
    const { name } = route.params
    const { restuarants } = route.params
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: myColors.background,
        }}>
            {/* Top  */}
            <View style={{ overflow: 'hidden', paddingBottom: myHeight(1) }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: myColors.background,
                    elevation: 8, shadowColor: '#000',
                    shadowOffset: { width: 0, height: 3 },
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
                            height: myHeight(3.2),
                            width: myHeight(3.2),
                            resizeMode: 'contain',
                            tintColor: myColors.text
                        }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                    </TouchableOpacity>

                    <Spacer paddingEnd={myWidth(2)} />
                    {/* Name */}
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.xBody,
                        fontFamily: myFonts.bodyBold,
                    }]}>{name}</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                {
                    restuarants.map((item, i) =>
                        <TouchableOpacity key={i} activeOpacity={0.8} onPress={() => navigation.navigate("RestaurantDetail", { item })}>
                            <RestaurantFullInfo item={item} />
                        </TouchableOpacity>
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    }
})