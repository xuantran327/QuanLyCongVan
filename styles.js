import {Dimensions, StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '100%',
    backgroundColor: 'green',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  textGreen: {
    color: 'green',
  },
  fontSize30: {
    fontSize: 30,
  },
  fontSize40: {
    fontSize: 40,
  },
  fontSize45: {
    fontSize: 45,
  },
  fontSize20: {
    fontSize: 20,
  },
  fontSize16: {
    fontSize: 16,
  },
  fontSize18: {
    fontSize: 18,
  },
  fontSize25: {
    fontSize: 25,
  },
  textAlignJustify: {
    textAlign: 'justify',
  },
  card: {
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
  height30: {
    height: 30,
  },
  height35: {
    height: 35,
  },
  height40: {
    height: 40,
  },
  wrap: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'green',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
  separator: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  inOneRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkbox: {
    alignSelf: 'center',
  },
  bgGreen: {
    backgroundColor: 'green',
  },
});
