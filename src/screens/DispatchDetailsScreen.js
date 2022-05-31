import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Alert,
  Platform,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

import {styles} from '../../styles';
import DispatchDetails from '../component/DispatchDetails';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const DispatchDetailsScreen = route => {
  const dispatchId = Object.values(route)[1].params.dispatchId;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={[s.bgWhite]}>
      <DispatchDetails id={dispatchId} />
    </ScrollView>
  );
};
export default DispatchDetailsScreen;
