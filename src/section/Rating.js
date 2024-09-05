import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Feather } from '@expo/vector-icons';
// import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const Ratings = () => {
    // let [fontsLoaded] = useFonts({
    //     Inter_900Black,
    //   });
    
    //   if (!fontsLoaded) {
    //     return null;
    //   }
    
    const reviews = [
        { name: 'Pooja Jain', review: 'Lorem Ipsum Dolor Sit Amet Consectetur.', image: require('../../assets/user2.png'), solidStart: require("../../assets/reviewslolid.png"), emptyStar: require("../../assets/reviewempty.png") },
        { name: 'Pooja Jain', review: 'Lorem Ipsum Dolor Sit Amet Consectetur.', image: require('../../assets/user3.png'), solidStart: require("../../assets/reviewslolid.png"), emptyStar: require("../../assets/reviewempty.png") },
        
    ];

    return (
        <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between",  }}>
     <Text style={styles.title}>Ratings</Text>
     <Text style={styles.title}>•••</Text>
        </View>
               <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom:"5%"  }}>
            <Text style={{fontSize:12, color:"#FF6694", fontWeight:"600"}}>13 Reviews</Text>
            <Text  style={{fontSize:12,color:"#FF6694", fontWeight:"600"}}>WRITE A REVIEW    <Feather name="edit" size={15} color="#FF6694" /> </Text>
               </View>
            {reviews.map((review, index) => (
                <View key={index} style={styles.reviewCard}>
                    <Image source={require('../../assets/VectorRating.png')} style={[styles.reviewImage, { position: "absolute" , height:responsiveHeight(12)}]} />
                    <View style={styles.textContainer}>
                        <Text style={styles.reviewName}>{review.name}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginTop:8  }}>
                            <Image source={review.solidStart} style={{ marginHorizontal: "1%" }} />
                            <Image source={review.solidStart} style={{ marginHorizontal: "1%" }} />
                            <Image source={review.solidStart} style={{ marginHorizontal: "1%" }} />
                            <Image source={review.solidStart} style={{ marginHorizontal: "1%" }} />
                            <Image source={review.emptyStar} style={{ marginHorizontal: "1%" }} />
                        </View>
                        <Text style={styles.reviewText}>{review.review}</Text>
                    </View>
                    <Image source={review.image} style={styles.reviewImage} />
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
    reviewCard: {
        flexDirection: 'row',
        backgroundColor: '#ffff',
        borderRadius: 15,
        marginBottom: responsiveHeight(2),
        padding: 0,
        borderColor: "#FFCCD2",
        borderWidth: 1,
        borderStyle: "solid",
        position: "relative",
        overflow: "hidden",
        height:responsiveHeight(12)
    },
    reviewImage: {
        width: responsiveHeight(10),
        height: responsiveHeight(12),
        marginRight: responsiveWidth(0),
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft:"5%"
    },
    reviewName: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
    },
    reviewText: {
        fontSize: responsiveFontSize(1.8),
        marginVertical: responsiveHeight(0.5),
        // fontFamily:'Inter_900Black'
    },
});

export default Ratings;
