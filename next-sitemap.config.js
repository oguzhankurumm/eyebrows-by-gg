/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://eyebrowsbygg.com',
  generateRobotsTxt: true,
  exclude: ['/book'], // Exclude booking redirect page from sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/book'],
      },
    ],
  },
}
