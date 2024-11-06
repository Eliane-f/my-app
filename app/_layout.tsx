import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer'; 
import Header from '@/components/Header'; 
import { AuthProvider } from '@/context/AuthContext'; 

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <Drawer initialRouteName="index">
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Home',
              title: 'Overview',
              header: () => <Header />, 
            }}
          />
          <Drawer.Screen
            name="About"
            options={{
              drawerLabel: 'Sobre',
              title: 'Overview',
              header: () => <Header />,
            }}
          />
        </Drawer>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
