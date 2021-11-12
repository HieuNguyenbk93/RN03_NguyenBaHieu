import React, {Component} from 'react';
import {View, Text} from 'react-native';
import DemoComponent from './src/Buoi1/DemoComponent';
import DemoStyle from './src/Buoi1/DemoStyle';
import BaiTapB3 from './src/Buoi3/BaiTap';
import BinddingData from './src/Buoi3/BinddingData';
import BTBindding from './src/Buoi3/BTBuoi6-BinddingData';
import RenderList from './src/Buoi3/RenderList';
import BtZalo from './src/Buoi4/BaiTap_Zalo';
import DemoFlatList from './src/Buoi4/DemoFlatList';
import DemoScroll from './src/Buoi4/DemoScrollView';
import Buoi5 from './src/Buoi5';
import {Provider} from 'react-redux'
import DemoRedux from './src/Buoi6/DemoRedux';
import store from './src/Buoi7/redux/store';
import RockPaperScissor from './src/Buoi7/RockPaperScissor';
import DemoLifecycle from './src/Buoi8/DemoLifecycle'
import DemoCallAPI from './src/Buoi8/DemoCallAPI';
import ListProductScreen from './src/Buoi9/ListProductScreen';

// Stateful Component
class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //   {/* <RockPaperScissor />   */}
      //   <DemoCallAPI />
      // </Provider>
      <ListProductScreen />
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
