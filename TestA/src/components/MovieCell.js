/**
 * Created by fuxiaohui on 2017/2/7.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default class MovieCell extends Component {

  //获取时间的小时差
  getHour(str) {
    //var str = "2017-02-07 06:00:00";
    str = str.replace(/-/g,"/");
    var old = new Date(str);
    var now = new Date();
    var hour = Math.floor((now.getTime() - old.getTime()) / 1000 / 3600);
    return hour + "小时前";
  }

  render() {
    const data = this.props.data;
    console.log(data.img_url);
    return (
      <View>
        <Text style={styles.category}>-影视-</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.author}>{'文/' + data.author.user_name}</Text>
        <Image
          style={styles.img}
          source={{uri: data.img_url}}
        />
        <Text style={styles.forward}>{data.forward}</Text>
        <Text style={styles.subtitle}>{'--《' + data.subtitle + '》'}</Text>
        <View style={styles.bottom}>
          <Text style={styles.time}>{this.getHour(data.post_date)}</Text>
          <View style={styles.right}>
            <Text >{data.like_count}</Text>
            <Image
              style={styles.like}
              source={require('../img/FeedsLikeUnselected.png')}
            />
            <Image
              style={styles.dot}
              source={require('../img/separatorIcon.png')}
            />
            <Image
              source={require('../img/FeedsShare.png')}
            />
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
    );
  }
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  category: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 28,
    color: '#000',
    paddingHorizontal: 35
  },
  author: {
    fontSize: 20,
    paddingLeft: 35,
    color: '#000',
  },
  img: {
    width: width,
    height: 200
  },
  forward: {
    paddingLeft: 35,
    color: '#000',
    fontSize: 18
  },
  subtitle: {
    textAlign: 'right',
    color: '#000',
    fontSize: 18,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  like: {
    marginHorizontal: 10
  },
  dot: {
    marginRight: 10
  },
  line: {
    height: 10,
    backgroundColor: "#eee",
  }
});