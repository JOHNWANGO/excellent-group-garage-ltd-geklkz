
import React, { useState } from "react";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Platform, TextInput, Pressable, Alert, Linking } from "react-native";
import { IconSymbol } from "@/components/IconSymbol";
import { useTheme } from "@react-navigation/native";
import { colors } from "@/styles/commonStyles";

export default function ContactScreen() {
  const theme = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const phoneNumbers = [
    '+254 726 883 350',
    '+254 703 456 919',
    '+254 703 456 939',
    '+254 723 477 838'
  ];

  const handleCall = (phoneNumber: string) => {
    const cleanNumber = phoneNumber.replace(/\s/g, '');
    Linking.openURL(`tel:${cleanNumber}`);
  };

  const handleEmail = () => {
    Linking.openURL('mailto:info@exellentgroupgarageltd.com');
  };

  const handleSubmit = () => {
    if (!name || !email || !phone || !message) {
      Alert.alert('Missing Information', 'Please fill in all fields to submit your booking request.');
      return;
    }

    console.log('Booking submitted:', { name, email, phone, message });
    Alert.alert(
      'Booking Request Sent!',
      'Thank you for your interest. We will contact you shortly to confirm your appointment.',
      [
        {
          text: 'OK',
          onPress: () => {
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
          },
        },
      ]
    );
  };

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: "Contact Us",
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
              Get in Touch
            </Text>
            <Text style={[styles.headerSubtitle, { color: colors.textSecondary }]}>
              We&apos;re here to help! Contact us or book an appointment below.
            </Text>
          </View>

          {/* Phone Numbers */}
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <View style={styles.cardHeader}>
              <IconSymbol name="phone.fill" color={colors.primary} size={24} />
              <Text style={[styles.cardTitle, { color: colors.text, marginLeft: 8 }]}>
                Phone Numbers
              </Text>
            </View>
            {phoneNumbers.map((phoneNumber, index) => (
              <Pressable 
                key={index}
                style={styles.phoneItem}
                onPress={() => handleCall(phoneNumber)}
              >
                <Text style={[styles.phoneText, { color: colors.text }]}>
                  {phoneNumber}
                </Text>
                <IconSymbol name="phone.circle.fill" color={colors.primary} size={20} />
              </Pressable>
            ))}
          </View>

          {/* Email */}
          <Pressable 
            style={[styles.contactCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}
            onPress={handleEmail}
          >
            <View style={[styles.contactIconContainer, { backgroundColor: colors.secondary }]}>
              <IconSymbol name="envelope.fill" color={colors.card} size={28} />
            </View>
            <View style={styles.contactContent}>
              <Text style={[styles.contactLabel, { color: colors.textSecondary }]}>
                Email
              </Text>
              <Text style={[styles.contactValue, { color: colors.text }]}>
                info@exellentgroupgarageltd.com
              </Text>
            </View>
            <IconSymbol name="chevron.right" color={colors.textSecondary} size={20} />
          </Pressable>

          {/* Address */}
          <View style={[styles.contactCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <View style={[styles.contactIconContainer, { backgroundColor: colors.accent }]}>
              <IconSymbol name="location.fill" color={colors.card} size={28} />
            </View>
            <View style={styles.contactContent}>
              <Text style={[styles.contactLabel, { color: colors.textSecondary }]}>
                Address
              </Text>
              <Text style={[styles.contactValue, { color: colors.text }]}>
                Thika Road Next to Rainbow Resort Ruiru{'\n'}
                P.O BOX 498 – 00232, Ruiru
              </Text>
            </View>
          </View>

          {/* Business Hours */}
          <View style={[styles.contactCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <View style={[styles.contactIconContainer, { backgroundColor: colors.highlight }]}>
              <IconSymbol name="clock.fill" color={colors.primary} size={28} />
            </View>
            <View style={styles.contactContent}>
              <Text style={[styles.contactLabel, { color: colors.textSecondary }]}>
                Business Hours
              </Text>
              <Text style={[styles.contactValue, { color: colors.text }]}>
                Mon - Fri: 8:00 AM - 6:00 PM{'\n'}
                Sat: 9:00 AM - 4:00 PM{'\n'}
                Sun: Closed
              </Text>
            </View>
          </View>

          {/* Booking Form */}
          <View style={[styles.formCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <Text style={[styles.formTitle, { color: colors.text }]}>
              Book an Appointment
            </Text>
            <Text style={[styles.formSubtitle, { color: colors.textSecondary }]}>
              Fill out the form below and we&apos;ll get back to you shortly.
            </Text>

            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, { color: colors.text }]}>
                Full Name *
              </Text>
              <TextInput
                style={[styles.input, { 
                  color: colors.text, 
                  borderColor: colors.border,
                  backgroundColor: colors.background,
                }]}
                placeholder="John Doe"
                placeholderTextColor={colors.textSecondary}
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, { color: colors.text }]}>
                Email Address *
              </Text>
              <TextInput
                style={[styles.input, { 
                  color: colors.text, 
                  borderColor: colors.border,
                  backgroundColor: colors.background,
                }]}
                placeholder="john@example.com"
                placeholderTextColor={colors.textSecondary}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, { color: colors.text }]}>
                Phone Number *
              </Text>
              <TextInput
                style={[styles.input, { 
                  color: colors.text, 
                  borderColor: colors.border,
                  backgroundColor: colors.background,
                }]}
                placeholder="+254 712 345 678"
                placeholderTextColor={colors.textSecondary}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={[styles.inputLabel, { color: colors.text }]}>
                Service Needed / Message *
              </Text>
              <TextInput
                style={[styles.textArea, { 
                  color: colors.text, 
                  borderColor: colors.border,
                  backgroundColor: colors.background,
                }]}
                placeholder="Describe the service you need or any questions you have..."
                placeholderTextColor={colors.textSecondary}
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>

            <Pressable
              style={[styles.submitButton, { backgroundColor: colors.primary }]}
              onPress={handleSubmit}
            >
              <Text style={[styles.submitButtonText, { color: colors.card }]}>
                Submit Booking Request
              </Text>
            </Pressable>
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
  card: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  phoneItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  phoneText: {
    fontSize: 16,
    fontWeight: '600',
  },
  contactCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  contactIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  contactContent: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  contactValue: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
  },
  formCard: {
    borderRadius: 12,
    padding: 20,
    marginTop: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
  },
  textArea: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    minHeight: 100,
  },
  submitButton: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
    boxShadow: '0px 2px 8px rgba(220, 0, 0, 0.3)',
    elevation: 4,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },
});
