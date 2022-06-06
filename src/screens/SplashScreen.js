import * as React from 'react';
import {View, Text, Image} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={require('../../img/launcher-icon.png')}
        resizeMode="contain"
      />
    </View>
  );
};
export default SplashScreen;
