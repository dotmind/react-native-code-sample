import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const Loader = props => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#222" />
  </View>
);

export default Loader;