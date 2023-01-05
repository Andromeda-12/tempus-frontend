import clsx from 'clsx'
import { ReactNode, useEffect, useState } from 'react'
import { Sidebar } from '@/widgets/sidebar'
import { HamburgerButton } from '@/shared/ui'

interface SidebarLayout {
  children: ReactNode
}

export const SidebarLayout = ({ children }: SidebarLayout) => {
  const [open, setOpen] = useState(true)

  const handleToggle = () => {
    localStorage.setItem('isSidebarOpen', `${!open}`)
    setOpen(!open)
    document.cookie = 'isSidebarOpen' + '=' + !open + ';'
  }

  useEffect(() => {
    if (localStorage.getItem('isSidebarOpen') === 'true') return setOpen(true)
    setOpen(false)
  }, [])

  return (
    <div className='flex flex-col md:flex-row h-screen'>
      <div className='flex px-3 items-center md:hidden z-20 h-16 dark:bg-neutral w-full'>
        <HamburgerButton className='mr-3' open={open} onClick={handleToggle} />
      </div>

      <div
        className={clsx(
          'absolute h-screen z-10 md:relative md:h-auto',
          open ? 'w-64' : 'w-16',
          'duration-300'
        )}
      >
        <Sidebar
          className={clsx(
            open ? 'w-64' : 'hidden md:block w-16',
            'md:sticky top-0 left-0 h-full'
          )}
          open={open}
          onToggle={handleToggle}
        />
      </div>

      <div className='z-0 w-full md:mt-0 h-full py-5 box-border px-1.5 md:px-5 mx-auto '>
        {children}
      </div>
    </div>
  )
}
