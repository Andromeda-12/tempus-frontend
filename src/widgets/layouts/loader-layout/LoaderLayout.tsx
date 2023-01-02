import { Spinner } from '@/shared/ui'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'

interface LoaderLayoutProps {
  children: ReactNode
}

export const LoaderLayout = ({ children }: LoaderLayoutProps) => {
  const [isLoadingPage, setIsLoadingPage] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const start = () => {
      setIsLoadingPage(true)
    }
    const end = () => setIsLoadingPage(false)

    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', end)
    router.events.on('routeChangeError', end)
    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', end)
      router.events.off('routeChangeError', end)
    }
  }, [router])

  useEffect(() => {
    if (router.route === '/404') setIsLoadingPage(false)
  }, [router.route])

  return (
    <>
      {isLoadingPage ? (
        <div className='h-screen flex justify-center items-center'>
          <Spinner className='h-20 w-20 border-4' />
        </div>
      ) : (
        <div className={clsx(isLoadingPage && 'invisible')}>{children}</div>
      )}
    </>
  )
}
