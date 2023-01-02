import { Button } from '@/shared/ui'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const NotFoundPage = () => {
  const router = useRouter()

  const goBack = () => router.back()

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='text-center'>
        <div className='text-3xl mb-3'>Oops 😯</div>
        <div className='text-xl mb-5'>There is nothing here</div>

        <Button accent onClick={goBack}>Go back</Button>
      </div>
    </div>
  )
}

NotFoundPage.isNotFoundPage = true
NotFoundPage.getLayout = (page: ReactElement) => page

export default NotFoundPage
