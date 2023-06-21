import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

import {styles} from '../../../styles';
import HomeScreen from '../../screens/HomeScreen';
import AccountScreen from '../../screens/AccountScreen';
import DispatchScreen from '../../screens/DispatchScreen';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const Tab = createBottomTabNavigator();

const HomeContainer = route => {
  const userId = Object.values(route)[1].params.userId;
  const roleId = Object.values(route)[1].params.roleId;
  const name = Object.values(route)[1].params.name;
  console.log(Object.values(route)[1].params);
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
        name="Dispatch"
        component={DispatchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faSearch} color={color} size={size} />
          ),
          title: 'Tìm kiếm',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={AccountScreen}
        initialParams={{userId: userId, roleId: roleId, name: name}}
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
