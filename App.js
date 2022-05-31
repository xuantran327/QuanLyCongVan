/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App; */

/* import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {Card} from 'react-native-elements';
import {styles} from './styles';
//import {useNavigation} from '@react-navigation/native';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const showAlert = str => Alert.alert('Thông báo', str);

const App = () => {
  //const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let loginCheck = async () => {
    await fetch('http://192.168.1.16:8080/QuanLyCongVan/public/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({"email": email, "password": password}),
    })
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
        showAlert(resData.message);
        if (resData.status == 200) {
          //navigation.navigate('BottomNavigator');
        }
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };
  return (
    <View style={[styles.container, s.px4]}>
      <Card.Title
        style={[
          styles.fontSize45,
          styles.textGreen,
          s.fontWeightBold,
          s.textCenter,
          s.mb4,
          s.mt1,
        ]}>
        ĐĂNG NHẬP
      </Card.Title>
      <View style={styles.inputView}>
        <TextInput
          style={[styles.inputText]}
          placeholder="E-mail..."
          placeholderTextColor="green"
          value={email}
          onChangeText={value => setEmail(value)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={[styles.inputText]}
          placeholder="Password..."
          placeholderTextColor="green"
          value={password}
          onChangeText={value => setPassword(value)}
        />
      </View>
      <TouchableOpacity style={[styles.loginBtn]} onPress={loginCheck}>
        <Text style={styles.loginText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};
export default App; */

import 'react-native-gesture-handler';
import React from 'react';
import StackNavigator from './src/navigation/StackNavigator/StackNavigator';

const App = () => {
  return <StackNavigator />;
};

export default App;
