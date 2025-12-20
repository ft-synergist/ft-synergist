import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.ftsynergist.com'

    // Static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/events',
        '/insights',
        '/partnership',
        '/edg-grant',
        '/privacy-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
