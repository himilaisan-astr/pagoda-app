import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation } : any) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() =>
          navigation.navigate('Detail', { itemId: 86, otherParam: 'anything you want here' })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default HomeScreen
