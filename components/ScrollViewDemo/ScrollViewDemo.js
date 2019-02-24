import React, { PureComponent } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

const { width: vw, height: vh } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  item: {
    width: vw,
    height: vh / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100, 
    height: 100,
    marginLeft: 20,
  },
});

const getRandomColor = () => '#' + (((1 << 24) * Math.random()) | 0).toString(16);

const items = [
  { color: getRandomColor(), img: 'https://picsum.photos/100?random' },
  { color: getRandomColor(), img: 'https://picsum.photos/100?random' },
  { color: getRandomColor(), img: 'https://picsum.photos/100?random' },
  { color: getRandomColor(), img: 'https://picsum.photos/100?random' },
  { color: getRandomColor(), img: 'https://picsum.photos/100?random' },  
];

class ScrollViewDemo extends PureComponent {

  _renderItems = () => {
    return items.map((item, index) => {
      const itemIndex = index + 1;
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          style={[styles.item,{ backgroundColor: item.color }]}
          onPress={() => alert(itemIndex)}>
          <View style={styles.itemWrapper}>
            <Text>Item numéro: {itemIndex}</Text>
            <Image 
              style={styles.img}
              source={{ uri: item.img }} />
          </View>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {this._renderItems()}
      </ScrollView>
    );
  }
}

export default ScrollViewDemo;
