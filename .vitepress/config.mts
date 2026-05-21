import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitePressConfigs = {
  title: 'Sifted AI News',
  description: 'Daily AI News',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/feed-entries/'}
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sifted-network' }
    ]
  }
}

export default defineConfig(
  withSidebar(vitePressConfigs, {
    collapsed: true,
    rootGroupText: 'Contents',
    hyphenToSpace: true,
    capitalizeFirst: true,
    sortMenusByFileDatePrefix: true,
    sortMenusOrderByDescending: true
  })
)