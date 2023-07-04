import { Spacer, ios, myHeight, myWidth } from '../../../common';
import { myFonts, myLetSpacing, myFontSize } from '../../../../ultils/myFonts';

import { myColors } from '../../../../ultils/myColors';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { useState } from 'react';
import { recentPlaces, savePlaces, searchPlaces } from './food_data';



export const Address = ({ route, navigation }) => {

    const { name } = route.params
    const [search, setSearch] = useState(null)
    const [selectedLoc, setSelectedLoc] = useState(savePlaces[1].id)

    function goToSaveAddress() {
        navigation.navigate('SaveAddress')
    }

    function onSelectLocation() {
        navigation.goBack()
    }
    return (

        <SafeAreaView style={{
            flex: 1, backgroundColor: myColors.background,
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
                        }} source={require('../../../assets/home_main/dashboards/back2.png')} />
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

                {/* Search */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: myWidth(4),
                    paddingVertical: myHeight(0.2),
                    borderWidth: myHeight(0.18),
                    borderColor: myColors.primaryT,
                    backgroundColor: myColors.background,
                    borderRadius: myWidth(2.5),
                }}>
                    <Image style={{
                        height: myHeight(2),
                        width: myHeight(2),
                        resizeMode: 'contain',
                        tintColor: myColors.primaryT

                    }}
                        source={require('../../../assets/home_main/dashboards/search.png')} />
                    <Spacer paddingEnd={myWidth(3)} />
                    <TextInput placeholder=" Search Restaurants"
                        placeholderTextColor={myColors.textL4}
                        autoCorrect={false}
                        selectionColor={myColors.primaryT}
                        cursorColor={myColors.primaryT}
                        value={search} onChangeText={setSearch}
                        style={{
                            flex: 1,
                            textAlignVertical: 'center',
                            paddingVertical: ios ? myHeight(1) : myHeight(100) > 600 ? myHeight(0.5) : myHeight(0),
                            fontSize: myFontSize.body,
                            color: myColors.text,
                            includeFontPadding: false,
                            fontFamily: myFonts.body,
                        }}
                    // value={search} onChangeText={(val) => null}
                    />
                </View>

                <Spacer paddingT={myHeight(1)} />

                {/* Search list OR  Recent_saved list */}
                <ScrollView contentContainerStyle={{ flexGrow: 1, }} showsVerticalScrollIndicator={false} >

                    {
                        search ?
                            <View>

                                {
                                    searchPlaces.map((item, i) =>
                                        <View key={i}>

                                            {
                                                i != 0 &&
                                                <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />
                                            }

                                            <Spacer paddingT={myHeight(1.2)} />
                                            <TouchableOpacity activeOpacity={0.8}
                                                onPress={goToSaveAddress} style={{ flexDirection: 'row' }}>
                                                <Image style={{
                                                    height: myHeight(3.8),
                                                    width: myHeight(3.8),
                                                    marginTop: myHeight(0.2),
                                                    resizeMode: "contain",
                                                    tintColor: myColors.primaryT
                                                }}
                                                    source={require('../../../assets/home_main/dashboards/foods/location2.png')} />
                                                {/* <View style={{
                                                        marginTop: myHeight(0.5),
                                                        width: myHeight(3.2), height: myHeight(3.2),
                                                        borderRadius: myHeight(2), justifyContent: 'center',
                                                        backgroundColor: myColors.primaryL2, alignItems: 'center'
                                                    }}>
                                                    </View> */}
                                                <Spacer paddingEnd={myWidth(3)} />

                                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                                    <View style={{ flex: 1 }}>
                                                        <Text style={[styles.textCommon, {
                                                            fontSize: myFontSize.body2,
                                                            fontFamily: myFonts.bodyBold,
                                                        }]}>{item.address}</Text>
                                                        <Text style={[styles.textCommon, {
                                                            fontSize: myFontSize.body2,
                                                            fontFamily: myFonts.bodyBold, color: myColors.textL5
                                                        }]}>{item.city}</Text>
                                                    </View>

                                                </View>

                                                <Image
                                                    style={{
                                                        height: myHeight(3.2),
                                                        width: myHeight(3.2),
                                                        marginTop: myHeight(0.2),
                                                        resizeMode: "contain",
                                                        tintColor: myColors.primaryT
                                                    }}
                                                    source={
                                                        i == 0 ?
                                                            require('../../../assets/home_main/dashboards/heart.png')
                                                            :
                                                            require('../../../assets/home_main/dashboards/heart_o.png')
                                                    } />

                                            </TouchableOpacity>
                                            <Spacer paddingT={myHeight(1.2)} />


                                        </View>

                                    )
                                }
                            </View>
                            :
                            <View style={{ paddingTop: myHeight(2) }}>
                                {/* SAVE PLACES PORTION */}
                                {recentPlaces.length &&
                                    <View>
                                        {/* Addresses */}
                                        <Text style={[styles.textCommon, {
                                            fontSize: myFontSize.body,
                                            fontFamily: myFonts.bodyBold,
                                        }]}>Recent Locations</Text>

                                        {/* List */}
                                        {
                                            recentPlaces.map((item, i) =>
                                                <View key={i} style={{
                                                    borderWidth: myHeight(0.1), borderColor: selectedLoc == item.id ? myColors.primaryT : myColors.background,
                                                    paddingHorizontal: myWidth(2), borderRadius: myWidth(2),
                                                    marginVertical: myHeight(0.5)
                                                }}>

                                                    {
                                                        i != 0 &&
                                                        <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />
                                                    }

                                                    <Spacer paddingT={myHeight(0.7)} />
                                                    <TouchableOpacity activeOpacity={0.8}
                                                        onPress={onSelectLocation} style={{ flexDirection: 'row' }}>
                                                        <View style={{
                                                            marginTop: myHeight(0.5),
                                                            width: myHeight(3.2), height: myHeight(3.2),
                                                            borderRadius: myHeight(2), justifyContent: 'center',
                                                            backgroundColor: myColors.primaryL2, alignItems: 'center'
                                                        }}>
                                                            <Image style={{
                                                                height: myHeight(2),
                                                                width: myHeight(2),
                                                                resizeMode: "contain",
                                                                tintColor: myColors.primaryT
                                                            }}
                                                                source={require('../../../assets/home_main/dashboards/location.png')} />
                                                        </View>
                                                        <Spacer paddingEnd={myWidth(3)} />

                                                        <View style={{ flex: 1, flexDirection: 'row', }}>
                                                            <View style={{ flex: 1 }}>
                                                                <Text style={[styles.textCommon, {
                                                                    fontSize: myFontSize.body2,
                                                                    fontFamily: myFonts.bodyBold,
                                                                }]}>{item.name}</Text>
                                                                <Text style={[styles.textCommon, {
                                                                    fontSize: myFontSize.body2,
                                                                    fontFamily: myFonts.bodyBold, color: myColors.textL5
                                                                }]}>{item.address}</Text>
                                                            </View>

                                                            <TouchableOpacity activeOpacity={0.7}
                                                                onPress={goToSaveAddress}
                                                                style={{ padding: myHeight(0.5) }}>
                                                                <Image style={{
                                                                    height: myHeight(2),
                                                                    width: myHeight(2),
                                                                    resizeMode: "contain",
                                                                    tintColor: myColors.primaryT,
                                                                }}
                                                                    source={require('../../../assets/home_main/dashboards/foods/edit.png')} />
                                                            </TouchableOpacity>
                                                        </View>

                                                    </TouchableOpacity>
                                                    <Spacer paddingT={myHeight(0.7)} />

                                                </View>

                                            )
                                        }
                                    </View>
                                }

                                <Spacer paddingT={myHeight(2)} />
                                {/* SAVE PLACES PORTION */}
                                {savePlaces.length &&
                                    <View>
                                        {/* Addresses */}
                                        <Text style={[styles.textCommon, {
                                            fontSize: myFontSize.body,
                                            fontFamily: myFonts.bodyBold,
                                        }]}>Saved Locations</Text>

                                        {/* List */}
                                        {
                                            savePlaces.map((item, i) =>
                                                <View key={i} style={{
                                                    borderWidth: myHeight(0.1), borderColor: selectedLoc == item.id ? myColors.primaryT : myColors.background,
                                                    paddingHorizontal: myWidth(2), borderRadius: myWidth(2),
                                                    marginVertical: myHeight(0.5)
                                                }}>

                                                    {/* {
                                                        i != 0 &&
                                                        <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />
                                                    } */}

                                                    <Spacer paddingT={myHeight(0.7)} />
                                                    <TouchableOpacity activeOpacity={0.8}
                                                        onPress={onSelectLocation} style={{ flexDirection: 'row' }}>
                                                        <View style={{
                                                            marginTop: myHeight(0.5),
                                                            width: myHeight(3.2), height: myHeight(3.2),
                                                            borderRadius: myHeight(2), justifyContent: 'center',
                                                            backgroundColor: myColors.primaryL2, alignItems: 'center'
                                                        }}>
                                                            <Image style={{
                                                                height: myHeight(2),
                                                                width: myHeight(2),
                                                                resizeMode: "contain",
                                                                tintColor: myColors.primaryT
                                                            }}
                                                                source={require('../../../assets/home_main/dashboards/location.png')} />
                                                        </View>
                                                        <Spacer paddingEnd={myWidth(3)} />

                                                        <View style={{ flex: 1, flexDirection: 'row', }}>
                                                            <View style={{ flex: 1 }}>
                                                                <Text style={[styles.textCommon, {
                                                                    fontSize: myFontSize.body2,
                                                                    fontFamily: myFonts.bodyBold,
                                                                }]}>{item.name}</Text>
                                                                <Text style={[styles.textCommon, {
                                                                    fontSize: myFontSize.body2,
                                                                    fontFamily: myFonts.bodyBold, color: myColors.textL5
                                                                }]}>{item.address}</Text>
                                                            </View>

                                                            <TouchableOpacity activeOpacity={0.7}
                                                                onPress={goToSaveAddress}
                                                                style={{ padding: myHeight(0.5) }}>
                                                                <Image style={{
                                                                    height: myHeight(2),
                                                                    width: myHeight(2),
                                                                    resizeMode: "contain",
                                                                    tintColor: myColors.primaryT,
                                                                }}
                                                                    source={require('../../../assets/home_main/dashboards/foods/edit.png')} />
                                                            </TouchableOpacity>
                                                        </View>

                                                    </TouchableOpacity>
                                                    <Spacer paddingT={myHeight(0.7)} />


                                                </View>

                                            )
                                        }
                                    </View>
                                }
                            </View>
                    }


                </ScrollView>



            </View>

            {/* <TouchableOpacity activeOpacity={0.9} onPress={onSave}
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
            </TouchableOpacity> */}
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
