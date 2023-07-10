import { Spacer, ios, myHeight, myWidth } from '../../../common';
import { myFonts, myLetSpacing, myFontSize } from '../../../../ultils/myFonts';

import { myColors } from '../../../../ultils/myColors';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



export const SaveAddress = ({ route, navigation }) => {

    const [title, setTitle] = useState(null)
    const [flat, setFLat] = useState(null)
    const [building, setBuilding] = useState(null)
    const [street, setStreet] = useState(null)
    const [area, setArea] = useState(null)

    function onSave() {
        navigation.goBack()
    }

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background, }}>
            <KeyboardAwareScrollView bounces={false} showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, }}>

                {/* Top  */}
                <View style={{ overflow: 'hidden', paddingBottom: myHeight(1), }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: myColors.background,
                        // elevation: 6.5, shadowColor: '#000',
                        // shadowOffset: { width: 0, height: 2.5 },
                        // shadowOpacity: 0.2,
                        // shadowRadius: 2,
                        // paddingVertical: myHeight(1)
                        paddingTop: myHeight(1)

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
                            }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                        </TouchableOpacity>

                        <Spacer paddingEnd={myWidth(2)} />
                        {/* Name */}
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.body,
                            fontFamily: myFonts.bodyBold,
                        }]}>Address Details</Text>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
                    {/* MAP Ayegaāaaaaaaaaa */}
                    <View style={{ width: '100%', height: myHeight(20), backgroundColor: myColors.primaryL }} />

                    <Spacer paddingT={myHeight(1)} />
                    {/* Content */}
                    <View style={{ flex: 1, paddingHorizontal: myWidth(4) }}>

                        {/* Address */}
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.xBody,
                            fontFamily: myFonts.bodyBold,
                        }]}>Phase V Tauheed Commercial
                            Area Defense V Defence Housing Authority, Karachi
                            City, Sindh 75500, Pakistan
                        </Text>

                        <Spacer paddingT={myHeight(2.5)} />

                        {/* Title Input*/}
                        <View style={styles.containerTextInput}>
                            <TextInput placeholder=" Address Title"
                                placeholderTextColor={myColors.text3}
                                autoCorrect={false}
                                selectionColor={myColors.primaryT}
                                cursorColor={myColors.primaryT}
                                value={title} onChangeText={setTitle}
                                style={styles.textInput}
                            />
                        </View>
                        <Spacer paddingT={myHeight(2)} />


                        {/* Flat Input*/}
                        <View style={styles.containerTextInput}>

                            <TextInput placeholder=" Flat/Villa No"
                                placeholderTextColor={myColors.text3}
                                autoCorrect={false}
                                selectionColor={myColors.primaryT}
                                cursorColor={myColors.primaryT}
                                value={flat} onChangeText={setFLat}
                                style={styles.textInput}
                            />
                        </View>
                        <Spacer paddingT={myHeight(2)} />

                        {/* Building Input*/}
                        <View style={styles.containerTextInput}>

                            <TextInput placeholder=" Building Society *"
                                placeholderTextColor={myColors.text3}
                                autoCorrect={false}
                                selectionColor={myColors.primaryT}
                                cursorColor={myColors.primaryT}
                                value={building} onChangeText={setBuilding}
                                style={styles.textInput}
                            />
                        </View>
                        <Spacer paddingT={myHeight(2)} />

                        {/* Street Input*/}
                        <View style={styles.containerTextInput}>

                            <TextInput placeholder=" Street"
                                placeholderTextColor={myColors.text3}
                                autoCorrect={false}
                                selectionColor={myColors.primaryT}
                                cursorColor={myColors.primaryT}
                                value={street} onChangeText={setStreet}
                                style={styles.textInput}
                            />
                        </View>
                        <Spacer paddingT={myHeight(2)} />


                        {/* area Input*/}
                        <View style={styles.containerTextInput}>

                            <TextInput placeholder=" Area *"
                                placeholderTextColor={myColors.text3}
                                autoCorrect={false}
                                selectionColor={myColors.primaryT}
                                cursorColor={myColors.primaryT}
                                value={area} onChangeText={setArea}
                                style={styles.textInput}
                            />
                        </View>
                        <Spacer paddingT={myHeight(2)} />



                    </View>
                    {/* Save Button */}
                    <TouchableOpacity activeOpacity={0.9} onPress={onSave}
                        style={{
                            backgroundColor: myColors.primaryT,
                            borderRadius: myHeight(0.8),
                            paddingVertical: myHeight(1.2),

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
                </ScrollView>
            </KeyboardAwareScrollView>
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
    containerTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: myWidth(3),
        paddingVertical: myHeight(0.2),
        borderWidth: myHeight(0.18),
        borderColor: myColors.primaryT,
        backgroundColor: myColors.background,
        borderRadius: myWidth(2.5),
    },
    textInput: {
        flex: 1,
        textAlignVertical: 'center',
        paddingVertical: ios ? myHeight(0.8) : myHeight(100) > 600 ? myHeight(0.7) : myHeight(0.2),
        fontSize: myFontSize.body,
        color: myColors.text,
        includeFontPadding: false,
        fontFamily: myFonts.body,
    }

})
