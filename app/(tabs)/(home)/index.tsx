
import React from "react";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Platform, Image } from "react-native";
import { IconSymbol } from "@/components/IconSymbol";
import { useTheme } from "@react-navigation/native";
import { colors } from "@/styles/commonStyles";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: "Excellent Group Garage",
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
          {/* Hero Section with Logo */}
          <View style={styles.heroSection}>
            <Image 
              source={require('@/assets/images/5956e054-af55-4006-9531-4f042ce5b83d.jpeg')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={[styles.heroTitle, { color: colors.text }]}>
              Excellent Group Garage LTD
            </Text>
            <Text style={[styles.heroSubtitle, { color: colors.textSecondary }]}>
              Your Trusted Auto Care Partner
            </Text>
          </View>

          {/* Location Card */}
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <View style={styles.locationHeader}>
              <IconSymbol name="location.fill" color={colors.primary} size={24} />
              <Text style={[styles.cardTitle, { color: colors.text, marginLeft: 8 }]}>
                Our Location
              </Text>
            </View>
            <Text style={[styles.cardText, { color: colors.textSecondary }]}>
              Thika Road Next to Rainbow Resort Ruiru{'\n'}
              P.O BOX 498 – 00232, Ruiru
            </Text>
          </View>

          {/* Welcome Card */}
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Welcome to Excellence
            </Text>
            <Text style={[styles.cardText, { color: colors.textSecondary }]}>
              At Excellent Group Garage LTD, we provide top-quality automotive services with a commitment to excellence. Our experienced technicians use state-of-the-art equipment to keep your vehicle running smoothly.
            </Text>
          </View>

          {/* Quick Info Cards */}
          <View style={styles.infoGrid}>
            <View style={[styles.infoCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
              <View style={[styles.infoIconContainer, { backgroundColor: colors.primary }]}>
                <IconSymbol name="clock.fill" color={colors.card} size={28} />
              </View>
              <Text style={[styles.infoTitle, { color: colors.text }]}>
                Fast Service
              </Text>
              <Text style={[styles.infoText, { color: colors.textSecondary }]}>
                Quick turnaround times without compromising quality
              </Text>
            </View>

            <View style={[styles.infoCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
              <View style={[styles.infoIconContainer, { backgroundColor: colors.secondary }]}>
                <IconSymbol name="checkmark.seal.fill" color={colors.card} size={28} />
              </View>
              <Text style={[styles.infoTitle, { color: colors.text }]}>
                Certified Experts
              </Text>
              <Text style={[styles.infoText, { color: colors.textSecondary }]}>
                Highly trained and certified mechanics
              </Text>
            </View>
          </View>

          <View style={styles.infoGrid}>
            <View style={[styles.infoCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
              <View style={[styles.infoIconContainer, { backgroundColor: colors.accent }]}>
                <IconSymbol name="dollarsign.circle.fill" color={colors.card} size={28} />
              </View>
              <Text style={[styles.infoTitle, { color: colors.text }]}>
                Fair Pricing
              </Text>
              <Text style={[styles.infoText, { color: colors.textSecondary }]}>
                Transparent and competitive rates
              </Text>
            </View>

            <View style={[styles.infoCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
              <View style={[styles.infoIconContainer, { backgroundColor: colors.highlight }]}>
                <IconSymbol name="star.fill" color={colors.primary} size={28} />
              </View>
              <Text style={[styles.infoTitle, { color: colors.text }]}>
                Quality Parts
              </Text>
              <Text style={[styles.infoText, { color: colors.textSecondary }]}>
                Only genuine and premium parts used
              </Text>
            </View>
          </View>

          {/* Why Choose Us Section */}
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Why Choose Us?
            </Text>
            <View style={styles.featureItem}>
              <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={24} />
              <Text style={[styles.featureText, { color: colors.textSecondary }]}>
                Over 15 years of automotive excellence
              </Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={24} />
              <Text style={[styles.featureText, { color: colors.textSecondary }]}>
                State-of-the-art diagnostic equipment
              </Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={24} />
              <Text style={[styles.featureText, { color: colors.textSecondary }]}>
                Warranty on all repairs and services
              </Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={24} />
              <Text style={[styles.featureText, { color: colors.textSecondary }]}>
                Convenient location with ample parking
              </Text>
            </View>
          </View>

          {/* Contact Info Card */}
          <View style={[styles.card, { backgroundColor: colors.primary }]}>
            <Text style={[styles.cardTitle, { color: colors.card }]}>
              Get in Touch
            </Text>
            <Text style={[styles.contactText, { color: colors.card }]}>
              Visit the Contact tab to book an appointment or reach out to us directly!
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
  heroSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 16,
    borderRadius: 12,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  card: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 15,
    lineHeight: 22,
  },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 12,
  },
  infoCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  infoIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  featureText: {
    fontSize: 15,
    flex: 1,
    lineHeight: 20,
  },
  contactText: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
});
