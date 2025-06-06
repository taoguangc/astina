import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const seoSchema = z.object({
  title: z.string().min(5).max(120).optional(),
  description: z.string().min(15).max(160).optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string().optional()
    })
    .optional(),
  pageType: z.enum(['website', 'article']).default('website')
})

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    featureImage: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
        caption: z.string().optional()
      })
      .optional(),
    isFeatured: z.boolean().default(false),
    seo: seoSchema.optional()
  })
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.coerce.date(),
    isFeatured: z.boolean().default(false),
    seo: seoSchema.optional()
  })
})

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    featureImage: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
        caption: z.string().optional()
      })
      .optional(),
    seo: seoSchema.optional(),
    sections: z.array(z.any()).optional()
  })
})

const home = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    sections: z.array(z.object({
      _template: z.string(),
      headline: z.string().optional(),
      subHeadline: z.string().optional(),
      button: z.array(z.object({
        text: z.string(),
        href: z.string()
      })).optional(),
      image: z.string().optional(),
      title: z.string().optional(),
      text: z.string().optional(),
      linkTitle: z.string().optional(),
      link: z.string().optional(),
      cards: z.array(z.object({
        icon: z.string(),
        heading: z.string(),
        content: z.string()
      })).optional(),
      subTitle: z.string().optional(),
      items: z.array(z.object({
        title: z.string(),
        description: z.string(),
        serviceImage: z.string()
      })).optional(),
      staff: z.array(z.object({
        name: z.string(),
        job: z.string(),
        image: z.string(),
        link: z.string()
      })).optional(),
      customers: z.array(z.object({
        name: z.string(),
        job: z.string(),
        avatar: z.string(),
        testimonial: z.string()
      })).optional(),
      buttonText: z.string().optional(),
      buttonLink: z.string().optional(),
      features: z.array(z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string()
      })).optional()
    }))
  })
})

export const collections = { blog, projects, pages, home }
