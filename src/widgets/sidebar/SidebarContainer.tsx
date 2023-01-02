import clsx from 'clsx'
import { ReactNode } from 'react'

export const SidebarContainer = ({
  children,
  open,
  className
}: {
  children: ReactNode
  open: boolean
  className: string
}) => (
  <aside
    className={clsx(open ? 'w-64' : 'w-16', 'duration-300 h-full ', className)}
    aria-label='Sidebar'
  >
    <div className='h-full flex flex-col overflow-y-auto overflow-hidden py-4 px-2 bg-gray-50 dark:bg-gray-800 rounded-tr-3xl'>
      {children}
    </div>
  </aside>
)
