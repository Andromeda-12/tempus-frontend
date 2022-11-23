import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { withEffector } from 'nextjs-effector'
import '@/app/global.css'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      {/* <Header /> */}
      <Sidebar />
      {/* <Component {...pageProps} /> */}
    </ThemeProvider>
  )
}

export default withEffector(App)
