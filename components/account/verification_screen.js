import React, { useEffect, useRef, useState } from "react"
import { View, Text, Keyboard, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { myColors } from "../../ultils/myColors";
import { myFontSize, myFonts, myLetSpacing } from "../../ultils/myFonts";
import { Loader, MyError, Spacer, ios, myHeight, myWidth } from "../common";

export const Verification = ({ navigation }) => {
    const lenCode = 4;
    const [focus, setFocus] = useState(0)
    const arrayVer = []
    // const arrayVer2 = []

    const [varValues, setVarValues] = useState([null, null, null, null])
    const focusKey = useRef(null)
    // const refArr = useRef([null, null, null, null])
    const [valInp, setValInp] = useState('')
    const [finalVeriVal, setFinalVeriVal] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [verify, setVerify] = useState(false)

    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (errorMessage) {
            setTimeout(() => {
                setErrorMessage(null)
            }, 2000)
        }
    }, [errorMessage])

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });
    useEffect(() => {
        setTimeout(() => openKey(), 100);
    }, [])

    useEffect(() => {
        if (verify) {
            setTimeout(() => {
                setIsLoading(false)
                navigation.replace("HomeBottomNavigator")
            }, 1500);
        }
    }, [verify])

    function onVerify() {
        if (finalVeriVal) {

            if (finalVeriVal.length == lenCode) {
                if (/^\d+$/.test(finalVeriVal)) {
                    setIsLoading(true)
                    setVerify(true)
                    return
                }
                else {
                    setErrorMessage("Invalid Verification Code")
                }
            }
            else {
                setErrorMessage("Please Enter a Complete Code")
            }
        }
        else {
            setErrorMessage("Please Enter a Code")

        }
    }

    function openKey() {
        if (focusKey) {
            focusKey.current.focus()
            return
        }
        setTimeout(() => openKey(), 100);

    }
    function calValue() {
        let v = ''
        for (let j = 0; j < lenCode; j++) {
            const val = varValues[j]
            if (val != null) {
                v = v + val
            }
        }
        // if (v.length == lenCode) {
        //     setIsLoading(true)
        //     if (/^\d+$/.test(v)) {
        //         setFinalVeriVal(v)
        //         return
        //     }
        //     else {
        //         setIsLoading(false)
        //         setErrorMessage("Invalid Verification Code")
        //     }
        // }

        setFinalVeriVal(v)

    }

    function removeValue() {
        if (varValues[focus] == null && focus != 0) {
            varValues[focus - 1] = null
            setVarValues(varValues)
            setFocus(focus - 1)
            calValue()
            return
        }
        varValues[focus] = null
        setVarValues(varValues)
        calValue()

    }

    function allValue(val) {
        varValues[focus] = val
        setVarValues(varValues)

        if (focus < lenCode - 1) {
            setFocus(focus + 1)
            calValue()
            return
        }
        calValue()

        // setFocus(0)
    }

    // Input
    for (let j = 0; j < lenCode; j++) {
        const val = varValues[j]
        arrayVer.push(
            <TouchableOpacity activeOpacity={0.9} key={j}
                onPress={() => {
                    // setFocus(j)
                    openKey()
                }}
                style={[styles.containerInput, { borderWidth: 1, borderColor: focus == j ? myColors.primaryT : myColors.primaryL }]}>
                <Text
                    style={[styles.textInput, val == null ? { color: myColors.primaryL } : { color: myColors.primaryT }]}
                >{val == null ? 0 : val}</Text>
            </TouchableOpacity>
        )
    }

    // for (let j = 0; j < lenCode; j++) {
    //     const val = varValues[j]
    //     const ref = refArr[j]
    //     arrayVer.push(
    //         <TextInput editable={false} ref={ref => refArr[j] = ref} value={val} keyboardShouldPersistTaps="always" blurOnSubmit={false} key={j} onFocus={() => setFocus(j)} keyboardType={'numeric'} placeholder="0" placeholderTextColor={myColors.primaryL}
    //             style={focus == j ? styles.containerInputFocus : styles.containerInputNotFocus}
    //             onChangeText={(v) => {
    //                 varValues[j] = v[v.length - 1]
    //                 console.log(arrayVer)
    //                 setVarValues(varValues)
    //                 setFocus(focus + 1)
    //                 refArr[focus + 1].focus()
    //             }}
    //         />
    //     )
    // }
    return (
        <SafeAreaView style={styles.container}>
            {isLoading && <Loader />}
            {errorMessage && <MyError message={errorMessage} />}
            {/* Invisible Input for Keyboard */}
            <TextInput
                ref={focusKey}
                value={valInp}
                keyboardType={'numeric'}
                onChangeText={(val) => {
                    if (val.length > valInp.length) {
                        allValue(val[val.length - 1])
                    }
                    else {
                        removeValue()
                    }
                    setValInp(val)
                }}
                style={{ width: 0, height: 0 }} />
            {/* All Content */}
            <View>
                <Spacer paddingT={myHeight(6.6)} />

                {/* Text Portion */}
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.textVer}>Phone Verification</Text>
                    <Text style={styles.textEnterC}>Please enter 4 digits code sent to your number.</Text>
                </View>

                <Spacer paddingT={myHeight(6)} />
                {/* Input */}
                <View style={styles.containerAllInput}>
                    {arrayVer}
                </View>
                <Spacer paddingT={myHeight(2)} />

                {/* Resend text*/}
                <View style={{ flexDirection: 'row', paddingStart: myWidth(8.5), alignItems: 'center' }}>
                    <Text style={styles.textDidC}>Didn't receive code? </Text>

                    {minutes === 0 && seconds === 0
                        ? <TouchableOpacity activeOpacity={0.6} onPress={() => setMinutes(1)}>
                            <Text style={styles.textResC}>Resend it.</Text>
                        </TouchableOpacity>
                        : <Text style={styles.textResC}> {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Text>
                    }

                </View>

            </View>

            <Spacer paddingT={myHeight(4.3)} />
            {/* Verify Button */}
            <TouchableOpacity activeOpacity={0.6} onPress={onVerify} style={styles.containerVerify}
                onLongPress={() => navigation.replace('HomeBottomNavigator')}>
                <Text style={styles.textVerify}>VERIFY</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background
    },
    containerAllInput: {
        flexDirection: 'row', paddingHorizontal: myWidth(8.5),
        justifyContent: 'space-between', alignItems: 'center'
    },
    containerInput: {
        backgroundColor: myColors.primaryL,
        // paddingHorizontal: myWidth(7),
        paddingVertical: myHeight(1.8),
        alignItems: 'center',
        borderRadius: myWidth(3),
        // elevation: 0.5,
        // borderWidth:1, borderColor:myColors.primaryT
    },

    containerVerify: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: myColors.primaryT,
        paddingVertical: myHeight(1),
        borderRadius: myWidth(3.2),
        marginHorizontal: myWidth(7)
    },
    // containerInputFocus: {
    //     backgroundColor: myColors.primaryL,
    //     paddingHorizontal: myWidth(6.4),
    //     paddingVertical: myHeight(2),
    //     borderRadius: myWidth(3),
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     textAlign: 'center',
    //     textAlignVertical: 'center',
    //     fontSize: myFontSize.xMedium,
    //     fontFamily: myFonts.body,
    //     borderWidth: 1,
    //     borderColor: myColors.primaryT,
    //     color: myColors.primaryT

    // },
    // containerInputNotFocus: {
    //     backgroundColor: myColors.primaryL,
    //     paddingHorizontal: myWidth(6.4),
    //     paddingVertical: myHeight(2),
    //     borderRadius: myWidth(3),
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     textAlign: 'center',
    //     textAlignVertical: 'center',
    //     fontSize: myFontSize.xMedium,
    //     fontFamily: myFonts.body,
    //     borderWidth: 1,
    //     borderColor: myColors.primaryL,
    //     color: myColors.primaryT
    // },
    //Text
    textInput: {
        fontSize: myFontSize.xMedium,
        fontFamily: myFonts.body,
        includeFontPadding: false,
        padding: 0,
        width: myWidth(18.6),
        textAlign: 'center',
        // backgroundColor: 'red'

    },
    textVer: {
        fontSize: myFontSize.large,
        fontFamily: myFonts.body,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
    },
    textEnterC: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.body,
        color: myColors.offColor,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,


    },
    textDidC: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.body,
        color: myColors.offColor,
        includeFontPadding: false,

        letterSpacing: myLetSpacing.common,
    },

    textResC: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.heading,
        color: myColors.primaryT,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,

    },

    textVerify: {
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.heading,
        color: myColors.background,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,

    },






})