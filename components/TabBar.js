'use strict';

var React = require('react-native');
var {
  View,
  Image
} = React;

import ExNavigator from '@exponent/react-native-navigator';
var TabNavigator = require('react-native-tab-navigator');
var Router = require('../Router.js');

var Component = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'Home',
    };
  },
  renderTab(routeName) {
    return (
      <ExNavigator
        initialRoute={Router[routeName]({
          title: 'Me',
          profile: {
            name: 'Me'
          }
        })}
        style={{ flex: 1 }}
        sceneStyle={{ paddingTop: 64 }}
      />
    );
  },
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Home'}
          title="Home"
          renderIcon={() => <Image style={styles.icon} resizeMode={Image.resizeMode.contain} source={require('../icons/home.png')} />}
          onPress={() => this.setState({ selectedTab: 'Home' })}>
          {this.renderTab('Home')}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Profile'}
          title="Me"
          renderIcon={() => <Image style={styles.icon} resizeMode={Image.resizeMode.contain} source={require('../icons/gender_neutral_user.png')} />}
          onPress={() => this.setState({ selectedTab: 'Profile' })}>
          {this.renderTab('Profile')}
        </TabNavigator.Item>
      </TabNavigator>
    );
  },
});

var styles = {
  icon: {
    height: 23,
  },
};

module.exports = Component;