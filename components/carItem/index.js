import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Button from '../button/Button';
import styles from './carItemStyles';

const CarItem = ({ item }) => {
  const { name, image, tagline, taglineCTA } = item;
  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitles}>
          {tagline} <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <Button
          type='primary'
          content='CUSTOME ORDER'
          onPress={() => console.warn('Custome order got pressed')}
        />
        <Button
          type='secondary'
          content='EXISTING INVETORY'
          onPress={() => console.warn('Exixting Inventory got pressed')}
        />
      </View>
    </View>
  );
};

export default CarItem;
