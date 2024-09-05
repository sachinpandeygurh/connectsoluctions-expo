import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Welcome from './src/screen/Welcome';
import Home from './src/screen/Home';
import { SafeAreaView, Text, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Tab = createBottomTabNavigator();


const SearchScreen = () => (
  <SafeAreaView>
    <Text style={{ marginTop: "50%", marginLeft: "40%" }}>Search</Text>
  </SafeAreaView>
);

const VideoScreen = () => (
  <SafeAreaView>
    <Text style={{ marginTop: "50%", marginLeft: "40%" }}>Video</Text>
  </SafeAreaView>
);

const UserScreen = () => (
  <View>
    <Text style={{ marginTop: "50%", marginLeft: "40%" }}>User</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Welcome':
                iconName = 'home-sharp';
                break;
              case 'Home':
                iconName = 'home-sharp';
                break;
              case 'Search':
                iconName = 'search-outline';
                break;
              case 'Video':
                iconName = 'play-circle-outline';
                break;
              case 'User':
                iconName = 'person-outline';
                break;
            }

            return (
              <View style={{ marginLeft: responsiveWidth(70), width: responsiveWidth(90) }}>
                <View style={[
                  { padding: 8, flexDirection: 'row', paddingHorizontal: responsiveWidth(3), width: responsiveWidth(15), alignItems: "center", justifyContent: "space-between" },
                  focused && { backgroundColor: '#FFE7EA', borderRadius: 100, width: responsiveWidth(25) }
                ]}>
                  <Ionicons name={iconName} size={size} color={color} />
                  {focused && <Text style={{ fontWeight: "600" }}>{route.name}</Text>}
                </View>
              </View>
            );
          },
          tabBarActiveTintColor: '#905CFF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#FFF',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -10 },
            shadowOpacity: 0.15,
            shadowRadius: 20,
            elevation: 10,
            height: responsiveHeight(8),
            top: responsiveHeight(1.5),
            alignItems: "center", justifyContent: "space-between"
          },
        })}
      >

        <Tab.Screen
          name="Welcome"
          component={Welcome}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Video" component={VideoScreen} />
        <Tab.Screen name="User" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}