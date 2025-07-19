import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawerContent from '../components/CustomDrawerContent';
import { SCREENS } from './util/drawerConfig';
import HeaderTitle from './util/HeaderTitle';
import HeaderRight from './util/HeaderRight';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ drawerPosition: 'right', headerTitleAlign: 'left' }}
    >
      {SCREENS.map(({ name, icon, component }) => (
        <Drawer.Screen
          key={name}
          name={name}
          component={component}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={name} />,
            headerRight: () => <HeaderRight navigation={navigation} />,
            drawerIcon: ({ color, size }) => <Icon name={icon} size={size} color={color} />,
          })}
        />
      ))}
    </Drawer.Navigator>
  );
}
