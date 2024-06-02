import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const Header = () => {
return (
 <View style={styles.imageContainer}>
    <View style={styles.imageFrameContainer} >
    <Image
     source={require('../assets/airbackbeauty.png')}
     style={{width: 68.66, height:28.44}} />  
    <Text style={styles.imageContent}>Presents</Text>    
    </View>
    <Image
     source={require('../assets/backImage.png')}
     style={styles.backImage} />  
 </View>
);
}

const styles = StyleSheet.create({
imageContainer:{
 width: 375,
 height: 124,
 backgroundColor:'#000000',
},
imageFrameContainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    position: 'absolute',
    width: 327,
    height: 52.44,
    left: 24,
    top:36,
},
imageContent: {
    width: 68,
    height: 12,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 2.23191,
    textTransform: 'uppercase',
    color: '#FFFFFF',
},
backImage:{
    position: 'absolute',
    width: 510.42,
    height: 375,
   left: 'calc(50% - 510.42px/2)',
    top: -0.43,
    opacity: 0.5,
},
});

export default Header;