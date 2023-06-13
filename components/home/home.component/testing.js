import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, UIManager, findNodeHandle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, runOnJS, withTiming } from 'react-native-reanimated';

export const MyComponent = () => {
    const contentRef = useRef(null);
    const myheight = useSharedValue(0);
    const [s, setS] = useState(false)

    const handleContentChange = () => {
        setS(!s)
        runOnJS(measureContentHeight)();
    };

    const measureContentHeight = () => {
        UIManager.measure(findNodeHandle(contentRef.current), (x, y, width, height) => {
            myheight.value = height;
        });
    };


    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(myheight.value, { duration: 500 })
        };
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleContentChange}>
                <Text style={styles.button}>Change Content</Text>
            </TouchableOpacity>
            <View ref={contentRef}>
                <Text style={{ paddingVertical: s ? 100 : 0 }}>On jdfnb dinbi </Text>
            </View>
            <Animated.View style={[animatedStyle]} />
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: 'blue',
        color: 'white',
        marginBottom: 10,
    },

});
