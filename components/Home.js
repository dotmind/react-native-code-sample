import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

const CustomButton = (props) => (
  <View style={styles.buttonContainer}>
    <Button
      color={'#26a69a'}
      {...props} />
  </View>
);

const Home = ({ navigation }) => (
  <ScrollView 
    style={styles.container}
    contentContainerStyle={styles.contentContainer}>
    <CustomButton
      title={'Scroll view demo'}
      onPress={() => navigation.navigate('ScrollViewDemo')} />
    <CustomButton
      title={'List demo'}
      onPress={() => navigation.navigate('ListDemo')} />
  </ScrollView>
);

export default Home;