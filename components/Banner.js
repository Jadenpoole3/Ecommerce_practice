import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import ImageOverlay from './ImageOverlay';

export default class Banner extends React.Component {
  render() {
    return (


           
      <Image source={require('../images/suit.jpg')}
      style={styles.banner} 
    >

      </Image>
     
        

    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'

  }
});
