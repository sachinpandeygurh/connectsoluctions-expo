import { View, Text } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Header = ({style}) => {
  return (
    <View style={[style, {display: "flex", flexDirection:"row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: "5%"} ]}>
      <Ionicons name="menu-sharp" color="black" size={24} />
      <Ionicons name="infinite-sharp" color="white" size={40} />
      <View style={{
        padding: "1%",
        backgroundColor: "#FFFFFF33",
        width: 40,
        height: 40,
        borderRadius: 9,
        // opacity: 0,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Fontisto name="bell" color="black" size={24} />
      </View>
    </View>
  );
}

export default Header;
