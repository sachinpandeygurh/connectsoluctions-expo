import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Correct import
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { LinearGradient } from 'expo-linear-gradient'; 
import { router } from 'expo-router';

const categories = [
    {url:require("../../assets/icons/mdi_construction.png"), name: 'Construction', icon: 'construct-outline', color: '#4285F4', bgOne:'#ffff',bgTwo:'#CBE0FF',w:"40%"},
    {url:require("../../assets/icons/fontisto_film.png"), name: 'Entertainment', icon: 'musical-notes-outline', color: '#FFB74D' , bgOne:"#fff",bgTwo:"#FFE9BE",w:"40%"},
    {url:require("../../assets/icons/dashicons_pets.png"), name: 'Pet Care', icon: 'paw-outline', color: '#FF4081', bgOne:"#FEF2F3",bgTwo:"#FFB0DD",w:"30%" },
    {url:require("../../assets/icons/home.png"), name: 'Home Care', icon: 'home-outline', color: '#00ACC1' , bgOne:"#fff",bgTwo:"#C0FCF6",w:"35%"},
    {url:require("../../assets/icons/material-symbols_event-note-rounded.png"), name: 'Events', icon: 'calendar-outline', color: '#FF7043' , bgOne:"#fff",bgTwo:"#FFC8AB",w:"28%"},
    {url:require("../../assets/icons/material-symbols_health-metrics-rounded.png"), name: 'Healthcare', icon: 'medkit-outline', color: '#7986CB' , bgOne:"#fff",bgTwo:"#CFCFFF",w:"38%"},
];

const CategoryList = ({handlenavigator}) => {
  

    return (
        <View style={{marginTop: responsiveHeight(3),}}>
            <View style={styles.header}>
                <Text style={styles.title}>Explore Services</Text>
                <Text style={styles.title}>•••</Text>
            </View>
        <View style={styles.container}>
            {categories.map((category, index) => (
                <TouchableOpacity onPress={category.name==='Pet Care'?handlenavigator:{}} key={index} style={[styles.button, {width: category.w}]}>
                    <LinearGradient 
                        colors={[category.bgOne, category.bgTwo]}
                        start={[0, 0]} 
                        end={[1, 0]} 
                        style={{ flexDirection: 'row',
                            alignItems: 'center',
                            padding: responsiveWidth(3), 
                            borderRadius: responsiveWidth(5), 
                            borderWidth: 1,
                            borderColor: category.bgTwo,
                            width: '100%', }}
                    >
                        {/* <Ionicons name={category.icon} size={responsiveWidth(4)} color={category.color} /> */}
                        <Image source={category.url} />
                        <Text style={styles.text}>{category.name}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            ))}
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        // marginHorizontal: responsiveWidth(3),
        marginVertical: responsiveHeight(0),
    },    
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal:responsiveWidth(5)
    },
    title: {
        fontSize: responsiveFontSize(2),
        fontWeight: '800',
        marginBottom: responsiveHeight(2),
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: responsiveHeight(1),
        marginHorizontal:responsiveWidth(1),
        paddingHorizontal:responsiveWidth(2)
    },
    text: {
        marginLeft: responsiveWidth(2),
        fontSize: responsiveWidth(3),
        color: '#333',
    },
});

export default CategoryList;
