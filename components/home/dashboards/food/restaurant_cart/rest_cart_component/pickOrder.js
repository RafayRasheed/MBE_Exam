import { Spacer, ios, myHeight, myWidth } from '../../../../../common';
import { myFonts, myLetSpacing, myFontSize } from '../../../../../../ultils/myFonts';

import { myColors } from '../../../../../../ultils/myColors';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { CalenderDate } from '../../../ride/ride_component/calender';
import { useEffect, useState } from 'react';


export const PickOrder = ({ setPick, name, setShowModal, instruct, setInst }) => {

    const items = [
        "Meet at my door", 'Meet outside', 'Leave at my door'
    ]
    const [instruction, setInstruction] = useState(instruct)
    const [optionIndex, setOptionIndex] = useState(items.indexOf(name))
    function onSave() {
        setPick(items[optionIndex])
        setInst(instruction)

        hideModal()
    }
    function hideModal() {
        setShowModal(false)
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
                        }]}>{name}</Text>
                    </View>
                </View>

                <Spacer paddingT={myHeight(2)} />
                {/* Content */}
                <View style={{ paddingHorizontal: myWidth(4) }}>
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body,
                        fontFamily: myFonts.bodyBold,
                    }]}>How will you like your order to be dropped off?</Text>

                    <Spacer paddingT={myHeight(1)} />
                    {/* LOCATION */}
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body3,
                        fontFamily: myFonts.body,
                    }]}>100 Dynamic Drive, Toronto, ON, M1V 5C4, CA</Text>

                    <Spacer paddingT={myHeight(2)} />
                    {/* Divider */}
                    <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />


                    <Spacer paddingT={myHeight(2)} />

                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.body,
                        fontFamily: myFonts.heading,
                    }]}>Hand it to me:</Text>

                    <Spacer paddingT={myHeight(2.5)} />
                    {/* Options */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {items.map((item, i) =>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => setOptionIndex(i)} key={i} style={{
                                width: myWidth(29), borderWidth: myHeight(0.1),
                                borderRadius: myWidth(2), flexDirection: 'row', padding: myWidth(2)
                            }}>

                                {/* Text */}
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        flex: 1,
                                        fontSize: myFontSize.xxSmall,
                                        fontFamily: myFonts.bodyBold,
                                    }
                                ]}>{item}</Text>

                                <Spacer paddingEnd={myWidth(0.5)} />
                                {/* Circle */}
                                <View style={{
                                    backgroundColor: i == optionIndex ? myColors.primaryT : myColors.background, alignSelf: 'flex-start',
                                    padding: myHeight(0.2), borderRadius: myHeight(10), borderWidth: myHeight(0.1)
                                }}>
                                    <Image style={{
                                        height: myHeight(1.6),
                                        width: myHeight(1.6),
                                        resizeMode: 'contain',
                                        tintColor: myColors.background
                                    }} source={require('../../../../../assets/home_main/dashboards/foods/check.png')} />
                                </View>
                            </TouchableOpacity>
                        )}

                    </View>

                    <Spacer paddingT={myHeight(4.5)} />
                    {/* Search */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: myWidth(1),
                        paddingVertical: myHeight(0.2),
                        // borderWidth: myHeight(0.18),
                        // borderColor: myColors.primaryT,
                        backgroundColor: myColors.primaryL,
                        borderRadius: myWidth(2.5),
                    }}>
                        <Spacer paddingEnd={myWidth(3)} />
                        <TextInput placeholder=" Add Instructions"
                            placeholderTextColor={myColors.textL4}
                            autoCorrect={false}
                            selectionColor={myColors.primaryT}
                            cursorColor={myColors.primaryT}
                            value={instruction} onChangeText={setInstruction}
                            style={{
                                flex: 1,
                                textAlignVertical: 'center',
                                paddingVertical: ios ? myHeight(0.8) : myHeight(100) > 600 ? myHeight(0.6) : myHeight(0),
                                fontSize: myFontSize.body,
                                color: myColors.text,
                                includeFontPadding: false,
                                fontFamily: myFonts.body,
                            }}
                        // value={search} onChangeText={(val) => null}
                        />
                    </View>

                </View>



            </SafeAreaView>

            {/* Save Button */}
            <TouchableOpacity activeOpacity={0.9} onPress={onSave}
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
                ]}>Save</Text>
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
