import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import TopBar from '../layout/TopBar'
import FindSectorSearch from '../component/FindSectorSearch'
import CategoryList from '../component/CategouryList'
import SectorHighlights from '../section/SectorHiglidht'
import RecommendedItems from '../section/RecommendedItems'
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  // const navigation = useNavigation();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.navigate('Home'); 
  //   }, 3000);

  //   return () => clearTimeout(timer); 
  // }, [navigation]);

  return (
    <ScrollView style={{backgroundColor:"#fff"}}>
    <TopBar/>
    <FindSectorSearch/>
    <View style={{backgroundColor:"#fff", borderTopLeftRadius:10, marginTop:-20}}  >
    <CategoryList/>
    <SectorHighlights/>
    <RecommendedItems/>  
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({}) 

export default Welcome;