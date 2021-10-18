import React, {Component} from 'react';
import {View, Text} from 'react-native';
import DemoComponent from './src/Buoi1/DemoComponent';
import DemoStyle from './src/Buoi1/DemoStyle';
import BaiTapB3 from './src/Buoi3/BaiTap';
import BinddingData from './src/Buoi3/BinddingData';
import BTBindding from './src/Buoi3/BTBuoi6-BinddingData';
import RenderList from './src/Buoi3/RenderList';
import DemoFlatList from './src/Buoi4/DemoFlatList';
import DemoScroll from './src/Buoi4/DemoScrollView';

// Stateful Component
class App extends Component {
  render() {
    return (
      <DemoFlatList />
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
