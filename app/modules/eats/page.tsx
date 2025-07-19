import React from 'react';
import { View, Text } from 'react-native';

export default function EatsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>🍽️ Eats</Text>
      <Text>Browse local eats and community favorite dishes.</Text>
    </View>
  );
}
