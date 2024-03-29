export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      sitemap: 'https://thestorietteapp.com/sitemap.xml',
      host: 'https://thestorietteapp.com',
    };
  }
  