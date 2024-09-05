import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';  
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { LinearGradient } from 'expo-linear-gradient';  

const TopBar = () => {
    return (
        <LinearGradient
            colors={['#9766FF', '#F7F3FF']} 
            start={[0, 0]} 
            end={[1, 1]}   
            style={styles.gradient}
        >
            <View style={styles.container}>
                <Ionicons name="menu" size={responsiveWidth(6)} color="#fff" />
                <View style={styles.logoContainer}>
                    <Ionicons name="infinite-sharp" color="white"  size={responsiveWidth(8)}/>
                    <View style={styles.notificationDot} />
                </View>
               
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: responsiveWidth(90),
        bottom: responsiveHeight(2.5),
        left: responsiveWidth(4),
    },
    gradient: {
        width: responsiveWidth(100),
        height: responsiveHeight(20), 
        borderBottomRightRadius: responsiveWidth(15), 
        borderBottomLeftRadius: 0,   
        alignItems: 'center', 
        flexDirection: 'row',  
        justifyContent: 'space-between',
    },
    logoContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    notificationDot: {
        backgroundColor: '#FF8A00',  
        width: responsiveWidth(2),   
        height: responsiveWidth(2),  
        position: 'absolute',
        top: 0,
        right: 0,
        borderRadius: responsiveWidth(1.5),  
    },
});

export default TopBar;
