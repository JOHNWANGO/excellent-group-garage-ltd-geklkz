
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

  const handleCall = () => {
    Linking.openURL('tel:+1234567890');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:info@excellentgroupgarage.com');
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

          {/* Contact Info Cards */}
          <Pressable 
            style={[styles.contactCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}
            onPress={handleCall}
          >
            <View style={[styles.contactIconContainer, { backgroundColor: colors.primary }]}>
              <IconSymbol name="phone.fill" color={colors.card} size={28} />
            </View>
            <View style={styles.contactContent}>
              <Text style={[styles.contactLabel, { color: colors.textSecondary }]}>
                Phone
              </Text>
              <Text style={[styles.contactValue, { color: colors.text }]}>
                +1 (234) 567-8900
              </Text>
            </View>
            <IconSymbol name="chevron.right" color={colors.textSecondary} size={20} />
          </Pressable>

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
                info@excellentgroupgarage.com
              </Text>
            </View>
            <IconSymbol name="chevron.right" color={colors.textSecondary} size={20} />
          </Pressable>

          <View style={[styles.contactCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <View style={[styles.contactIconContainer, { backgroundColor: colors.accent }]}>
              <IconSymbol name="location.fill" color={colors.card} size={28} />
            </View>
            <View style={styles.contactContent}>
              <Text style={[styles.contactLabel, { color: colors.textSecondary }]}>
                Address
              </Text>
              <Text style={[styles.contactValue, { color: colors.text }]}>
                123 Auto Service Lane{'\n'}Garage City, GC 12345
              </Text>
            </View>
          </View>

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
                placeholder="+1 (234) 567-8900"
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
