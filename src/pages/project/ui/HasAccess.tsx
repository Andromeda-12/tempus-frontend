import { ReactNode } from 'react'
import { useUnit } from 'effector-react'
import { currentWorkspaceModel } from '@/entities/current-workspace'
import { currentProjectModel } from '@/entities/current-project'
import { Show } from '@/shared/ui'
import { hasProjectAccess } from '@/shared/lib'

interface HasAccessProps {
  children: ReactNode
}

export const HasAccess = ({ children }: HasAccessProps) => {
  const workspaceRole = useUnit(currentWorkspaceModel.$workspaceViewerRole)
  const projectRole = useUnit(currentProjectModel.$projectViewerRole)

  if (!workspaceRole || !projectRole) return null

  const isHasAccess = hasProjectAccess(workspaceRole, projectRole)

  return <Show when={isHasAccess}>{children}</Show>
}
