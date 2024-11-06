import React from 'react';
import { Text,View, Button, StyleSheet } from 'react-native';


export default function About(){
    return(
        <View style={styles.footer}>
        <Text>sobre o App</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    footer: {
      padding: 16,
      backgroundColor: '#fff',
    },
  });''