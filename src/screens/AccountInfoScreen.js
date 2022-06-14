import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import AccountInfo from '../component/AccountInfo';

const AccountInfoScreen = props => {
  const userId = Object.values(props)[1].params.userId;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AccountInfo id={userId} />
    </ScrollView>
  );
};
export default AccountInfoScreen;
