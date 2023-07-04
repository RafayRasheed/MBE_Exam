import React from 'react'
import { Image, TouchableOpacity, SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { myColors } from '../../../../../ultils/myColors'
import { myWidth, myHeight, Spacer } from '../../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../../ultils/myFonts'


export const AddCartStatus = ({ items, price, navigation }) => {
    function onAddToCart() {
        navigation.goBack()
    }
    return (
        <TouchableOpacity activeOpacity={0.95} style={{
            flexDirection: 'row', paddingHorizontal: myWidth(4),
            backgroundColor: myColors.primaryT, paddingVertical: myHeight(1.5),
            width: myWidth(90), alignSelf: 'center',
            justifyContent: 'space-between', position: 'absolute', bottom: 0, zIndex: 10,
            borderRadius: myWidth(1.5), alignItems: 'center', marginVertical: myHeight(1)
        }}
            onPress={onAddToCart}>
            <View style={{
                height: myHeight(3.2),
                minWidth: myHeight(3.2),
                borderRadius: myHeight(10),
                paddingHorizontal: myWidth(2),
                alignItems: 'center', justifyContent: 'center',
                backgroundColor: myColors.background,
            }}>

                <Text style={[
                    styles.textCommon,
                    {
                        fontSize: myFontSize.xxSmall,
                        fontFamily: myFonts.heading,
                        color: myColors.primaryT,

                    }
                ]}>{items}</Text>
            </View>
            <Text style={[
                styles.textCommon,
                {
                    fontSize: myFontSize.xxSmall,
                    fontFamily: myFonts.heading,
                    color: myColors.background,

                }
            ]}>Add to Cart</Text>


            <Text style={[
                styles.textCommon,
                {
                    fontSize: myFontSize.xxSmall,
                    fontFamily: myFonts.heading,
                    color: myColors.background,

                }
            ]}>{price}</Text>
        </TouchableOpacity>
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