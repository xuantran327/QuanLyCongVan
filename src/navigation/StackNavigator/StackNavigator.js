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
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';

import HomeScreen from '../../screens/admin/HomeScreen';
import DispatchListScreen from '../../screens/admin/DispatchListScreen';
import UpdateDispatchScreen from '../../screens/admin/UpdateDispatchScreen';
import IssuingAgencyListScreen from '../../screens/admin/IssuingAgencyListScreen';
import UpdateIssuingAgencyScreen from '../../screens/admin/UpdateIssuingAgencyScreen';
import DocumentFormListScreen from '../../screens/admin/DocumentFormListScreen';
import UpdateDocumentFormScreen from '../../screens/admin/UpdateDocumentFormScreen';
import FieldListScreen from '../../screens/admin/FieldListScreen';
import UpdateFieldScreen from '../../screens/admin/UpdateFieldScreen';
import DocumentTypeListScreen from '../../screens/admin/DocumentTypeListScreen';
import UpdateDocumentTypeScreen from '../../screens/admin/UpdateDocumentTypeScreen';
import DispatchTypeListScreen from '../../screens/admin/DispatchTypeListScreen';
import UpdateDispatchTypeScreen from '../../screens/admin/UpdateDispatchTypeScreen';
import SlideListScreen from '../../screens/admin/SlideListScreen';
import UpdateSlideScreen from '../../screens/admin/UpdateSlideScreen';
import demo from '../../screens/demo';

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
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{title: 'Nhập email'}}
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
        <Stack.Screen
          name="AdminHome"
          component={HomeScreen}
          options={{title: 'Quản lý công văn'}}
        />
        <Stack.Screen
          name="AdminDispatchList"
          component={DispatchListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AdminUpdateDispatch"
          component={UpdateDispatchScreen}
          options={{title: 'Cập nhật công văn'}}
        />
        <Stack.Screen
          name="AdminIssuingAgencyList"
          component={IssuingAgencyListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AdminUpdateIssuingAgency"
          component={UpdateIssuingAgencyScreen}
          options={{title: 'Cập nhật cơ quan ban hành'}}
        />
        <Stack.Screen
          name="AdminDocumentFormList"
          component={DocumentFormListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AdminUpdateDocumentForm"
          component={UpdateDocumentFormScreen}
          options={{title: 'Cập nhật hình thức văn bản'}}
        />
        <Stack.Screen
          name="AdminFieldList"
          component={FieldListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AdminUpdateField"
          component={UpdateFieldScreen}
          options={{title: 'Cập nhật lĩnh vực'}}
        />
        <Stack.Screen
          name="AdminDocumentTypeList"
          component={DocumentTypeListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AdminUpdateDocumentType"
          component={UpdateDocumentTypeScreen}
          options={{title: 'Cập nhật loại văn bản'}}
        />
        <Stack.Screen
          name="AdminDispatchTypeList"
          component={DispatchTypeListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AdminUpdateDispatchType"
          component={UpdateDispatchTypeScreen}
          options={{title: 'Cập nhật loại hình công văn'}}
        />
        <Stack.Screen
          name="AdminSlideList"
          component={SlideListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AdminUpdateSlide"
          component={UpdateSlideScreen}
          options={{title: 'Cập nhật slide'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
