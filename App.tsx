import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './src/navigation';

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
