//注释
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//从 react 里面引入 React 类
//import React from 'react';

//ES6 的新语法，变量的解构赋值
//import { Component } from 'react';

//从数组和对象中提取值，对变量进行赋值，这被称为解构
//var [a, b, c] = [1, 2, 3];
//var { foo, bar } = { foo: "aaa", bar: "bbb" };

//导入系统
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//导入第三方
//https://js.coach/react-native
import TabNavigator from 'react-native-tab-navigator';

//导入自定义
import Home from './pages/Home';
import Read from './pages/Read';
import Music from './pages/Music';
import Movie from  './pages/Movie';


//当前文件默认导出的模块
//export default

//es6自定义类, 并继承Component
//class TestA extends Component

export default class TestA extends Component {
  //构造函数
  constructor() {
    //子类必须调用父类的构造函数
    super();

    //state: 存放组件内部的数据
    this.state = {
      selectedTab: 'home'
    }
  }

  //渲染组件方法
  render() {
    //返回的组件只能有一个根节点
    //JSX语法，实质上这只是一个语法糖，每一个XML标签都会被JSX转换工具转换成纯Javascript代码，React 官方推荐使用JSX
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          renderIcon={() => <Image source={require('./img/homeUnselected.png')} />}
          renderSelectedIcon={() => <Image source={require('./img/homeSelected.png')} />}
          onPress={() => this.setState({ selectedTab: 'home' })}
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
        >
          <Home/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'read'}
          title="阅读"
          renderIcon={() => <Image source={require('./img/readUnselected.png')} />}
          renderSelectedIcon={() => <Image source={require('./img/readSelected.png')} />}
          onPress={() => this.setState({ selectedTab: 'read' })}
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
        >
          <Read/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'music'}
          title="音乐"
          renderIcon={() => <Image source={require('./img/musicUnselected.png')} />}
          renderSelectedIcon={() => <Image source={require('./img/musicSelected.png')} />}
          onPress={() => this.setState({ selectedTab: 'music' })}
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
        >
          <Music/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'movie'}
          title="影视"
          renderIcon={() => <Image source={require('./img/movieUnselected.png')} />}
          renderSelectedIcon={() => <Image source={require('./img/movieSelected.png')} />}
          onPress={() => this.setState({ selectedTab: 'movie' })}
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
        >
          <Movie/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

  //组件的生命周期
  //加载过程
  // constructor()
  // componentWillMount()
  // render()
  // componentDidMount()

  //更新过程
  // componentWillReceiveProps()
  // shouldComponentUpdate()
  // componentWillUpdate()
  // render()
  // componentDidUpdate()

  //释放组件
  // componentWillUnmount()
}

const styles = StyleSheet.create({
  titleStyle: {
    color: '#B8B6B6',
  },
  selectedTitleStyle: {
    color: '#919191',
  }
});

//注册程序加载第一个组件
//AppRegistry.registerComponent(应用标识符, 获取组件的函数)
//应用标识符: 要和工程名字保持一致
//获取组件的函数的返回值, 和当前的组件名保持一致

//ES6允许使用“箭头”（=>）定义函数。
// var f = v => v;
// var f = function(v) {
//   return v;
// };
// 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
AppRegistry.registerComponent('TestA', () => TestA);
