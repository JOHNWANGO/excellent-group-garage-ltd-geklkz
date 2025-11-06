
import React from "react";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Platform } from "react-native";
import { IconSymbol } from "@/components/IconSymbol";
import { useTheme } from "@react-navigation/native";
import { colors } from "@/styles/commonStyles";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export default function ServicesScreen() {
  const theme = useTheme();

  const services: Service[] = [
    {
      id: '1',
      title: 'Oil Change & Maintenance',
      description: 'Regular oil changes, filter replacements, and fluid top-ups to keep your engine running smoothly.',
      icon: 'drop.fill',
      color: colors.primary,
    },
    {
      id: '2',
      title: 'Brake Service & Repair',
      description: 'Complete brake inspection, pad replacement, rotor resurfacing, and brake fluid service.',
      icon: 'brake.signal',
      color: colors.secondary,
    },
    {
      id: '3',
      title: 'Engine Diagnostics',
      description: 'Advanced computer diagnostics to identify and resolve engine issues quickly and accurately.',
      icon: 'cpu.fill',
      color: colors.accent,
    },
    {
      id: '4',
      title: 'Tire Services',
      description: 'Tire rotation, balancing, alignment, and replacement with premium tire brands.',
      icon: 'circle.fill',
      color: colors.primary,
    },
    {
      id: '5',
      title: 'Battery Service',
      description: 'Battery testing, charging, and replacement to ensure reliable starting power.',
      icon: 'battery.100.bolt',
      color: colors.secondary,
    },
    {
      id: '6',
      title: 'Air Conditioning',
      description: 'AC system inspection, recharge, and repair for optimal cabin comfort.',
      icon: 'snowflake',
      color: colors.accent,
    },
    {
      id: '7',
      title: 'Transmission Service',
      description: 'Transmission fluid change, inspection, and repair for smooth gear shifting.',
      icon: 'gearshape.fill',
      color: colors.primary,
    },
    {
      id: '8',
      title: 'Suspension & Steering',
      description: 'Shock and strut replacement, steering system repair, and alignment services.',
      icon: 'arrow.up.and.down.circle.fill',
      color: colors.secondary,
    },
    {
      id: '9',
      title: 'Exhaust System',
      description: 'Muffler repair, catalytic converter service, and complete exhaust system inspection.',
      icon: 'smoke.fill',
      color: colors.accent,
    },
    {
      id: '10',
      title: 'Electrical Systems',
      description: 'Wiring repair, alternator service, starter replacement, and electrical diagnostics.',
      icon: 'bolt.fill',
      color: colors.primary,
    },
    {
      id: '11',
      title: 'Pre-Purchase Inspection',
      description: 'Comprehensive vehicle inspection before buying to ensure you make an informed decision.',
      icon: 'doc.text.magnifyingglass',
      color: colors.secondary,
    },
    {
      id: '12',
      title: 'General Repairs',
      description: 'All other automotive repairs and maintenance services for your vehicle.',
      icon: 'wrench.and.screwdriver.fill',
      color: colors.accent,
    },
  ];

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: "Our Services",
            headerLargeTitle: true,
          }}
        />
      )}
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            Platform.OS !== 'ios' && styles.scrollContentWithTabBar
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Section */}
          <View style={styles.headerSection}>
            <Text style={[styles.headerTitle, { color: colors.text }]}>
              Professional Auto Services
            </Text>
            <Text style={[styles.headerSubtitle, { color: colors.textSecondary }]}>
              We offer a comprehensive range of automotive services to keep your vehicle in top condition.
            </Text>
          </View>

          {/* Services List */}
          {services.map((service) => (
            <View key={service.id} style={[styles.serviceCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
              <View style={[styles.iconContainer, { backgroundColor: service.color }]}>
                <IconSymbol 
                  name={service.icon as any} 
                  color={colors.card} 
                  size={32} 
                />
              </View>
              <View style={styles.serviceContent}>
                <Text style={[styles.serviceTitle, { color: colors.text }]}>
                  {service.title}
                </Text>
                <Text style={[styles.serviceDescription, { color: colors.textSecondary }]}>
                  {service.description}
                </Text>
              </View>
            </View>
          ))}

          {/* Footer Card */}
          <View style={[styles.footerCard, { backgroundColor: colors.primary }]}>
            <IconSymbol name="phone.fill" color={colors.card} size={32} />
            <Text style={[styles.footerTitle, { color: colors.card }]}>
              Need a Service?
            </Text>
            <Text style={[styles.footerText, { color: colors.card }]}>
              Contact us today to schedule an appointment or get a quote for any of our services!
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  scrollContentWithTabBar: {
    paddingBottom: 100,
  },
  headerSection: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 15,
    lineHeight: 22,
  },
  serviceCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  serviceContent: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 6,
  },
  serviceDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  footerCard: {
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginTop: 12,
    boxShadow: '0px 2px 8px rgba(220, 0, 0, 0.3)',
    elevation: 4,
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 8,
  },
  footerText: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
});
