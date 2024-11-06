import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@/context/AuthContext'; 
import { RootStackParamList } from '@/src/types/navigation';
import { StackNavigationProp } from '@react-navigation/stack'; 


type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Footer = () => {
  const navigation = useNavigation<NavigationProp>(); 
  const { isAuthenticated } = useAuth(); 

  const handleNavigate = () => {
    if (isAuthenticated) {
      navigation.navigate('Cadastro'); 
    } else {
      navigation.navigate('Login'); 
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleNavigate}>
        <Text style={styles.buttonText}>
          Cadastrar Pet
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  button: {
    backgroundColor: '#20b2aa',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Footer;
