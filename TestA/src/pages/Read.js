import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Header from '../components/Header';

export default class Read extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          title="一个阅读"
          pressLeft={() => alert('左')}
          pressRight={() => alert('右')}
        />
        button
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});