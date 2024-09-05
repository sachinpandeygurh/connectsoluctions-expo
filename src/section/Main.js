import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
import SearchBar from '../component/SearchBar'
import PopularServices from './PopularServices'
import Slider from '../component/Slider'
import ServiceProviders from './ServiceProviders'
import Ratings from './Rating'

const Main = ({style}) => {
 
  return (
    <View style={[style, {}]}>
      <ScrollView >
      <SearchBar/>
      <Slider />
      <PopularServices/>
      <ServiceProviders/>
      <Ratings/>
      </ScrollView>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})