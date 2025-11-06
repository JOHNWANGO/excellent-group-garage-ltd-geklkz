
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const colors = {
  // Company colors: White, Red, and Black
  background: '#FFFFFF',        // White background
  text: '#000000',              // Black text
  textSecondary: '#666666',     // Dark gray for secondary text
  primary: '#DC0000',           // Bright red (primary brand color)
  secondary: '#8B0000',         // Dark red (secondary brand color)
  accent: '#FF3333',            // Lighter red accent
  card: '#FFFFFF',              // White cards
  highlight: '#FFE5E5',         // Very light red for highlights
  border: '#E0E0E0',            // Light gray for borders
  
  // Dark mode variants
  backgroundDark: '#000000',    // Black background for dark mode
  textDark: '#FFFFFF',          // White text for dark mode
  cardDark: '#1A1A1A',          // Very dark gray for cards in dark mode
};

export const buttonStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    width: '100%',
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    alignSelf: 'center',
    width: '100%',
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.text,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    width: '100%',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  icon: {
    width: 60,
    height: 60,
  },
});
