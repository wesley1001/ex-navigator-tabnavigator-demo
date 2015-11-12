/*
** Router and comments took from https://github.com/exponentjs/ex-navigator
*/

var React = require('react-native');
var {
  View,
  Image,
  Text
} = React;

var Button = require('react-native-button');

var Router = {
  TabBar() {
    return {
      getSceneClass() {
        return require('./components/TabBar.js');
      },
    };
  },
  Home() {
    return {
      getSceneClass() {
        return require('./components/Home.js');
      },
      getTitle() {
        return 'Home';
      },
    };
  },
  Profile(data = {}) {
    return {
      // Return a React component class for the scene. It receives a prop
      // called `navigator` that you can use to push on more routes.
      getSceneClass() {
        return require('./components/Profile.js');
      },
      // You can also render a scene yourself when you need more control over
      // the props of the scene component
      renderScene(navigator) {
        let ProfileScene = this.getSceneClass();
        return <ProfileScene navigator={navigator} data={data} />;
      },
      // When this scene receives focus, you can run some code. We're just
      // proxying the `didfocus` event that Navigator emits, so refer to
      // Navigator's source code for the semantics.
      onDidFocus(event) {
        console.log('Profile Scene received focus.');
      },
      // There are onWillBlur and onDidBlur events when the scene loses focus.
      // These events occur when another scene will focus or did focus,
      // respectively. The difference between "will" and "did" is the start and
      // end of the scene transition.
      onDidBlur(event) {
        console.log(`Profile Scene for ${data.title} lost focus.`);
      },
      // Return a string to display in the title section of the navigation bar.
      // This route's title is displayed next to the back button when you push
      // a new route on top of this one.
      getTitle() {
        return data.title;
      },
      // Render the view to display on the right side of the navigation bar. It
      // is typically a button but doesn't have to be.
      renderRightButton() {
        return (
          <View style={{
            flex: 1,
            justifyContent: 'center',
            marginRight: 10,
          }}>
            <Button onPress={() => { console.log('Tapped right button'); }} style={{marginBottom: 3}}>
              Log
            </Button>
          </View>          
        );
      },
    };
  },
};

module.exports = Router;