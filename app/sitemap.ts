import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ftsynergist.com'

  const routes = [
    '',
    '/about',
    '/contact',
    '/events',
    '/insights',
    '/partnership',
    '/edg-grant',
    '/sustainability',
    '/privacy-policy',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
