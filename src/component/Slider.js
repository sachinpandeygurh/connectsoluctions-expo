import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
    View, Image, StyleSheet, SafeAreaView, ScrollView, Dimensions, Text
} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Slider = () => {
    const { width } = Dimensions.get('window');
    const height = width * 0.7;

    const [active, setActive] = useState(0);

    const onScrollChange = ({ nativeEvent }) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
        );
        if (slide !== active) {
            setActive(slide);
        }
    };

    const images = [
        { image: require('../../assets/Slideimg.png'), title: "All-New Groomers in Town!" },
        { image: require('../../assets/Slideimg.png'), title: "Revamp Your Look Today!" },
        { image: require('../../assets/Slideimg.png'), title: "Fresh and Eatable!" }
     ];

    return (
        <View>
            <ScrollView
                pagingEnabled
                horizontal
                onScroll={onScrollChange}
                showsHorizontalScrollIndicator={false}
               >
                {images.map((item, index) => (
                    <View style={styles.container} key={index}>
                        <LinearGradient
                            colors={['#FFB5B1', '#CD7ED9']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.gradientContainer}>
                                <Image style={{position:"absolute", right:0, top:0}} source={require("../../assets/sliderVector.png")}/>
                            <View style={styles.leftContainer}>
                            <Text style={styles.bookNowText}>BOOK</Text>
                            <Text style={styles.bookNowText}>NOW!</Text>
                                <Text style={styles.discountText}>-20%</Text>
                            </View>
                            <View style={styles.rightContainer}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Image
                                    source={item.image}
                                    style={styles.image}
                                />
                            </View>
                        </LinearGradient>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.pagination}>
                {images.map((_, k) => (
                    <Text key={k} style={k === active ? styles.activeDot : styles.dot}>
                        •
                    </Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: responsiveWidth(1),
        marginRight: responsiveWidth(5),
        marginLeft: responsiveWidth(4.5),
        width: responsiveWidth(90),
        height: responsiveHeight(20),
        overflow:"hidden",
        borderRadius: 20,
    },
    gradientContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        padding: responsiveWidth(1),
        marginVertical: 40,
        position:"relative",
        overflow:"hidden",
        
    },
    leftContainer: {
        justifyContent: 'center',
        alignItems: 'center',        
        backgroundColor: "#FFD7E5",
        width:responsiveWidth(45),
        height:responsiveHeight(22),
        borderRadius:100,
        right:responsiveWidth(15)
    },
    bookNowText: {
        color: '#FF4081',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3),
        marginLeft:responsiveWidth(10)
    },
    discountText: {
        color: '#000',
        fontWeight: '800',
        fontSize: responsiveFontSize(2.5),
        marginLeft:responsiveWidth(15)
    },
    rightContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:"row",
        marginRight:responsiveWidth(80)


    },
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3.2),
        marginTop:-30,
        marginBottom: -10,
        width:responsiveWidth(35),
        left:50,
    },
    image: {
        width: responsiveWidth(100),
        resizeMode: 'contain',
        marginLeft:-130,
        marginBottom:-60,
        right:10
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -15,
        alignSelf: 'center',
    },
    dot: {
        color: '#FFD7E5',
        fontSize: 50,
    },
    activeDot: {
        color: '#FF6694',
        fontSize: 50,
    },
});

export default Slider;
