import '@/libraries/fontloader'
import '@/styles/custom.css'
// import { Maintenance } from '@/components/partials'
import '@/styles/tailwind.scss'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'


export default function MyApp({ Component, pageProps }: AppProps) {
  // Display this page when maintenance mode is enabled.
  return (
    <PlausibleProvider
      enabled={process.env.NODE_ENV === 'production'}
      domain='next-start.vercel.app'
      trackOutboundLinks
      selfHosted
    >
      <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  )
}
