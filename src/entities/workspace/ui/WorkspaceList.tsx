import { Workspace } from './Workspace'

interface Workspace {
  id: number
  cover: string
  title: string
  projectsCount: number
  own: boolean
}

interface WorkspaceListProps {
  workspaces: Workspace[]
}

export const WorkspaceList = ({ workspaces }: WorkspaceListProps) => {
  return (
    <div className='grid gap-7 grid-cols-[repeat(auto-fill,minmax(272px,1fr))]'>
      {workspaces.map((workspace) => (
        <Workspace key={workspace.id} workspace={workspace} />
      ))}
    </div>
  )
}
