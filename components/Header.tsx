import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DrawerActions } from '@react-navigation/native'; 
import { useNavigation } from '@react-navigation/native'; 

const Header = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <FontAwesome name="bars" size={30} color="#fff" />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/Logo-removebg-preview.png')} 
            style={styles.logo}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="search" size={30} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <FontAwesome name="map" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#20b2aa', 
    paddingTop: 50, 
    paddingHorizontal: 16, 
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70, 
  },
  logo: {
    width: 65,
    height: 65,
    resizeMode: 'contain', 
    
  },
  logoContainer: {
    flex: 1, 
    alignItems: 'center', 
    paddingLeft:55,
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: 80, 
  },
  button: {
    padding: 10,
  },
});

export default Header;

