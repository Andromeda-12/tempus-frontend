import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { withEffector } from 'nextjs-effector'
import '@/app/global.css'
import { Header } from '@/widgets/header'
import { SidebarLayout } from '@/widgets/layouts'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      {/* <Header /> */}
      <SidebarLayout>
        <Component {...pageProps} />
      </SidebarLayout>
    </ThemeProvider>
  )
}

export default withEffector(App)
