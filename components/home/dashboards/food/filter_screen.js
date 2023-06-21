import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { myColors } from '../../../../ultils/myColors'
import { Spacer, myHeight, myWidth } from '../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts'

export const FilterScreen = ({ navigation }) => {
    const [i, setI] = useState(0)
    const [sort, setSort] = useState(0)
    const [price, setPrice] = useState(null)

    const sortData = ['Relevance (default)', 'Rating (high to low)', 'Fast Delivery', 'Distance']
    const priceData = ['Select Less Than $80', 'Between $80 - $140', 'Greater $122', '$5000']


    return (
        <SafeAreaView style={styles.container}>
            <Spacer paddingT={myHeight(0.5)} />
            {/* Top Container */}
            <View>
                {/* back & text*/}
                <View style={styles.containerTop}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}
                        style={{ paddingHorizontal: myWidth(2.5), paddingVertical: myHeight(0.5), }}>
                        <Image style={styles.imageBack} source={require('../../../assets/home_main/dashboards/back2.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textCommon}>Filter</Text>
                </View>
                <Spacer paddingT={myHeight(1)} />

                {/* Price & Sort */}
                <View style={{ overflow: 'hidden', paddingBottom: myHeight(1) }}>

                    <View style={styles.containerSort_Price}>
                        {/* Sort */}
                        <TouchableOpacity activeOpacity={0.7} onPress={() => setI(0)}>
                            <View style={{ paddingHorizontal: myWidth(2), paddingVertical: myHeight(0.5), alignItems: 'center' }}>
                                <Text style={[styles.textCommon, { color: i == 0 ? myColors.primaryT : myColors.text }]}>Sort</Text>
                            </View>
                            <View style={[styles.containerFocusLine, i != 0 && { backgroundColor: myColors.background }]} />
                        </TouchableOpacity>
                        <Spacer paddingEnd={myWidth(8)} />
                        {/* Price */}
                        <TouchableOpacity activeOpacity={0.7} onPress={() => setI(1)}>
                            <View style={{ paddingHorizontal: myWidth(2), paddingVertical: myHeight(0.5), alignItems: 'center' }}>
                                <Text style={[styles.textCommon, { color: i == 1 ? myColors.primaryT : myColors.text }]}>Price</Text>
                            </View>
                            <View style={[styles.containerFocusLine, i != 1 && { backgroundColor: myColors.background }]} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Spacer paddingT={myHeight(1)} />

            {/* Main */}
            <View style={{ paddingHorizontal: myWidth(5.7) }}>
                {/* Type */}
                <Text style={styles.textType}>{i == 0 ? 'Sort' : 'Price'}</Text>
                <Spacer paddingT={myHeight(1)} />


                {/* Detail Sort & Price */}
                {
                    i == 0 ?
                        sortData.map((item, ind) =>
                            <TouchableOpacity key={ind} activeOpacity={0.7} style={styles.conatainerItem}
                                onPress={() => setSort(ind)}>
                                <Text style={[styles.textItem, sort == ind && { fontFamily: myFonts.heading }]}>{item}</Text>
                                <View activeOpacity={0.7} style={[styles.containerCircle, { borderWidth: sort == ind ? myHeight(0.6) : myHeight(0.2) }]} />
                            </TouchableOpacity>
                        )
                        :
                        priceData.map((item, ind) =>
                            <TouchableOpacity key={ind} activeOpacity={0.7} style={styles.conatainerItem}
                                onPress={() => setPrice(ind)}>
                                <Text style={[styles.textItem, price == ind && { fontFamily: myFonts.heading }]}>{item}</Text>
                                <View activeOpacity={0.7} style={[styles.containerCircle, { borderWidth: price == ind ? myHeight(0.6) : myHeight(0.2) }]} />
                            </TouchableOpacity>
                        )
                }
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background,

    },
    containerTop: {
        flexDirection: 'row', alignItems: 'center',
        paddingHorizontal: myWidth(2),

    },
    containerSort_Price: {
        flexDirection: 'row',
        paddingHorizontal: myWidth(5.7),
        backgroundColor: myColors.background,
        elevation: 8, shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },

    containerFocusLine: {
        backgroundColor: myColors.primaryT,
        borderRadius: myHeight(3),
        height: myHeight(0.64)
    },
    containerCircle: {
        height: myHeight(2.15),
        width: myHeight(2.15),
        borderRadius: myHeight(2),
        borderColor: myColors.primaryT,

    },
    conatainerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'center',
        paddingVertical: myHeight(1.1)
    },



    //Text
    textCommon: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textItem: {
        fontSize: myFontSize.xxSmall,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textType: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },


    //Image
    imageBack: {
        width: myHeight(2.6),
        height: myHeight(2.6),
        tintColor: myColors.text,
        resizeMode: 'contain',
    },



})