import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { withEffector } from 'nextjs-effector'
import '@/app/global.css'
import { Header } from '@/widgets/header'
import { SidebarLayout } from '@/widgets/layouts'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Spinner } from '@/shared/ui'
import { LoaderLayout } from '@/widgets/layouts/loader-layout'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
  isNotFoundPage?: boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <SidebarLayout>{page}</SidebarLayout>)

  return (
    <ThemeProvider attribute='class'>
      <LoaderLayout >{getLayout(<Component {...pageProps} />)}</LoaderLayout>
    </ThemeProvider>
  )
}

export default withEffector(App)
