import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions,
  Image,
} from 'react-native';

const { width: vw } = Dimensions.get('window');

const CARD_MARGIN = 15;
const AVATAR_SIZE = 60;

const styles = StyleSheet.create({
  container: {
    width: vw - (CARD_MARGIN * 2),
    margin: CARD_MARGIN,
    borderColor: '#ecf0f1',
    borderWidth: 1,
    borderRadius: CARD_MARGIN,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginBottom: 10,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 21,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

class Items extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { content } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: content.avatar }} />
        <Text style={styles.username}>{content.username}</Text>
        <Text style={styles.text}>{content.text}</Text>
      </View>
    );
  }

}

export default Items;