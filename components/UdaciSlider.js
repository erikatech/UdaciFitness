import React from 'react';
import { View, Slider, Text } from 'react-native';

const UdaciSlider = ({ max, unit, step, value, onChange }) => {
    return (
        <View>
            <Slider 
                step={step}
                minimumValue={0}
                maximumValue={max}
                onValueChange={onChange}
                value={value}
            />
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
        
    );
};

export default UdaciSlider;