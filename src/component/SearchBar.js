import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Ionicons name="search-outline" size={responsiveWidth(5)} color="#FF6694" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="What are you looking for?"
                placeholderTextColor="#FF6694"
            />
             {/* <Ionicons name="filter" size={responsiveWidth(5)} color="#000" style={styles.icon} /> */}
             <Image source={require("../../assets/icons/filter.png")}/>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFEDF2',
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical:10,
        marginVertical: responsiveHeight(2),
        marginHorizontal: responsiveWidth(5),
        marginBottom:responsiveHeight(3)
    },
    icon: {
        marginRight: responsiveWidth(2),
    },
    input: {
        flex: 1,
        fontSize: responsiveFontSize(1.4),
        // fontFamily:"sora"
    },
});

export default SearchBar;
