import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';

export default class Music extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          title="一个音乐"
          pressLeft={() => alert('左')}
          pressRight={() => alert('右')}
        />
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