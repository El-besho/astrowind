import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const servicesCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    slug: z.string(),
    image: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

const subservicesCollection = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: 'src/content/subservices' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    slug: z.string(),
    service: z.string(),
    image: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

export const collections = {
  services: servicesCollection,
  subservices: subservicesCollection,
};
