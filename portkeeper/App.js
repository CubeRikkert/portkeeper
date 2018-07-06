import React from 'react';
import { View } from 'react-native';
import StockDisplay from './screens/StockDisplay';
import styles from './App.styles'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StockDisplay />
      </View>
    );
  }
}