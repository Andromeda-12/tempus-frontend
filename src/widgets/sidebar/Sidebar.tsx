import clsx from 'clsx'
import { HamburgerButton } from '@/shared/ui'
import { SidebarSection } from './SidebarSection'
import { SidebarContainer } from './SidebarContainer'
import { Navigation } from './Navigaton'
import { Avatar } from '@/entities/viewer/ui/Avatar'
import { Icon } from '@/shared/ui/Icon'
import { ThemeSwitcher } from '@/features/theme-switcher'
import { useEffect } from 'react'

const topNavigation = [
  {
    href: '/',
    title: 'Tasks',
    icon: <Icon name='time' />
  },
  {
    href: '/reports',
    title: 'Reports',
    icon: <Icon name='report' />
  },
  {
    href: '/team',
    title: 'Team',
    icon: <Icon name='team' />
  },
  {
    href: '/workspaces',
    title: 'Workspaces',
    icon: <Icon name='team' />
  }
]

const bottomNavigation = [
  {
    href: '/settings',
    title: 'Settings',
    icon: <Icon name='settings' />
  },
  {
    icon: <Avatar size='8' className='relative -left-1' />,
    title: 'SomeName Some'
  }
]

interface SidebarProps {
  open: boolean
  onToggle: () => void
  className: string
}

export const Sidebar = ({ open, onToggle, className }: SidebarProps) => {
  // const [open, setOpen] = useState(false)

  // const handleHamburgerButtonClick = () => {
  //   onToggle(!open)
  //   setOpen(!open)
  // }




  return (
    <SidebarContainer className={className} open={open}>
      <div className='hidden md:flex justify-end items-center mb-2 '>
        <ThemeSwitcher className='mr-0.5' />
      </div>

      <div className={clsx('hidden md:flex  mb-4 flex-wrap justify-end h-14 md:h-auto')}>
        <div className='justify-end hidden md:flex'>
          <HamburgerButton className='mr-0.5' open={open} onClick={onToggle} />
        </div>
      </div>

      <div className='flex flex-col h-full justify-between '>
        <SidebarSection>
          <Navigation open={open} items={topNavigation} />
        </SidebarSection>

        <SidebarSection>
          <Navigation open={open} items={bottomNavigation} />
        </SidebarSection>
      </div>
    </SidebarContainer>
  )
}
