import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CadastroForm = () => {

  const handleSubmit = () => {
  
    alert('Cadastro realizado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Pet</Text>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#20b2aa',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CadastroForm;

