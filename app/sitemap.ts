export default async function sitemap() {
    const routes = ['', '/cookies-policy', '/privacy-policy', '/terms-and-conditions'].map(
      (route) => ({
        url: `https://www.thestorietteapp.com${route}`,
        lastModified: new Date().toISOString().split('T')[0],
      })
    );
  
    return [...routes];
  }
  