import { Card } from '@/shared/ui'
import { Cover } from './Cover'

export interface WorkspaceProps {
  workspace: {
    cover: string
    title: string
    projectsCount: number
    own: boolean
  }
}

export const Workspace = ({
  workspace: { cover, projectsCount, title, own }
}: WorkspaceProps) => {
  return (
    <Card className='flex flex-col justify-end cursor-pointer hover:scale-103 duration-300 relative'>
      {own && (
        <div className='absolute right-2 top-2 bg-background-light/60 dark:bg-background-dark/40 py-1 px-2 text-xs rounded-full'>
          own
        </div>
      )}

      <Cover cover={cover} />

      <div className='flex flex-col px-5 py-2'>
        <div className='text-ellipsis font-medium overflow-hidden whitespace-nowrap h-[20px] mb-2'>
          {title}
        </div>
        <div className='font-light text-sm text-color-light/60 dark:text-color-dark/50'>
          Projects: {projectsCount}
        </div>
      </div>
    </Card>
  )
}
