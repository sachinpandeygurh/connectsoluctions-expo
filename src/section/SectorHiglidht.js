import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

const sectors = [
    { name: 'Home Services', image: require('../../assets/popularsector1.png'), bg: "#EDFFCE" },
    { name: 'Healthcare', image: require('../../assets/popularsector2.png'), bg: "#CEFFF3" },
];

const SectorHighlights = () => {
    return (
        <View style={{ marginTop: responsiveHeight(3), }}>
            <View style={styles.header}>
                <Text style={styles.title}>Popular Sector</Text>
                <Text style={styles.title}>•••</Text>
            </View>
            <View style={styles.container}>
                {sectors.map((sector, index) => (
                    <View key={index} style={[styles.sectorCard, { backgroundColor: sector.bg }]}>

                        <View style={{ backgroundColor: "#FFE600", borderColor: "#C9B0FF", borderRadius: responsiveWidth(100), borderWidth: 10, height: responsiveHeight(10), width: responsiveWidth(20), position: "absolute", bottom: responsiveHeight(9), left: responsiveWidth(27), }}>
                            <View style={{ backgroundColor: "#fff", width: responsiveWidth(7.8), height: responsiveHeight(3.5), right: responsiveWidth(7.5), top: responsiveHeight(4.2), borderRadius: responsiveWidth(100) }} />
                            <View style={{ backgroundColor: "#FF5E5E", width: responsiveWidth(4.4), height: responsiveHeight(2), left: responsiveWidth(6), top: responsiveHeight(5), borderRadius: responsiveWidth(100) }} />
                        </View>
                        <Text style={styles.sectorName}>{sector.name}</Text>
                        <Image source={sector.image} style={styles.image} />
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: responsiveWidth(3),
        position: "relative"
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(5)
    },
    title: {
        fontSize: responsiveFontSize(2),
        fontWeight: '800',
        marginBottom: responsiveHeight(2),
    },
    sectorCard: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: "2%",
        width: responsiveWidth(40),
        height:responsiveHeight(15),
        position: "relative",
        overflow: "hidden"
    },
    image: {
        // width: responsiveWidth(60),
        // height: responsiveHeight(10),
        position:"absolute",
        bottom: -1,
        left:responsiveWidth(12)
    },
    sectorName: {
        fontSize: responsiveWidth(5),
        fontWeight: 'bold',
        color: '#333',
        textAlign: "left",
        // marginLeft:-6,
        width: responsiveWidth(33)
    },
});

export default SectorHighlights;
