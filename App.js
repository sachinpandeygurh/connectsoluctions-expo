import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Welcome from './src/screen/Welcome';
import Home from './src/screen/Home';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

// Functional components for other screens
const SearchScreen = () => (
  <View>
    <Text>Search</Text>
  </View>
);

const VideoScreen = () => (
  <View>
    <Text>Video</Text>
  </View>
);

const UserScreen = () => (
  <View>
    <Text>User</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Welcome':
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'Search':
                iconName = 'search-outline';
                break;
              case 'Video':
                iconName = 'videocam-outline';
                break;
              case 'User':
                iconName = 'person-outline';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Welcome"
          component={Welcome}
          // options={{ tabBarStyle: { display: 'none' } }} 
        />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Video" component={VideoScreen} />
        <Tab.Screen name="User" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
