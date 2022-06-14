import React from 'react';
import {Text, TouchableOpacity, RefreshControl} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {Card} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

import {styles} from '../../styles';
import Slide from '../component/Slide';
import NewDispatch from '../component/NewDispatch';
// import {fetchSlide} from '../component/Slide';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const HomeScreen = props => {
  const [refreshing, setRefreshing] = React.useState(false);
  // console.log(refreshing);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Slide refreshing={refreshing} />
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
        <NewDispatch refreshing={refreshing} />
      </Card>
    </ScrollView>
  );
};
export default HomeScreen;
