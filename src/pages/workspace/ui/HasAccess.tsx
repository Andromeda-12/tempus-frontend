import { ReactNode } from 'react'
import { useUnit } from 'effector-react'
import { Show } from '@/shared/ui'
import { Roles } from '@/shared/api'
import { $workspaceViewerRole } from '../model'
import { hasAccess } from '../lib'

interface HasAccessProps {
  children: ReactNode
  role: Roles
}

export const HasAccess = ({ children, role }: HasAccessProps) => {
  const workspaceViewerRole = useUnit($workspaceViewerRole)

  if (!workspaceViewerRole) return null

  const isHasAccess = hasAccess(workspaceViewerRole, role)

  return <Show when={isHasAccess}>{children}</Show>
}
