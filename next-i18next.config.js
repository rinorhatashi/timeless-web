module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ar'],
    localeDetection: true,
  },
  fallbackLng: {
    default: ['en'],
    ar: ['en'],
    de: ['en'],
  },
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
