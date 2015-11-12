'use strict';

var React = require('react-native');
var {
  View,
  Text
} = React;

var Button = require('react-native-button');
var Router = require('../Router.js');

var Component = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Button onPress={() => {
          let data = {
            profile: {
              name: 'Charles'
            },
            title: 'Charles profile'
          };
          let route = Router.Profile(data);
          this.props.navigator.push(route);
        }}>
          Navigate to Charles profile
        </Button>
        <Button onPress={() => {
          let data = {
            profile: {
              name: 'Malicia'
            },
            title: 'Malicia profile'
          };
          let route = Router.Profile(data);
          this.props.navigator.push(route);
        }}>
          Navigate to Malicia profile
        </Button>
      </View>
    );
  }
});

var styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};


module.exports = Component;
