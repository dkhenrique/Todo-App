import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { 
  useFonts, 
  Poppins_300Light, 
  Poppins_400Regular, 
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import { DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'; 

import  COLORS  from './src/styles/theme';


import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
    
  });

 

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <ThemeProvider theme={COLORS}>
          <StatusBar style="dark" translucent backgroundColor="transparent"  />
          <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}


