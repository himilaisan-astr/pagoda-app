import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HeaderTitle({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Icon name="sparkles-outline" size={20} color="#6a1b9a" style={styles.icon} />
      <Text style={styles.text}>Pagoda | {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginLeft: 12 },
  icon: { marginRight: 6 },
  text: { fontSize: 18, fontWeight: '600', color: '#222' },
});
