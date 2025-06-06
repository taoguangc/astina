import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import pagefind from 'astro-pagefind'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://enima.vercel.app',
  integrations: [
    mdx(),
    sitemap(),
    pagefind(),
    icon({
      iconDir: 'src/assets/icons'
    })
  ],
  image: {
    experimentalLayout: 'constrained'
  },
  experimental: {
    responsiveImages: true
  },
  vite: {
    plugins: [tailwindcss()]
  },
  content: {
    collections: [
      {
        name: 'home',
        pattern: 'src/data/home/**/*.{json,md,mdx}'
      },
      {
        name: 'posts',
        pattern: 'src/content/posts/**/*.{json,md,mdx}'
      }
    ]
  }
})
