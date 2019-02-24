import React, { PureComponent } from 'react';
import { 
  StyleSheet,
  View,
  Button,
  Switch,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  switchPaginated: {
    marginLeft: 10,
  },
});

class ListOptions extends PureComponent {
  state = {
    switchValue: false,
  };

  _renderToggleButton = () => {
    const { horizontal, onToggleChange } = this.props;
    const text = horizontal ? 'Afficher verticalement' : 'Afficher horizontalement';

    return (
      <Button
        title={text}
        onPress={() => onToggleChange(!horizontal)} />
    );
  }

  _renderSwitchPaginated = () => {
    const { paginated, onSwitchChange } = this.props;
    const { switchValue } = this.state;
    return (
      <Switch 
        style={styles.switchPaginated}
        value={switchValue}
        onValueChange={value => {
          this.setState({ switchValue: value });
          onSwitchChange(value);
        }} />
    );
  }

  render() {
    const { horizontal } = this.props;
    
    return (
      <View style={styles.container}>
        {this._renderToggleButton()}
        {horizontal && this._renderSwitchPaginated()}
      </View>
    );
  }

}

export default ListOptions;