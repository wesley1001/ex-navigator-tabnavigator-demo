'use strict';

var React = require('react-native');
var {
  View,
  Text
} = React;

var Component = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.data.profile.name}
        </Text>
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