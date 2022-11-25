import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

interface NavigationItem {
  href: string
  title: string
  icon: ReactNode
}

interface NavigationItemProps {
  open: boolean
  item: NavigationItem
}

interface NavigationProps {
  open: boolean
  items: NavigationItem[]
}

const NavigationItem = ({
  item: { href, icon, title },
  open
}: NavigationItemProps) => (
  <li>
    <Link href={href}>
      <a className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
        <div className='text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'>
          {icon}
        </div>
        <span
          className={clsx('ml-3 flex-1 whitespace-nowrap', !open && 'hidden')}
        >
          {title}
        </span>
        {/* <span className='inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200'>
            3
          </span> */}
      </a>
    </Link>
  </li>
)

export const Navigation = ({ open, items }: NavigationProps) => (
  <ul className='space-y-2'>
    {items.map((item) => (
      <NavigationItem open={open} item={item} key={item.title} />
    ))}
  </ul>
)
