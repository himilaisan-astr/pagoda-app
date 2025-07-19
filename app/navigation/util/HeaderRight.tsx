import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function HeaderRight({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Profile tapped')}>
        <Icon name="person-circle-outline" size={28} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Icon name="menu-outline" size={28} color="#333" style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 16, marginRight: 16 },
  icon: { marginLeft: 8 },
})
