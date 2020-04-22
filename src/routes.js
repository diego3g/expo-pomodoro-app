import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Welcome from './pages/Welcome';
import Timer from './pages/Timer';

function Routes() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Welcome" component={Welcome} />
      <AppStack.Screen name="Timer" component={Timer} />
    </AppStack.Navigator>
  );
}

export default Routes;