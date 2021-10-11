import React, {Component} from 'react';
import {View, Text} from 'react-native';
import DemoComponent from './src/Buoi1/DemoComponent';
import DemoStyle from './src/Buoi1/DemoStyle';
import DemoStyleSheet from './src/Buoi2/DemoStyleSheet';
import DemoFlex from './src/Buoi2/DemoFlex';
import DemoImage from './src/Buoi2/DemoImage';

// Stateful Component
class App extends Component {
  render() {
    return (
      <DemoImage />
    );
  }
}

// Stateless Component
// const App = () => (
//   <View style={{marginTop: 10}}>
//     <Text style={{fontSize: 20}}>456</Text>
//   </View>
// );

export default App;
