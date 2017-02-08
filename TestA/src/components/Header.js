import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  PixelRatio
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.pressLeft}>
          <Image
            style={styles.left}
            source={require('../img/userCenter.png')}
          />
        </TouchableOpacity>
        <Text style={styles.center}>
          {this.props.title}
        </Text>
        <TouchableOpacity onPress={this.props.pressRight}>
          <Image
            style={styles.right}
            source={require('../img/navBarSearchIcon.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

// react-native默认单位 dp

// 1dp = 1物理px 像素密度PPI: 163
// 1dp = 2物理px 像素密度PPI: 326
// 1dp = 3物理px 像素密度PPI: 401

//PixelRatio像素比

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1 / PixelRatio.get()
  },
  center: {
    fontSize: 18,
    color: '#B8B6B6'
  },
  left: {
    marginLeft: 10,
  },
  right: {
    marginRight: 10
  }
});