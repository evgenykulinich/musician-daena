import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${ process.env.NEXT_PUBLIC_BASE_URL }`,
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${ process.env.NEXT_PUBLIC_BASE_URL }/discography`,
      changeFrequency: 'monthly',
      priority: 0.9
    }
  ]
}
