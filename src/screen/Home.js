import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../layout/Header';
import Hero from '../section/Hero';
import Main from '../section/Main';

export default function Home() {
  const [dogview, setDogview] = useState(false);


  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#FFB5B1', '#CD7ED9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}
      >
        <Header style={styles.header} />
        <Hero style={styles.hero } />
       
          <Main
            style={{
              flex: 1,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              backgroundColor: "white",
              paddingTop:10,
              width: responsiveWidth(100),
              marginTop: responsiveHeight(23.5),
              minHeight: responsiveScreenHeight(50)
            }}
          />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    width: '100%',
    top: '5%',
    left: 0,
  },
  hero: {
    flex: 1,
    position: 'absolute',
    top: '10%',
    width: '100%',
    zIndex: 999
  },
});
