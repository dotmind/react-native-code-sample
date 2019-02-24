import React, { PureComponent } from 'react';

import DUMMY from './dummy';
import Items from './components/Items';
import Loader from './components/Loader';
import ListOptions from './components/ListOptions';

import { 
  Text, 
  View, 
  StyleSheet,
  FlatList,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

class ListDemo extends PureComponent {
  state = {
    data: [],
    ready: false,
    horizontal: false,
    paginated: false,
  };

  componentDidMount() {
    // Fake API call
    setTimeout(() => {
      this.setState({ 
        data: DUMMY, 
        ready: true 
      });
    }, 1500);
  }

  _renderItems = ({ item }) => {
    return <Items content={item} />;
  }

  render() {
    const { ready, data, horizontal, paginated } = this.state;

    if (!ready) {
      return <Loader />;
    }

    return (
      <View style={styles.container}>
        <ListOptions
          horizontal={horizontal}
          paginated={paginated}
          onToggleChange={horizontalState => this.setState({ horizontal: horizontalState })}
          onSwitchChange={paginatedState => this.setState({ paginated: paginatedState })} />
        <FlatList
          horizontal={horizontal}
          pagingEnabled={paginated}
          data={data}
          renderItem={this._renderItems} />
      </View>
    );
  }
}

export default ListDemo;
