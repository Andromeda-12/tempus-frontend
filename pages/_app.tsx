import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { withEffector } from 'nextjs-effector'
import '@/app/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default withEffector(App)
