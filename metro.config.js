const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Configure for GitHub Pages
config.resolver.platforms = ['web', 'native', 'ios', 'android'];

module.exports = config;
