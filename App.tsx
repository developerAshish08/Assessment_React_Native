import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import Hero from './components/Hero';
import Certification from './components/Certification';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';
import Header from './components/Header';
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Hero />
      <JoinSection />
      <Certification />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});