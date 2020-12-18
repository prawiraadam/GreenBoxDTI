import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const SliderB = ({images}) => {
  return (
    <View>
      <SliderBox
        images={images}
        sliderBoxHeight={230}
        dotColor="#27ae60"
        inactiveDotColor="#90A4AE"
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 15,
          padding: 0,
          margin: 0,
        }}
      />
    </View>
  );
};

export default SliderB;

const styles = StyleSheet.create({});
