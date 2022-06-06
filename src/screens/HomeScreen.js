import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons/faCalendarAlt';

import {styles} from '../../styles';
import Slide from '../component/Slide';
import NewDispatch from '../component/NewDispatch';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const HomeScreen = props => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Slide />
      <Card
        style={{borderRadius: 30}}
        containerStyle={{
          elevation: 0,
          borderColor: 'white',
          marginHorizontal: 0,
        }}>
        <Card.Title>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Dispatch')}>
            <Text
              style={[
                styles.textGreen,
                styles.fontSize25,
                s.fontWeightBold,
                s.ml2,
              ]}>
              Công văn mới nhất
            </Text>
          </TouchableOpacity>
        </Card.Title>
        <Card.Divider style={[styles.separator]} />
        <NewDispatch />
      </Card>
    </ScrollView>
  );
};
export default HomeScreen;
