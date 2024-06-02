import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const JoinSection = () => {

const handleApplyNow = () => {
console.warn("Apply Now button clicked. It's working properly.");
};

return (
    <View style={styles.joinSection}>
     <View style={styles.image}>
     <Image
     source={require('../assets/backImage.png')}
     />
     </View>

     <View style={styles.textContainer} >
     <Image
     source={require('../assets/vector2.png')}
     style={styles.imageIcon2}
     />
     <Text style={styles.text}>Why Should You Join Airblack?</Text>
     <Image
     source={require('../assets/vector.png')}
     style={styles.imageIcon}
     />
     </View>

    <View style={styles.boxContainer}>
        <View style={styles.frameContainer} >
        <Image
     source={require('../assets/vcrec.png')}
         style={{width: 34.14, height:34.14}} />
     <Text style={styles.textboxContainer}>Do-it-together, live on zoom</Text>
        </View>

        <View style={styles.frameContainer} >
        <Image
     source={require('../assets/starCircle.png')}
         style={{width: 34.14, height:34.14}} />
     <Text style={styles.textboxContainer}>4.8 /5 Rated Classes</Text>
  
        </View>

        <View style={styles.frameContainer} >
        <Image
     source={require('../assets/people.png')}
         style={{width: 34.14, height:34.14}} />
     <Text style={styles.textboxContainer}>35000+ Members</Text>
  
        </View>
    </View>
  <View>
  <TouchableOpacity style={styles.submitButton} onPress={handleApplyNow}>
    <Text style={styles.submitButtonText}>Apply Now</Text>
  </TouchableOpacity>
  </View>
  </View>
);
}

const styles = StyleSheet.create({
    joinSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 24,
        gap: 32,
        width: 375,
        height: 296.14,
        backgroundColor: '#050505',
        position: 'relative', 
      },
    image: {
    position: 'absolute',
    width: 360,
    height: 360,
    left: 'calc(50% - 360px/2 - 0.5px)',
    top: 'calc(50% - 360px/2 - 0.47px)',
    backgroundColor: '#000000',
    },
    applyButton: {
        backgroundColor: '#f09',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
      },
    applyButtonText: {
        color: '#fff',
        fontSize: 16,
      },
    textContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        gap:25,
        width: 327,
        height: 60,
      },
    imageIcon:{
        width: 44.5,
        height: 5.62,
        transform: [{ scaleX: -1 }],
        backgroundColor: ' linear-gradient(90deg, #E74D85 0%, rgba(231, 77, 133, 0) 100%)',  
      },
    imageIcon2:{
        width: 44.5,
        height: 5.62,
        transform: [{ scaleX: 1 }],
        backgroundColor: ' linear-gradient(90deg, #E74D85 0%, rgba(231, 77, 133, 0) 100%)',
        
      }, 
    text:{
    fontFamily: 'FONTSPRING DEMO - Roca One Rg',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    width: 188,
    height: 60,
    color: '#F5F5F5',
    textShadowColor: 'rgba(0, 0, 0, 0.0484594)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    },
    boxContainer:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 0,
        gap:11,
        width: 327,
        height: 76.14,
    },
    frameContainer:{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        gap:8,
        width: 104,
        height: 76.14,
    },
    textboxContainer:{
        width: 104,
        height: 34,
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        display: 'flex',
        textAlign: 'center',
        color: '#FFFFFF',
        textAlignVertical: 'center',
    },
    submitButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 9.09,
        paddingRight: 113.36,
        paddingBottom: 9.11,
        paddingLeft: 113.36,
        width: 307,
        height: 36,
        backgroundColor: '#E84D84',
        marginTop:5,
        borderRadius: 4,
      },
    submitButtonText:{
        width: '100%',
        height: 17,
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 17,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FAFAFA',
      },
});

export default JoinSection;