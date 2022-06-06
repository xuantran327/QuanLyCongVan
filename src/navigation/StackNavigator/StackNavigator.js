import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../../screens/LoginScreen';
import HomeContainer from '../BottomNavigator/BottomNavigator';
import DispatchScreen from '../../screens/DispatchScreen';
import DispatchDetailsScreen from '../../screens/DispatchDetailsScreen';
import SplashScreen from '../../screens/SplashScreen';
import AccountInfoScreen from '../../screens/AccountInfoScreen';
import IntroductionScreen from '../../screens/IntroductionScreen';
import ContactScreen from '../../screens/ContactScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={showSplashScreen ? 'Splash' : 'Login'}
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
        {showSplashScreen ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : null}
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
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Thông tin cá nhân" component={AccountInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
