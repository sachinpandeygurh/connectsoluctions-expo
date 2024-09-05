import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

const ServiceProviders = () => {
    const providers = [
        { name: 'Rohit Singhania', description: 'Lorem Ipsum Dolor Sit Amet Consectetur.', image: require('../../assets/user1.png') },
        { name: 'Rohit Singhania', description: 'Lorem Ipsum Dolor Sit Amet Consectetur.', image: require('../../assets/user1.png') },
        { name: 'Rohit Singhania', description: 'Lorem Ipsum Dolor Sit Amet Consectetur.', image: require('../../assets/user1.png') },
    ];

    return (
        <View style={styles.container}>
           <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between",  }}>
     <Text style={styles.title}>Service Providers</Text>
     <Text style={styles.title}>•••</Text>
        </View>
            {providers.map((provider, index) => (
                <View key={index} style={styles.providerCard}>
                    <Image source={provider.image} style={styles.providerImage} />
                    <View style={styles.textContainer}>
                        <Text style={styles.providerName}>{provider.name}</Text>
                        <Text style={styles.providerDescription}>{provider.description}</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Know More</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{position:"absolute", width:responsiveWidth(100), top:0 , left:0}}>
                    <Image  style={{position:"absolute", top:responsiveHeight(.1) , left:responsiveWidth(75.9)}} source={require('../../assets/serviceprovidertopVector.png')}/>
                    <Image  style={{position:"absolute", top:responsiveHeight(10) , left:responsiveWidth(0)}} source={require('../../assets/serviceproviderbottomVector.png')}/>
                        </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: responsiveWidth(5),
    },
    title: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        marginBottom: responsiveHeight(2),
    },
    providerCard: {
        flexDirection: 'row',
        backgroundColor: '#fce4ec',
        borderRadius: 15,
        marginBottom: responsiveHeight(2),
        padding: responsiveHeight(2),
        position:"relative",
        overflow:"hidden",
        height:responsiveHeight(15)
    },
    providerImage: {
        width: responsiveHeight(10),
        height: responsiveHeight(10),
        borderRadius: 50,
        marginRight: responsiveWidth(5),
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    providerName: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
    },
    providerDescription: {
        fontSize: responsiveFontSize(1.8),
        marginVertical: responsiveHeight(0.5),
    },
    button: {
        backgroundColor: '#CF76DD',
        borderRadius: 10,
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(5),
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#fff',
        fontSize: responsiveFontSize(1.8),
    },
});

export default ServiceProviders;
