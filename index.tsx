import { registerRootComponent } from 'expo';
import React from 'react';
import App from './App';
import { LanguageProvider } from './LanguageContext';

const AppWithProvider = () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(AppWithProvider);
