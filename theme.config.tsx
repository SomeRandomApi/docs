import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import useSeoProps from './components/useSeoProps'

const config: DocsThemeConfig = {
  useNextSeoProps: useSeoProps,
  head: <>
    <link rel="icon" type="image/png" href="https://img.pyrocdn.com/dbKUgahg.png"></link>
    <meta property="title" content="SRA Documentation" />
    <meta
      name="description"
      content="A random assortion of API endpoints for you to use and examples on how!"
    />
    <meta name="type" content="website" />

    <meta property="og:title" content="SRA Documentation" />
    <meta
      property="og:description"
      content="A random assortion of API endpoints for you to use and examples on how!"
    />
    <meta property="og:type" content="website" />
    <meta
      property="keywords"
      content="api, endpoints, fun, free"
    />
  </>,
  logo: <>
    <img alt="SRA Logo" src='https://img.pyrocdn.com/dbKUgahg.png' style={{ width: 40, height: 40, marginRight: 8}} />
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
