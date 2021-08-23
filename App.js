import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import CarItem from './components/carItem';
import cars from './assets/images/cars';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%' }}>
        <FlatList
          data={cars}
          renderItem={({ item }, index) => <CarItem key={index} item={item} />}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
          showVerticalScrollIndicator={false}
        />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
