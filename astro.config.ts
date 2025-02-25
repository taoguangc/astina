import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import pagefind from 'astro-pagefind'

// https://astro.build/config
export default defineConfig({
  site: 'https://astina.vercel.app',
  integrations: [mdx(), sitemap(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
    // 添加字体优化配置
    optimizeDeps: {
      exclude: ['@fontsource/inter'] // 如果你使用的是 Inter 字体
    }
  },
  image: {
    experimentalLayout: 'responsive'
  },
  experimental: {
    responsiveImages: true
  },
  build: {
    format: 'file',
    // 添加资源处理配置
    assets: 'assets',
    assetsPrefix: '/_astro'
  }
})
