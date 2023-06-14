import React, { useRef, useEffect, useState } from 'react';
import { Animated, ScrollView, Text, View } from 'react-native';

export const YourComponent = () => {
    const [contentHeight, setContentHeight] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const animatedHeight = new Animated.Value(containerHeight);

    useEffect(() => {
        Animated.timing(animatedHeight, {
            toValue: contentHeight,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [contentHeight]);

    const handleContentSizeChange = (width, height) => {
        setContentHeight(height);
    };

    const handleContainerLayout = (event) => {
        setContainerHeight(event.nativeEvent.layout.height);
    };


    return (
        <Animated.View style={{ height: animatedHeight }}>
            <View onLayout={handleContainerLayout}>
                <ScrollView
                    onContentSizeChange={handleContentSizeChange}
                    style={{ flex: 1 }}
                >
                    {/* Your dynamic content */}
                    <Text style={{}}>OK</Text>

                </ScrollView>
            </View>
        </Animated.View>
    );
};

