import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Reactotron, {networking} from 'reactotron-react-native'


Reactotron
  .configure({host: '192.168.0.21'}) //this is also the ip address that expo is using
  .useReactNative({
    networking: {
      ignoreUrls: /\/(logs|symbolicate)$/,
    }
  })
  .connect()

  export default class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Hello Reactotron; Some Text to test
          </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
