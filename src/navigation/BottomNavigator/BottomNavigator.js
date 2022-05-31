import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';

import {styles} from '../../../styles';
import HomeScreen from '../../screens/HomeScreen';
import AccountScreen from '../../screens/AccountScreen';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const Tab = createBottomTabNavigator();

const HomeContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName="Trang chủ"
      screenOptions={{
        tabBarActiveTintColor: 'green',
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faHouse} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faUser} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeContainer;
