import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import api from '../src/config/api'; 


const PetCard = ({ pet }: { pet: any }) => (
  <View style={styles.card}>
    <Image
      source={{ uri: pet.imageUrl }} 
      style={styles.image}
    />
    <Text style={styles.cardTitle}>{pet.name}</Text>
    <Text>{pet.species}</Text>
    <Text>Idade: {pet.age} anos</Text>
  </View>
);

const PetList = ({ userId }: { userId: string }) => {
  const [pets, setPets] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await api.get(`/pets/${userId}`); 
        setPets(response.data);  
      } catch (err) {
        setError('Erro ao carregar os pets');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [userId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        renderItem={({ item }) => <PetCard pet={item} />}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default PetList;
