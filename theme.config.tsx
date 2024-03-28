import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <>
    <img src='https://img.pyrocdn.com/dbKUgahg.png' style={{ width: 40, height: 40, marginRight: 8}} />
    <span>Some Random API</span>
  </>,
  project: {
    link: 'https://github.com/SomeRandomApi/docs',
  },
  chat: {
    link: 'https://discord.gg/tTUMWFd',
  },
  docsRepositoryBase: 'https://github.com/SomeRandomApi/docs',
  footer: {
    text: `©️ ${new Date().getUTCFullYear()} Some Random API`,
  },
  sidebar: {
    toggleButton: false
  }
}

export default config
