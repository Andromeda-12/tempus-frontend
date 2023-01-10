import { PropsWithClassName } from '@/shared/lib'
import { Card, CardCover } from '@/shared/ui'

export interface WorkspaceProps {
  workspace: {
    cover: string
    title: string
    projectsCount: number
    own: boolean
  }
}

export const Workspace = ({ workspace }: WorkspaceProps) => {
  const { cover, projectsCount, title, own } = workspace

  return (
    <Card className='relative' withHover>
      {own && <OwnMark />}
      <CardCover cover={cover} />

      <div className='px-5 py-2'>
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

const OwnMark = () => (
  <div className='absolute right-2 top-2 bg-background-light/60 dark:bg-background-dark/40 py-1 px-2 text-xs rounded-full'>
    own
  </div>
)
