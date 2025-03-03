import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import pagefind from 'astro-pagefind'

// https://astro.build/config
export default defineConfig({
  site: 'https://astina.vercel.app',
  output: 'static',
  integrations: [mdx(), sitemap(), pagefind()],
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    experimentalLayout: 'responsive'
  },
  experimental: {
    responsiveImages: true
  },
  build: {
    format: 'file'
  }
})
