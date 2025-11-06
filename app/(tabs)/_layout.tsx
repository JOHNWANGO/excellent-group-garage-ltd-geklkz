
import React from 'react';
import { Platform } from 'react-native';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  // Define the tabs configuration
  const tabs: TabBarItem[] = [
    {
      name: '(home)',
      route: '/(tabs)/(home)/',
      icon: 'house.fill',
      label: 'Home',
    },
    {
      name: 'services',
      route: '/(tabs)/services',
      icon: 'wrench.and.screwdriver.fill',
      label: 'Services',
    },
    {
      name: 'contact',
      route: '/(tabs)/contact',
      icon: 'phone.fill',
      label: 'Contact',
    },
  ];

  // Use NativeTabs for iOS, custom FloatingTabBar for Android and Web
  if (Platform.OS === 'ios') {
    return (
      <NativeTabs>
        <NativeTabs.Trigger name="(home)">
          <Icon sf="house.fill" drawable="ic_home" color={colors.text} />
          <Label>Home</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="services">
          <Icon sf="wrench.and.screwdriver.fill" drawable="ic_services" color={colors.text} />
          <Label>Services</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="contact">
          <Icon sf="phone.fill" drawable="ic_contact" color={colors.text} />
          <Label>Contact</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }

  // For Android and Web, use Stack navigation with custom floating tab bar
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen name="(home)" />
        <Stack.Screen name="services" />
        <Stack.Screen name="contact" />
      </Stack>
      <FloatingTabBar tabs={tabs} />
    </>
  );
}
