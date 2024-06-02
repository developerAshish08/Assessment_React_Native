import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Footer = () => {
  const handleApplyNow = () => {
  console.warn("Apply Now button clicked. It's working properly.");
  };
  const handleSubmit = (prop) => {
    console.warn(prop + " is clicked.");
  };

  return (
   <View style={styles.footerContainer}>
    <Image
     source={require('../assets/backImage.png')}
     style={styles.footerImage}// Added style for image
     />
     <View style={styles.textViewContainer}>
     <Text style={styles.textContainer}>
    Join our growing community of 35,000+ alumni
     </Text>
     </View>
     <View>
  <TouchableOpacity style={styles.submitButton} onPress={handleApplyNow}>
    <Text style={styles.submitButtonText}>Apply Now</Text>
  </TouchableOpacity>
  </View>
  <View style={styles.iconContainer}>
  <TouchableOpacity onPress={() => handleSubmit('Instagram')}>
  <Image
     source={require('../assets/insta.png')}
     style={styles.iconImage}
     />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => handleSubmit('Facebook')}>
     <Image
     source={require('../assets/fb.png')}
     style={styles.iconImage}
     />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => handleSubmit('LinkedIn')}>
     <Image
     source={require('../assets/linkedin.png')}
     style={styles.iconImage}
     />
     </TouchableOpacity>

     <TouchableOpacity onPress={() => handleSubmit('Twitter')}>
     <Image
     source={require('../assets/twitter.png')}
     style={styles.iconImage}
     />
     </TouchableOpacity>
  </View>
   
</View>
  );
}

const styles = StyleSheet.create({
  footerContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap:24,
    width: 375,
    height: 332.8,
    backgroundColor: '#FFFFFF', 
},
  iconImage:{
   width:32.98,
   height:33,
  },
  footerImage:{
    position: 'absolute',
    width: 375,
    height: 375,
    backgroundColor: '#000000',
    left: 'calc(50% - 375px/2)',
    top: 'calc(50% - 375px/2 - 0.4px)',
  },
  textViewContainer:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0.79,
    paddingBottom: 0.79,
    width: 195,
    height: 90.79,
  },
textContainer:{
    width: 195,
    height: 90,
    fontFamily: 'FONTSPRING DEMO - Roca One Rg',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.0484594)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
},
 submitButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 9.09,
    paddingHorizontal: 113.36,
    width: 296.72,
    height: 36,
    borderRadius: 4,
    backgroundColor: '#E54988',
},
submitButtonText:{
    width: '100%',
    height: 17,
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    display:'flex',
    textAlign: 'center',
    color: '#FAFAFA',
      },
iconContainer:{
    display:'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    gap:10,
    width: 186.02,
    height: 34,
    },
});

export default Footer;