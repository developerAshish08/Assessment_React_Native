import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Hero = () => {
    const [formData, setFormData] = useState({
        name: '',
        whatsappNumber: '',
        profession: '',
        goal: '',
        city: '',
      });

    const professions = [
        { label: 'Choose the most relevant option', value: '' },
        { label: 'Profession 1', value: 'profession1' },
        { label: 'Profession 2', value: 'profession2' },
        // Add more options as needed
      ];
    
      const goals = [
        { label: 'Choose the most relevant option', value: '' },
        { label: 'Goal 1', value: 'goal1' },
        { label: 'Goal 2', value: 'goal2' },
        // Add more options as needed
      ];
    
      const cities = [
        { label: 'Choose the most relevant option', value: '' },
        { label: 'City 1', value: 'city1' },
        { label: 'City 2', value: 'city2' },
        // Add more options as needed
      ];
    
      const handleSubmit = () => {
        // Perform actions with formData after submission
        console.warn(formData);
        // Reset form data
        setFormData({
          name: '',
          whatsappNumber: '',
          profession: '',
          goal: '',
          city: '',
        });
      };

  return (
    <View style={styles.container}>
      <View style={styles.heroText}>
        <Text style={styles.title}>
          <Text>Professional Online{'\n'}</Text>
          <Text>Makeup Course</Text>
        </Text>

        <View style={styles.frame}>
          <View style={styles.subHeaderText}>
            <View style={styles.icon}>
              <Image
                source={require('../assets/SVG.png')}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.textCertificateContainer}>
                <Text style={styles.textCertificate}>Certification Programme</Text>
            </View>
          </View>
          
          <View style={styles.rating}>
            <View style={styles.iconRating}>
              <Image
                source={require('../assets/star.png')} 
             />
            </View>
            <View style={styles.textRateContainer}>
                <Text style={styles.textRate}>Rated 4.85/5</Text>
            </View>
          </View>

        </View>
        <View style={styles.point}>
           <View style={styles.benefit}>
               <View style={styles.iconTick}>
               <Image
                source={require('../assets/tick.png')}
                style={styles.iconImage}
              />
               </View>
               <Text style={styles.textPoint}>India's No.1 Online Makeup Course</Text>
           </View>

           <View style={styles.benefit}>
               <View style={styles.iconTick}>
               <Image
                source={require('../assets/tick.png')}
                style={styles.iconImage} 
              />
               </View>
               <Text style={styles.textPoint}>Learn by LIVE Do-it-Together Classes</Text>
           </View>

           <View style={styles.benefit}>
               <View style={styles.iconTick}>
               <Image
                source={require('../assets/tick.png')}
                style={styles.iconImage} 
              />
               </View>
               <Text style={styles.textPoint}>Unlimited Practice Sessions to master skills</Text>
           </View>

        </View>
      </View>
      {/* Your other components go here */}
      <View style={styles.form}>
       <View style={styles.frameHeaderForm}>
          <Text style={styles.textHeaderStyle}>
          Fill the form below to enquire
          </Text>
       </View>
       <View style={styles.frameFooterForm}>
        <View style={styles.footerform}>
            <View style={styles.footersubframe}>
                <Text style={styles.footersubframetext}>*Enter your name</Text>
                <TextInput style={styles.input}
                 placeholder="Eg. Ashish Sharma" 
                value={formData.name}
                onChangeText={(text) => setFormData({ ...formData, name: text })}
                />
            </View>
 
            <View style={styles.footersubframe}>
                <Text style={styles.footersubframetext}>*Enter your Whatsapp Number</Text>
                <TextInput style={styles.input} placeholder="Eg. 0000000000" 
                 value={formData.whatsappNumber}
                 onChangeText={(text) => setFormData({ ...formData, whatsappNumber: text })}
                />
            </View>

            <View style={styles.footersubframe}>
                <Text style={styles.footersubframetext}>*Select your profession</Text>
                <RNPickerSelect
                style={styles.input}
                style={styles.input}
                onValueChange={(value) => setFormData({ ...formData, profession: value })}
                 items={professions}
                placeholder={{}}
                />
                
            </View>

            <View style={styles.footersubframe}>
                <Text style={styles.footersubframetext}>*Select your goal</Text>
                <RNPickerSelect
                 style={styles.options}
                 onValueChange={(value) => setFormData({ ...formData, goal: value })}
                 items={goals}
                placeholder={{}}
                />
                
            </View>

            <View style={styles.footersubframe}>
                <Text style={styles.footersubframetext}>*Select your city</Text>
                <RNPickerSelect
                 style={styles.options}
                 onValueChange={(value) => setFormData({ ...formData, city: value })}
                 items={cities}
                placeholder={{}}
                />    
            </View>

         </View>
         <View style={styles.footersubframe}>
         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        </View>  

        </View>
       </View>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 375, 
    height: 670.4,
    paddingTop: 20,
    paddingRight: 24, 
    paddingBottom: 30, 
    paddingLeft: 24, 
    gap: 24,
    backgroundColor: 'rgba(15, 16, 20, 1)', 
  },
  heroText: {
   width:327,
   height:165.4,
   gap:7.08
  },
  title: {
    width: 327,
    height: 60,
    fontFamily: 'FONTSPRING DEMO - Roca One Rg',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 30,
    color: '#FFFFFF',
    textShadow:'0px 2px 4px rgba(0, 0, 0, 0.0484594)',
    alignSelf:'stretch',
  },
  frame: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: 10,
    width:327,
    height: 24.22,
    borderRadius: 5,
    alignSelf: 'stretch',
  },
  subHeaderText: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:'5.11px 11.08px',
    width: 166.16,
    height: 24.22,
    gap: 7,
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
    borderRadius: 5,
  },
  icon: {
    width: 9,
    height: 12.14,
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'flex-start',
    padding:'0px',
  },
  textCertificateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding:'0px',
    width: 128,
    height: 14,
  },
  textCertificate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: 0.82, 
    paddingHorizontal: 0, 

    width: 128,
    height: 13,
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 12,
    display: 'flex',
    alignItems: 'center',
    color: '#FAFAFA',
        order: 0,
    flexGrow: 0,

  },
  rating: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems: 'center',
    width: 83,
    height: 15.99,
    borderRadius:13,
    gap:4,
    padding: 0,
  },
  iconRating: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 11,
    height: 10.56,
    padding: 0,
  },
  textRateContainer:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 68,
    height: 15.99,
  },
  textRate: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:'0.3px 0px 0.69px',
    width: 68,
    height: 15,
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 14,
    color: '#F7C852',
    textAlign: 'right',
    order: 0, 
    flexGrow: 0,
  
  },
  point: {
   display:'flex',
   flexDirection:'column',
   alignItems:'flex-start',
   padding: 0,
   gap: 8,
   width: 295,
   height: 67,
  },
  benefit: {
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    padding: 0,
    gap: 8,
    width: 295,
    height: 17,
  },
 iconTick:{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'center',
    padding: 0,
    gap: 8,
    width: 14,
    height: 14,
 },
 textPoint:{
  width: 273,
  height: 17,
  fontFamily:' Proxima Nova',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: 14,
  lineHeight: 17,
  display: 'flex',
  alignItems: 'center',
  color: '#D2D2D2'
 },
 form:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding: 0,
    width: 327,
    height: 431,

 }, 
 frameHeaderForm:{
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'center',
    padding: 6,
    width: 327,
    height: 27,
    gap:10,
    backgroundColor: '#E84D84',
    borderTopLeftRadius: 10,
borderTopRightRadius: 10,
borderBottomLeftRadius: 0,
borderBottomRightRadius: 0,
 }, 
 textHeaderStyle:{
    width: 204,
    height: 15,
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14,
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF'
 },
 frameFooterForm:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    gap: 20,
    width: 327,
    height: 405,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  footerform:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    gap: 10,
    width: 307,
    height: 329,
  },
  footersubframe:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 11,
    width: 307,
    height: 62,
  },
  footersubframetext:{
    width: '100%',
    height: 16,
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12.7969,
    lineHeight: 16,
    display: 'flex',
    alignItems: 'center',
    color: '#505050',
  },
  input:{
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 7,
    paddingRight: 12,
    paddingBottom: 9,
    paddingLeft: 12,
    width: 307,
    height: 35,
    backgroundColor: '#FFFFFF',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 4,
  },
  options:{
    width: 307,
    height: 28,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 4,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13.5625,
    lineHeight: 19,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
    paddingHorizontal: 12,
    alignItems: 'center',
    color: '#BFBFBF',
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
export default Hero;
