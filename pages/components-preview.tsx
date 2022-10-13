import type { NextPage } from 'next'
import { ComponentsPreview } from '@/pages/components-preview'
import { ThemeSwitcher } from '@/features/theme-switcher'

const ComponentsPreviewPage: NextPage = () => {
  return (
    <>
      <div className='w-10/12 p-8 mx-auto relative'>
        <ThemeSwitcher className='absolute top-2 right-0' />
        <ComponentsPreview />
      </div>
    </>
  )
}

export default ComponentsPreviewPage
