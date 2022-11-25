import clsx from 'clsx'
import { ReactNode, useState } from 'react'
import { Sidebar } from '@/widgets/sidebar'

interface SidebarLayout {
  children: ReactNode
}

export const SidebarLayout = ({ children }: SidebarLayout) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex flex-row'>
      <div
        className={clsx(
          'absolute h-full z-10 md:relative md:h-auto',
          open ? 'w-64' : 'w-16',
          'duration-300'
        )}
      >
        <Sidebar
          className={clsx(open ? 'w-64' : 'w-16', 'md:sticky top-0 left-0')}
          open={open}
          onToggle={() => setOpen(!open)}
        />
      </div>

      <div className='z-0 w-full md:w-6/12 lg:w-10/12 mx-auto overflow-hidden'>
        {children}
      </div>
    </div>
  )
}
