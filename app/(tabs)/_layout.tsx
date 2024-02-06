import React from 'react';
import {  Tabs } from 'expo-router';


import Colors from '@/constants/Colors';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { HomeIcon, MapIcon, TransIcon } from '@/components/Icons';


export default function TabLayout() {
 

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4CA7A8',
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        
        }}
      />
      <Tabs.Screen
        name="tracking"
        options={{
          tabBarLabel: '',
          title: 'Tracking',
          tabBarIcon: ({ color }) => <MapIcon color={color} />,
        }}
      />

<Tabs.Screen
        name="transaction"
        options={{
          tabBarLabel: '',
          title: 'Transactions',
          tabBarIcon: ({ color }) => <TransIcon color={color} />,
        }}
      />

    </Tabs>
    
  );
}
