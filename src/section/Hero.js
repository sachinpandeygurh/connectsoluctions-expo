import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

const Hero = ({ style }) => {
  return (
    <View style={[style, { width: responsiveWidth(90) }]}>
      <View style={{ flexDirection: 'column', paddingHorizontal:responsiveWidth(5) }}>
        <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: '600' }}>Hello,</Text>
        <Text style={{ fontSize: responsiveFontSize(2), fontWeight: '500' }}>Fancy for a wash today!</Text>
      </View>
      <View style={[styles.imageContainer]}>
        <Image
          style={[styles.footprintImage]}
          source={require('../../assets/img/dogfootprint (2).png')}
        />
        <View style={[styles.dogImagesContainer]}>
          <Image
            style={[styles.dogImage1]}
            source={require('../../assets/img/dogs (3).png')}
          />
          <Image
            style={[styles.dogImage2]}
            source={require('../../assets/img/dogs (2).png')}
          />
          <Image
            style={[styles.dogImage3]}
            source={require('../../assets/img/dogs (1).png')}
          />
        </View>
        <Image
          style={[styles.footprintImage2]}
          source={require('../../assets/img/dogfootprint (1).png')}
        />
      </View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
    width: '100%',
    top: responsiveHeight(10),
    left: responsiveWidth(2.5),
  },
  footprintImage: {
    position: 'absolute',
    top: -15,
    left: responsiveWidth(10),
  },
  dogImagesContainer: {
    position: 'absolute',
    width: '100%',
    bottom: responsiveHeight(6),
    left: responsiveWidth(40),
    
  },
  dogImage1: {
    position: 'absolute',
    top: responsiveHeight(1),
    left: responsiveWidth(5.5),
  },
  dogImage2: {
    position: 'absolute',
    top: responsiveHeight(1),
    left: responsiveWidth(19.5),
  },
  dogImage3: {
    position: 'absolute',
    top: responsiveHeight(2),
    left: responsiveWidth(37),
  },
  footprintImage2: {
    position: 'absolute',
    top: -responsiveHeight(10),
    right: -responsiveWidth(7),
  },
});
