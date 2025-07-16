import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useLanguage } from './LanguageContext';

const LanguageButton: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleLanguage}>
      <View style={styles.flagContainer}>
        <Text style={styles.flag}>{language === 'pt' ? '🇧🇷' : '🇺🇸'}</Text>
      </View>
      <Text style={styles.languageText}>
        {language === 'pt' ? 'PT' : 'EN'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8faff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  flagContainer: {
    marginRight: 6,
  },
  flag: {
    fontSize: 16,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563eb',
  },
});

export default LanguageButton;
