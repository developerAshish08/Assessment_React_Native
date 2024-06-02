import React, { useState } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const Certificate = () => {
  return (
   <View style={styles.certificateContainer}>
    <View style={styles.frameCertContainer}>
    <Image
     source={require('../assets/vector2.png')}
     style={styles.imageIcon2}// Added style for image
     />
    <Text style={styles.textCertCertificate}>
    Get Certified From 
    India’s Biggest 
    Beauty Platform
    </Text>  
    <Image
     source={require('../assets/vector.png')}
     style={styles.imageIcon}
     />
    </View>
    <Image
     source={require('../assets/cert.png')}
     style={styles.certImage}
     />
   </View>
  );
}

const styles = StyleSheet.create({
    certificateContainer:{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 24,
        width: 375,
        height: 416,
        backgroundColor: '#000000',
    },
    frameCertContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        width: 327,
        height: 90,
    },
    textCertCertificate: {
        width: 214,
        height: 90,
        fontFamily: 'FONTSPRING DEMO - Roca One Rg',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        textAlign: 'center',
        color: '#F5F5F5',
        textShadowColor: 'rgba(0, 0, 0, 0.0484594)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    imageIcon2:{
        width: 31.5,
        height: 5.62,
        transform: [{ scaleX: 1 }],
        backgroundColor: ' linear-gradient(90deg, #E74D85 0%, rgba(231, 77, 133, 0) 100%)',
        
      },
      imageIcon:{
        width: 31.5,
        height: 5.62,
        transform: [{ scaleX: -1 }],
        backgroundColor: ' linear-gradient(90deg, #E74D85 0%, rgba(231, 77, 133, 0) 100%)',
        
      },
     certImage:{
      width: 361,
      height: 252,
     }
});
export default Certificate;