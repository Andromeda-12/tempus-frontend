import { Button } from '@/shared/ui'
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
  },
  {
    id: 10,
    cover: '',
    title: 'Some else workspace',
    projectsCount: 3,
    own: false
  },
  {
    id: 11,
    cover: '',
    title: 'Some else workspace',
    projectsCount: 3,
    own: false
  },
  {
    id: 12,
    cover: '',
    title: 'Some else workspace',
    projectsCount: 3,
    own: false
  },
  {
    id: 13,
    cover: '',
    title: 'Some else workspace',
    projectsCount: 3,
    own: false
  },
  {
    id: 14,
    cover: '',
    title: 'Some else workspace',
    projectsCount: 3,
    own: false
  },
  {
    id: 15,
    cover: '',
    title: 'Some else workspace',
    projectsCount: 3,
    own: false
  },
  {
    id: 16,
    cover: '',
    title: 'Some else workspace',
    projectsCount: 3,
    own: false
  },
  {
    id: 17,
    cover: '',
    title: 'Some else workspace',
    projectsCount: 3,
    own: false
  }
]

export const Workspaces = () => {
  return (
    <div className='py-5'>
      <Button className='bg-neutral !rounded-full py-2 mb-7'>
        Create workspace
      </Button>

      <div className='scrollbar'>
        <WorkspaceList workspaces={workspaces} />
      </div>
    </div>
  )
}
