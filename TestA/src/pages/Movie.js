import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import Header from '../components/Header';
import API from '../utils/API';
import MovieCell from '../components/MovieCell';

export default class Music extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="一个电影"
          pressLeft={() => alert('左')}
          pressRight={() => alert('右')}
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <MovieCell
        data={rowData}
      />
    );
  }

  componentDidMount() {
    fetch(API.MOVIEAPI, {
      method: 'GET'
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson.data)
        });
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});