import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

const PopularServices = () => {
    const services = [
        { name: 'Pet Grooming', image: require('../../assets/grooming.png') },
        { name: 'Pet Walking', image: require('../../assets/walking.png') },
        { name: 'Pet Dating', image: require('../../assets/dating.png') },
        { name: 'Pet Training', image: require('../../assets/training.png') },
        { name: 'Pet Adoption', image: require('../../assets/adoption.png') },
    ];

    const getDecorStyles = (index) => {
        if (index === 0 ) {
            return {
                top: -28,
                left: -23,
            };
        }else if (index === 1 || index === 2) {
            return {
                top: -45,
                left: responsiveWidth(35),
                width:responsiveWidth(20),
                height:responsiveHeight(10)
            };
        } else if (index === 3) {
            return {
                top: -28,
                left: -13,
                width:responsiveWidth(15),
                height:responsiveHeight(7),
            };
        }
        else {
            return {
                top: -28,
                left: -23,
            };
        }
    };

    const getSecondDecorStyles = (index) => {
        if (index === 0 || index === 4) {
            return {
                top: responsiveHeight(15),
                left: responsiveWidth(30),
            };
        } else if (index === 1) {
            return {
                top: responsiveHeight(17),
                left: -12,
                width:responsiveWidth(10),
                height:responsiveHeight(5)
            };
        } else if (index === 2) {
            return {
                top: responsiveHeight(12),
                left:-35,
            };
        } else if (index === 3) {
            return {
                top: responsiveHeight(16),
                left: responsiveWidth(35),
                width:responsiveWidth(10),
                height:responsiveHeight(5)
            };
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Popular Services</Text>
                <Text style={styles.title}>•••</Text>
            </View>
            <View style={styles.serviceContainer}>
                {services.map((service, index) => (
                    <View key={index} style={styles.serviceCard}>
                        <Image source={service.image} style={styles.image} />
                        <Text style={styles.serviceName}>{service.name}</Text>
                        <View style={styles.backgroundDecor}>
                            <View style={[styles.decorShape, getDecorStyles(index)]} />
                            <View style={[styles.decorShape, getSecondDecorStyles(index)]} />
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: responsiveWidth(5),
        marginTop: responsiveHeight(3),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: responsiveFontSize(2),
        fontWeight: '800',
        marginBottom: responsiveHeight(2),
    },
    serviceContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    serviceCard: {
        width: responsiveWidth(42),
        height: responsiveHeight(20),
        backgroundColor: '#fce4ec',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: responsiveHeight(2),
        position: 'relative',
        overflow: 'hidden',
       
    },
    image: {
        // width: '60%',
        // height: '60%',
        resizeMode: 'contain',
        marginBottom: responsiveHeight(1),
        zIndex:999
    },
    serviceName: {
        fontSize: responsiveFontSize(2),
        fontWeight: '600',
        zIndex:999
    },
    backgroundDecor: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: responsiveWidth(100),
        zIndex: 99,
    },
    decorShape: {
        backgroundColor: '#FFCBCB',
        width: 85,
        height: 85,
        position: 'absolute',
        borderRadius: 100,
    },
});

export default PopularServices;
