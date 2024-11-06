import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/app'; 
import LoginScreen from '@/components/Login'; 
import CadastroForm from '@/components/Form'; 
import { RootStackParamList } from './navigation'; 

const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroForm} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
