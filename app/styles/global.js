// 'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions
} from 'react-native';


var fullWidth = Dimensions.get('window').width;
var fullHeight = Dimensions.get('window').height;

const globalStyles = StyleSheet.create({
  font20: {
    fontSize: 20
  },
  textCenter: {
    textAlign: 'center'
  },
  font40: {
    fontSize: 40
  },
  notificationContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  onlineCirc: {
  backgroundColor: '#009E1D',
  width: 7,
  height: 7,
  borderRadius: 3.5,
  marginLeft: 5,
   marginRight: 5
},
  offlineCirc: {
  backgroundColor: 'red',
  width: 7,
  height: 7,
  borderRadius: 3.5,
  marginLeft: 5,
   marginRight: 5
},
  onlineRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
    tagBox: {
    backgroundColor: 'lightgray',
    padding: 5,
    marginLeft: 5,
    marginTop: 5,
    color: 'white'
  },
  input: {
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 30,
    width: 250,
    alignSelf: 'center'
  },
  marginTop: {
    marginTop: 10
  },
  margin: {
    margin: 10
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 20,
    borderStyle: 'solid',
    borderColor: 'transparent'
  },
  contentContainer: {
    paddingVertical: 30,
    backgroundColor: 'white'
  },
  green: {
    color: 'green'
  },
  font25: {
    fontSize: 25
  },
  active: {
    color: '#007aff'
  },
  white: {
    color: 'white'
  },
  fullContainer: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    width: fullWidth,
    padding: 20
  },
  button: {
    color: '#007aff'
  }
});


export {
  globalStyles,
  fullWidth,
  fullHeight
}
