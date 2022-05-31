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
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginVertical: 10,
          }}>
          <FontAwesomeIcon
            icon={faChevronRight}
            color="green"
            style={[s.mr2, s.mt2]}
          />
          <View>
            <Text
              style={[
                s.fontWeightBold,
                styles.fontSize16,
                styles.textAlignJustify,
                s.pr4,
                s.mb1,
                s.mr1,
              ]}>
              Báo cáo tình hình thực hiện công tác y tế năm 2017
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <FontAwesomeIcon icon={faCalendarAlt} style={[s.mr1]} />
              <Text>- 03/01/2018</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginVertical: 10,
          }}>
          <FontAwesomeIcon
            icon={faChevronRight}
            color="green"
            style={[s.mr2, s.mt2]}
          />
          <View>
            <Text
              style={[
                s.fontWeightBold,
                styles.fontSize16,
                styles.textAlignJustify,
                s.pr4,
                s.mb1,
                s.mr1,
              ]}>
              Báo cáo tình hình thực hiện công tác y tế năm 2017
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <FontAwesomeIcon icon={faCalendarAlt} style={[s.mr1]} />
              <Text>- 03/01/2018</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginVertical: 10,
          }}>
          <FontAwesomeIcon
            icon={faChevronRight}
            color="green"
            style={[s.mr2, s.mt2]}
          />
          <View>
            <Text
              style={[
                s.fontWeightBold,
                styles.fontSize16,
                styles.textAlignJustify,
                s.pr4,
                s.mb1,
                s.mr1,
              ]}>
              Báo cáo tình hình thực hiện công tác y tế năm 2017
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <FontAwesomeIcon icon={faCalendarAlt} style={[s.mr1]} />
              <Text>- 03/01/2018</Text>
            </View>
          </View>
        </View> */}
        <NewDispatch />
      </Card>
    </ScrollView>
  );
};
export default HomeScreen;
