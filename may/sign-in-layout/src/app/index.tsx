import React from 'react';
import { 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';

import Header from '../components/Header';
import SignInForm from '../components/SignInForm';
import SocialLogin from '../components/SocialLogin';
import Footer from '../components/Footer';

export default function SignInScreen() {
  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Header />
          <SignInForm />
          <SocialLogin />
          <Footer />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const BG_COLOR = '#ffffff';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    paddingBottom: 40,
  },
});
