import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './StockDisplay.styles';

export default class StockDisplay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Display stock :)</Text>
      </View>
    );
  }
}