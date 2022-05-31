import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import LoginScreen from '../../screens/LoginScreen';
import HomeContainer from '../BottomNavigator/BottomNavigator';
import DispatchScreen from '../../screens/DispatchScreen';
import DispatchDetailsScreen from '../../screens/DispatchDetailsScreen';
import SearchScreen from '../../screens/SearchScreen';
import AccountInfoScreen from '../../screens/AccountInfoScreen';
import IntroductionScreen from '../../screens/IntroductionScreen';
import ContactScreen from '../../screens/ContactScreen';
import {color} from 'react-native-elements/dist/helpers';

import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          tabBarActiveTintColor: 'green',
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeContainer"
          component={HomeContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dispatch"
          component={DispatchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chi tiết công văn"
          component={DispatchDetailsScreen}
        />
        <Stack.Screen name="Giới thiệu" component={IntroductionScreen} />
        <Stack.Screen name="Liên hệ" component={ContactScreen} />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Thông tin cá nhân" component={AccountInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
