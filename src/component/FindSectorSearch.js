import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const FindSectorSearch = () => {
    return (
        <View style={styles.wrapper}>
            <View style={{backgroundColor:"#FFE600" , borderColor:"#fff", borderRadius:responsiveWidth(100),borderWidth:10,height:responsiveHeight(10),width:responsiveWidth(20), position:"absolute", bottom:responsiveHeight(14), left:responsiveWidth(60)}}>
            <View style={{backgroundColor:"#8002FF",width:responsiveWidth(7.8),height:responsiveHeight(3.5), right:responsiveWidth(7.5) , top:responsiveHeight(4.2), borderRadius:responsiveWidth(100)}}/>
            <View style={{backgroundColor:"#FF5E5E",width:responsiveWidth(4.4),height:responsiveHeight(2), left:responsiveWidth(6) , top:responsiveHeight(5), borderRadius:responsiveWidth(100)}}/>
            </View>
            <Text style={styles.title}>Welcome,</Text>
            <Text style={styles.subtitle}>Find Your </Text>
            <Text style={styles.subtitle}>Dream Sector!</Text>
            <View style={styles.searchBar}>
                <Ionicons name="search-outline" size={responsiveWidth(5)} color="#FF8A00" />
                <TextInput
                    style={styles.input}
                    placeholder="What are you looking for?"
                    placeholderTextColor="#888"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: responsiveWidth(5),
        paddingTop: responsiveHeight(2),
       backgroundColor:"#EDFFCE",
       width:responsiveWidth(75),
       marginTop:-75,
       borderTopEndRadius:responsiveWidth(8),
       borderTopStartRadius:responsiveWidth(8),
       borderBottomRightRadius:responsiveWidth(8),
       padding:responsiveWidth(5),
       position:"relative",
       overflow:"hidden"
    },
    title: {
        fontSize: responsiveWidth(3.2),
        fontWeight: '400',
        color: '#000',
    },
    subtitle: {
        fontSize: responsiveWidth(4.5),
        color: '#333',
        // marginBottom: responsiveHeight(2),
        fontWeight:"800"
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffff',
        borderRadius: 15,
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1),
        marginVertical:responsiveHeight(1.5)
    },
    input: {
        flex: 1,
        fontSize: responsiveWidth(4),
        paddingLeft: responsiveWidth(2),
    },
});

export default FindSectorSearch;
