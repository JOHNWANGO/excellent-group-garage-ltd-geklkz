
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
              Your Trusted Auto Care Partner Since 2014
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
              Approximately 200 meters off the Thika Superhighway{'\n'}
              Near Zetec University{'\n'}
              P.O BOX 498 – 00232, Ruiru
            </Text>
          </View>

          {/* About Us Section */}
          <View style={[styles.sectionHeader, { backgroundColor: colors.primary }]}>
            <Text style={[styles.sectionHeaderText, { color: colors.card }]}>
              ABOUT US
            </Text>
          </View>

          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <Text style={[styles.cardText, { color: colors.textSecondary }]}>
              Excellent Group Garage LTD is a Kenyan-registered motor vehicle repair company, incorporated in 2014 and strategically located in Ruiru, Kiambu County. We are actively involved in all forms of motor vehicle accident repairs and general automotive services.
            </Text>
          </View>

          {/* Leadership Card */}
          <View style={[styles.card, { backgroundColor: colors.highlight, borderColor: colors.primary, borderWidth: 1 }]}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Leadership Excellence
            </Text>
            <Text style={[styles.cardText, { color: colors.textSecondary }]}>
              Our CEO and Managing Director, <Text style={{ fontWeight: '700', color: colors.text }}>Mr. Samuel Githinji Mwangi</Text>, brings a wealth of automotive industry experience, having served as Chairman of the Board of Directors and Finance & Administration Director at Top Quality Auto Ltd for over 10 years. He has also worked with prominent international automotive firms such as Honda UK, Rolls Royce, and Excel UK, where he served in the Purchasing and Supplies Department.
            </Text>
          </View>

          {/* Our Story Card */}
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Our Story
            </Text>
            <Text style={[styles.cardText, { color: colors.textSecondary }]}>
              To ensure continuity of service for valued clients, particularly insurance companies, Excellent Group Garage LTD was established as a reliable successor. Most of our technical staff were retained from Top Quality Auto Ltd after receiving full terminal benefits. Their industry experience, strong work ethic, and professional dedication continue to be the cornerstone of our quality service delivery.
            </Text>
          </View>

          {/* Service Area Card */}
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Strategic Location & Service Area
            </Text>
            <Text style={[styles.cardText, { color: colors.textSecondary, marginBottom: 12 }]}>
              Our prime location along the Thika Road corridor allows us to conveniently serve major and growing towns including:
            </Text>
            <View style={styles.townsList}>
              <View style={styles.townItem}>
                <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={20} />
                <Text style={[styles.townText, { color: colors.textSecondary }]}>Juja</Text>
              </View>
              <View style={styles.townItem}>
                <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={20} />
                <Text style={[styles.townText, { color: colors.textSecondary }]}>Ruiru</Text>
              </View>
              <View style={styles.townItem}>
                <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={20} />
                <Text style={[styles.townText, { color: colors.textSecondary }]}>Kiambu</Text>
              </View>
              <View style={styles.townItem}>
                <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={20} />
                <Text style={[styles.townText, { color: colors.textSecondary }]}>Murang&apos;a</Text>
              </View>
              <View style={styles.townItem}>
                <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={20} />
                <Text style={[styles.townText, { color: colors.textSecondary }]}>Embu</Text>
              </View>
              <View style={styles.townItem}>
                <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={20} />
                <Text style={[styles.townText, { color: colors.textSecondary }]}>Nyeri</Text>
              </View>
            </View>
          </View>

          {/* 24-Hour Service Card */}
          <View style={[styles.card, { backgroundColor: colors.secondary }]}>
            <View style={styles.emergencyHeader}>
              <IconSymbol name="clock.fill" color={colors.card} size={32} />
              <Text style={[styles.emergencyTitle, { color: colors.card }]}>
                24-Hour Emergency Service
              </Text>
            </View>
            <Text style={[styles.emergencyText, { color: colors.card }]}>
              We operate 24-hour accident recovery and breakdown services, offering immediate roadside assistance and relieving customer stress during emergencies.
            </Text>
          </View>

          {/* Our Commitment Card */}
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Our Commitment to You
            </Text>
            <Text style={[styles.cardText, { color: colors.textSecondary, marginBottom: 12 }]}>
              We pride ourselves on clear communication, with our Customer Care Department providing timely updates on repair progress once repair authority is granted. We believe in transparency and the regular dissemination of information to all stakeholders – clients, insurers, assessors, and more.
            </Text>
            <Text style={[styles.cardText, { color: colors.textSecondary }]}>
              Our team comprises highly trained artisans, body builders, mechanics, technicians, and spray painters, all committed to restoring vehicles to near-manufacturer specifications. We operate under a strict <Text style={{ fontWeight: '700', color: colors.primary }}>&quot;Right First Time&quot;</Text> policy, ensuring quality, speed, and minimal need for repeat work – saving our customers time and cost.
            </Text>
          </View>

          {/* Vision Statement Section */}
          <View style={[styles.sectionHeader, { backgroundColor: colors.primary }]}>
            <Text style={[styles.sectionHeaderText, { color: colors.card }]}>
              VISION STATEMENT
            </Text>
          </View>

          <View style={[styles.card, { backgroundColor: colors.highlight, borderColor: colors.primary, borderWidth: 2 }]}>
            <View style={styles.visionContainer}>
              <IconSymbol name="eye.fill" color={colors.primary} size={40} />
              <Text style={[styles.visionText, { color: colors.text }]}>
                A preferred automotive service provider.
              </Text>
            </View>
          </View>

          {/* Mission Statement Section */}
          <View style={[styles.sectionHeader, { backgroundColor: colors.primary }]}>
            <Text style={[styles.sectionHeaderText, { color: colors.card }]}>
              MISSION STATEMENT
            </Text>
          </View>

          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <Text style={[styles.missionIntro, { color: colors.textSecondary }]}>
              Through continuous improvement, we will harness all resources to exceedingly satisfy all stakeholders as follows:
            </Text>
            <View style={styles.missionItem}>
              <IconSymbol name="star.fill" color={colors.primary} size={20} />
              <Text style={[styles.missionText, { color: colors.textSecondary }]}>
                Offering excellent service consistently and competitively
              </Text>
            </View>
            <View style={styles.missionItem}>
              <IconSymbol name="star.fill" color={colors.primary} size={20} />
              <Text style={[styles.missionText, { color: colors.textSecondary }]}>
                Fostering innovation in a safe and secure environment
              </Text>
            </View>
            <View style={styles.missionItem}>
              <IconSymbol name="star.fill" color={colors.primary} size={20} />
              <Text style={[styles.missionText, { color: colors.textSecondary }]}>
                Fostering teamwork in a conducive and inspiring environment
              </Text>
            </View>
            <View style={styles.missionItem}>
              <IconSymbol name="star.fill" color={colors.primary} size={20} />
              <Text style={[styles.missionText, { color: colors.textSecondary }]}>
                Consistently protect the environment from the effects of our operations
              </Text>
            </View>
          </View>

          {/* Core Values Section */}
          <View style={[styles.sectionHeader, { backgroundColor: colors.primary }]}>
            <Text style={[styles.sectionHeaderText, { color: colors.card }]}>
              CORE VALUES
            </Text>
          </View>

          {/* Quality Value */}
          <View style={[styles.valueCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <View style={styles.valueHeader}>
              <View style={[styles.valueIconContainer, { backgroundColor: colors.primary }]}>
                <IconSymbol name="star.fill" color={colors.card} size={24} />
              </View>
              <Text style={[styles.valueTitle, { color: colors.text }]}>Quality</Text>
            </View>
            <Text style={[styles.valueText, { color: colors.textSecondary }]}>
              We believe in offering the best quality service.
            </Text>
          </View>

          {/* Integrity Value */}
          <View style={[styles.valueCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <View style={styles.valueHeader}>
              <View style={[styles.valueIconContainer, { backgroundColor: colors.secondary }]}>
                <IconSymbol name="hand.raised.fill" color={colors.card} size={24} />
              </View>
              <Text style={[styles.valueTitle, { color: colors.text }]}>Integrity</Text>
            </View>
            <Text style={[styles.valueText, { color: colors.textSecondary }]}>
              Being true to our word, we believe in doing the right things and upholding high moral principles.
            </Text>
          </View>

          {/* Professionalism Value */}
          <View style={[styles.valueCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <View style={styles.valueHeader}>
              <View style={[styles.valueIconContainer, { backgroundColor: colors.accent }]}>
                <IconSymbol name="briefcase.fill" color={colors.card} size={24} />
              </View>
              <Text style={[styles.valueTitle, { color: colors.text }]}>Professionalism</Text>
            </View>
            <Text style={[styles.valueText, { color: colors.textSecondary }]}>
              We believe in abiding to rules and regulations in the motor industry in order to uphold highest possible standard.
            </Text>
          </View>

          {/* Accountability Value */}
          <View style={[styles.valueCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <View style={styles.valueHeader}>
              <View style={[styles.valueIconContainer, { backgroundColor: colors.primary }]}>
                <IconSymbol name="checkmark.shield.fill" color={colors.card} size={24} />
              </View>
              <Text style={[styles.valueTitle, { color: colors.text }]}>Accountability</Text>
            </View>
            <Text style={[styles.valueText, { color: colors.textSecondary }]}>
              We do work in a dignified manner and take responsibility of all our action.
            </Text>
          </View>

          {/* Teamwork Value */}
          <View style={[styles.valueCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <View style={styles.valueHeader}>
              <View style={[styles.valueIconContainer, { backgroundColor: colors.secondary }]}>
                <IconSymbol name="person.3.fill" color={colors.card} size={24} />
              </View>
              <Text style={[styles.valueTitle, { color: colors.text }]}>Teamwork</Text>
            </View>
            <Text style={[styles.valueText, { color: colors.textSecondary }]}>
              We believe in blending our diverse skills and working in unity to achieve our goals and objectives.
            </Text>
          </View>

          {/* Courtesy Value */}
          <View style={[styles.valueCard, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}>
            <View style={styles.valueHeader}>
              <View style={[styles.valueIconContainer, { backgroundColor: colors.accent }]}>
                <IconSymbol name="heart.fill" color={colors.card} size={24} />
              </View>
              <Text style={[styles.valueTitle, { color: colors.text }]}>Courtesy</Text>
            </View>
            <Text style={[styles.valueText, { color: colors.textSecondary }]}>
              We treat every customer with respect, kindness, and professionalism.
            </Text>
          </View>

          {/* Closing Statement */}
          <View style={[styles.card, { backgroundColor: colors.primary }]}>
            <Text style={[styles.closingText, { color: colors.card }]}>
              We are committed to delivering professional, ethical, and client-focused automotive services, and we look forward to deepening our collaboration with our partners and stakeholders as we work toward our shared mission: satisfying our common customer, the motorist.
            </Text>
          </View>

          {/* Contact CTA */}
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.primary, borderWidth: 2 }]}>
            <Text style={[styles.ctaTitle, { color: colors.text }]}>
              Ready to Experience Excellence?
            </Text>
            <Text style={[styles.ctaText, { color: colors.textSecondary }]}>
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
  sectionHeader: {
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1,
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
  townsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  townItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '45%',
  },
  townText: {
    fontSize: 15,
    fontWeight: '500',
  },
  emergencyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  emergencyTitle: {
    fontSize: 20,
    fontWeight: '800',
    flex: 1,
  },
  emergencyText: {
    fontSize: 15,
    lineHeight: 22,
  },
  visionContainer: {
    alignItems: 'center',
    gap: 16,
  },
  visionText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 28,
  },
  missionIntro: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
    fontWeight: '500',
  },
  missionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 12,
  },
  missionText: {
    fontSize: 15,
    lineHeight: 22,
    flex: 1,
  },
  valueCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  valueHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  valueIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  valueText: {
    fontSize: 15,
    lineHeight: 22,
    marginLeft: 60,
  },
  closingText: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: '500',
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  ctaText: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
});
