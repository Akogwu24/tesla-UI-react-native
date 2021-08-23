import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from './buttonStyles';

const Button = ({ type, content, onPress }) => {
  const backgroundColor = type === 'primary' ? '#d8dde6' : '#1f1f1f';
  const textColor = type === 'primary' ? '#111' : '#eee';
  // const pressed =
  // type === 'primary' ? 'primary got pressed' : 'secondary got pressed';
  return (
    <Pressable
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.btnText, { color: textColor }]}>{content}</Text>
    </Pressable>
  );
};

export default Button;
