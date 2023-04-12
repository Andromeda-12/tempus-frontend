import { useUnit } from 'effector-react'
import { AvatarGroup } from '@/features/users/avatar-group'
import { $currentWorkspace } from '../model'

export const WorkspaceMembers = () => {
  const currentWorkspace = useUnit($currentWorkspace)

  return (
    <div className='flex items-center space-x-2 text-xs text-color-light/60 dark:text-color-dark/50'>
      <div>{currentWorkspace?.members.length} members</div>
      <AvatarGroup members={currentWorkspace?.members || []} />
    </div>
  )
}