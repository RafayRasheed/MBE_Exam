import { RFValue } from "react-native-responsive-fontsize"
import { Dimensions } from "react-native"
import { ios, myWidth } from "../components/common"
const { height } = Dimensions.get('screen')
const myHeight = ios ? height : height - 30;
export const myFonts = {
    //400
    body: 'Poppins-Regular',
    bodyO: 'OpenSans-Regular',
    //500
    bodyBold: 'Poppins-Medium',
    bodyBoldIt: 'Poppins-MediumItalic',
    bodyBoldO: 'OpenSans-Medium',
    //600
    heading: 'Poppins-SemiBold',
    headingIt: 'Poppins-SemiBoldItalic',
    headingO: 'OpenSans-SemiBold',
    //700
    headingBold: 'Poppins-Bold',
    // headingBoldIt: 'Poppins-BoldItalic',
    headingBoldO: 'OpenSans-Bold',
}
export const myLetSpacing = {
    common: -myWidth(0.0395)
}
export const myFontSize = {
    tiny: RFValue(8.3), //done 10
    small: RFValue(9), // done 11
    small2: RFValue(9.75), // done 12
    small3: RFValue(9.95), // done 12.5
    xSmall: RFValue(10.3), //done 13
    xxSmall: RFValue(11.25), //done 14
    body0: RFValue(11.5), //done 14.5
    body: RFValue(12.2), //done 15
    body2: RFValue(13.1), //done 16
    xBody: RFValue(15.5), //done 20
    xxBody: RFValue(18), //done --
    medium0: RFValue(19),  //done 24
    medium: RFValue(20), //  done 25
    medium2: RFValue(22), //  done --
    xMedium: RFValue(25.5), // done 32
    large: RFValue(28), //done 36


    // tiny: RFValue(10, myHeight),
    // small: RFValue(11, myHeight),
    // xSmall: RFValue(13, myHeight),
    // body: RFValue(15, myHeight),
    // xBody: RFValue(20, myHeight),
    // medium: RFValue(25, myHeight),
    // large: RFValue(36, myHeight),
}
