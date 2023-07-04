import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { myColors } from '../../../../ultils/myColors';
import { Spacer, ios, myHeight, myWidth } from '../../../common';
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts';
import { FoodOpenNow, ResCategories, mainCourse } from './food_data';
import { ItemInfo } from './food_component/item_info';
import { ResInfoSearch } from './food_component/rest_info_search';
import Lottie from 'lottie-react-native';

export const RestaurantSearch = ({ route, navigation }) => {
    const [search, setSearch] = useState(null)
    const [load, setLoad] = useState(null)

    const Loader = () => (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{
                marginTop: -myHeight(10),
                alignItems: 'center',
            }}>
                <Lottie
                    autoPlay={true}
                    loop={true}
                    source={require('../../../assets/lottie/spoon_loader.json')}
                    style={{
                        height: myHeight(35), width: myHeight(35),
                    }}

                />
                <Text style={[styles.textCommon, {
                    fontSize: myFontSize.body,
                    color: myColors.textL4,
                    fontFamily: myFonts.bodyBold,
                    marginTop: -myHeight(10)
                }]}>Loading....</Text>
            </View>
        </View>
    )
    useEffect(() => {

        if (search && search.length == 1) {
            setLoad(true)
        }
    }, [search])


    useEffect(() => {
        if (load) {
            setTimeout(() =>
                setLoad(false)
                , 3000)
        }
    }, [load])
    return (

        <SafeAreaView style={{
            flex: 1, backgroundColor: myColors.background,
        }}>
            <Spacer paddingT={myHeight(1)} />
            {/* Top */}
            {/* Search */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: myWidth(3),
                paddingVertical: myHeight(0.3),
                borderRadius: myWidth(1.5),
                backgroundColor: myColors.offColor7,
                marginHorizontal: myWidth(4)

            }}>
                {/* Arrow */}
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} style={{}}>
                    <Image style={{
                        height: myHeight(2.7),
                        width: myHeight(2.7),
                        resizeMode: 'contain',
                        tintColor: myColors.text
                    }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                </TouchableOpacity>
                <Spacer paddingEnd={myWidth(2)} />
                <TextInput placeholder=" Search Any reastaurants"
                    placeholderTextColor={myColors.textL5}
                    autoCorrect={false}
                    selectionColor={myColors.primaryT}
                    style={{
                        flex: 1,
                        textAlignVertical: 'center',
                        paddingVertical: ios ? myHeight(1) : myHeight(100) > 600 ? myHeight(0.7) : myHeight(0.2),
                        fontSize: myFontSize.xxSmall,
                        color: myColors.text,
                        includeFontPadding: false,
                        fontFamily: myFonts.bodyBold,
                    }}
                    cursorColor={myColors.primaryT}
                    value={search} onChangeText={setSearch}
                // value={search} onChangeText={(val) => null}
                />
            </View>


            {/* Icon Empty Or Content */}

            {
                load ? <Loader /> :
                    (search) ?
                        <View style={{ flex: 1 }}>
                            <ScrollView contentContainerStyle={{ paddingHorizontal: myWidth(4.1) }} showsVerticalScrollIndicator={false}>
                                <Spacer paddingT={myHeight(1.3)} />

                                {FoodOpenNow.map((item, i) =>
                                    <TouchableOpacity key={i} activeOpacity={0.85} onPress={() => navigation.navigate("RestaurantDetail", { item })}>
                                        <ResInfoSearch navigate={navigation.navigate} item={item} />
                                    </TouchableOpacity>
                                )}
                            </ScrollView>

                        </View>
                        :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Lottie
                                autoPlay={true}
                                loop={true}
                                source={require('../../../assets/lottie/food_search.json')}
                                style={{ height: myHeight(27), width: myHeight(27), }}

                            />
                        </View>
            }

            {/* <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Image style={{
                            height: myHeight(14),
                            width: myHeight(14),
                            resizeMode: 'contain',
                            alignSelf: 'center',
                        }} source={require('../../../assets/home_main/dashboards/foods/iconEm.png')} />
                    </View> */}
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
}
)