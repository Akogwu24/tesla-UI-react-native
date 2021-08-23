import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'space-between',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 40,
  },
  subTitleCTA: {
    textDecorationLine: 'underline',
  },
  subTitles: {
    fontSize: 20,
    color: '#5c5e6e',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  btnContainer: {
    padding: 20,
    bottom: 50,
  },
});

export default styles;
