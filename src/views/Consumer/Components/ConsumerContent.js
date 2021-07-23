import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ConsumerGigs} from './ConsumerGigs';

export const ConsumerContent = () => {
  return (
    <View style={style.container}>
      <ConsumerGigs />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});