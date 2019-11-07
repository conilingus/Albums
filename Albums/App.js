import React from 'react';
import { Text, View } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={{flex: 1}}>
 <Header headerText={'Albums'}/>
 <AlbumList></AlbumList>
 </View>
);

export default App;
