import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const recommended = [
    { title: 'Now share the Construction Sectors with your anyone and can save it as bookmark', updated: '06:30 AM' },
    { title: 'Explore more sectors to grow your business', updated: '07:00 AM' },
];

const RecommendedItems = () => {
    return (
        <View style={styles.container}>
            {recommended.map((item, index) => (
                <View key={index} style={styles.itemCard}>
                    <View style={{ position: "absolute", top: 0, left: 0, width: responsiveWidth(100) }}>
                        <Image style={{ position: "absolute", top: responsiveHeight(0), left: responsiveWidth(82) }} source={require("../../assets/icons/recommendfortopVector2.png")} />
                        <Image style={{ position: "absolute", top: responsiveHeight(.1), left: responsiveWidth(78) }} source={require("../../assets/icons/recommendfortopVector.png")} />
                        <Image style={{ position: "absolute", top: responsiveHeight(12), left: responsiveWidth(1) }} source={require("../../assets/icons/recommendforbottomVector2.png")} />
                        <Image style={{ position: "absolute", top: responsiveHeight(12), left: responsiveWidth(1) }} source={require("../../assets/icons/recommendforbottomVector.png")} />
                    </View>
                    <View style={{ borderRadius: responsiveWidth(1), backgroundColor: "#FFC5C5", width: responsiveWidth(20), height: responsiveHeight(10) }} />
                    <View style={{ width: responsiveWidth(60), marginHorizontal: responsiveWidth(2) }}>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={{ flexDirection: "row", width: responsiveWidth(60), alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={styles.timestamp}>Updated | {item.updated} </Text>
                            <Text style={{ width: responsiveWidth(20), paddingHorizontal: 1, paddingVertical: 2, borderRadius: 100, backgroundColor: '#995BFF', color: '#fff', textAlign: 'center', marginTop: 10 }}> Explore</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: responsiveWidth(3),
        marginVertical: responsiveHeight(2),
    },
    itemCard: {
        backgroundColor: '#F6F4FF',
        padding: responsiveHeight(2),
        borderRadius: 10,
        marginVertical: responsiveHeight(1),
        height: responsiveHeight(15),
        flexDirection: "row",
        position: "relative",
        overflow: "hidden"

    },
    title: {
        fontSize: responsiveWidth(4),
        fontWeight: 'bold',
        color: "#060047",
        flexWrap: "wrap"
    },
    timestamp: {
        fontSize: responsiveWidth(3.5),
        color: '#060047',
        marginTop: responsiveHeight(0.5),
    },
});

export default RecommendedItems;
