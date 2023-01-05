import { Button, Card } from '@/shared/ui'
import { WorkspaceList } from '@/entities/workspace'

const workspaces = [
  {
    id: 1,
    cover: 'photo.jpg',
    title: 'My first workspace',
    projectsCount: 1,
    own: true
  },
  {
    id: 2,
    cover: '',
    title: 'Invited workspace',
    projectsCount: 3,
    own: false
  },
  {
    id: 3,
    cover: '',
    title: 'Some workspace',
    projectsCount: 5,
    own: true
  },
  {
    id: 4,
    cover: 'photo.jpg',
    title: 'Workspace with very long title',
    projectsCount: 1,
    own: true
  },
  {
    id: 5,
    cover: '',
    title: 'Some else workspace',
    projectsCount: 3,
    own: false
  },
  {
    id: 6,
    cover: '',
    title: 'Some else workspace',
    projectsCount: 3,
    own: false
  },
  {
    id: 7,
    cover: '',
    title: 'Some else workspace',
    projectsCount: 3,
    own: false
  },
  {
    id: 8,
    cover: '',
    title: 'Some else workspace',
    projectsCount: 3,
    own: false
  },
  {
    id: 9,
    cover: '',
    title: 'Some else workspace',
    projectsCount: 3,
    own: false
  }
]

export const Workspaces = () => {
  return (
    <div className=' h-full '>
      {/* <div className='px-5 py-2 bg-neutral w-fit rounded-2xl mb-5 text-sm'>
        Create workspace
      </div> */}
{/* overflow-hidden flex flex-col */}
      <Button dense className='bg-neutral !rounded-full mb-7'>
        Create workspace
      </Button>
      {/* overflow-y-scroll */}
      <div className='h-full scrollbar  flex-1 pr-2'>
        <WorkspaceList workspaces={workspaces} />
      </div>
    </div>
  )
}
