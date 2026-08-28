import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ftsynergist.com'

  const routes: { path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' }[] = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/edg-grant', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/edge-grant', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/franchise-consultant', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/ip-consultant', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/mra-grant', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/ai-digitalisation', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/strategic-brand-marketing-development', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/sustainability', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/insights', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/insights/petale-tea-ip-growth-case-study', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/insights/state-of-ai-2026', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/insights/vietnam-expansion-blueprint', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/insights/wang-lao-ji-global-expansion-strategy', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/events', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/partnership', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'monthly' },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}

