import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    gap: 12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: '#64748b',
  },
  link: {
    fontSize: 15,
    color: '#85cc17',
    fontWeight: 'bold',
    textDecorationLine:'underline',
    
  },
  forgotContainer: {
    marginTop: 4,
  },
  forgotText: {
    fontSize: 15,
    color: '#85cc17',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
