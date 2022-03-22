import { AppProps } from 'next/app'
import React from 'react'

import '../styles/global.scss'

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  import('react-dom').then((ReactDOM) => {
    import('@axe-core/react').then((axe) => {
      axe.default(React, ReactDOM, 1000, {})
    })
  })
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
