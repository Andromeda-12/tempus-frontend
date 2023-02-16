import { redirect } from 'atomic-router';
import { createEvent, createStore, sample } from 'effector'
import { UpdateWorkspaceDto, WorkspaceDto } from '@/shared/api'
import { createModal } from '@/shared/lib'
import { workspaceModel } from '@/entities/workspace'
import { workspacesRoute } from '@/shared/routing';

export const setCurrentWorkspace = createEvent<WorkspaceDto | null>()
const resetCurrentWorkspace = createEvent()

export const updateWorkspace = createEvent<UpdateWorkspaceDto>()

export const updateWorkspaceModal = createModal()

export const $currentWorkspace = createStore<WorkspaceDto | null>(null).reset(
  resetCurrentWorkspace
)

sample({
  clock: setCurrentWorkspace,
  target: $currentWorkspace
})

sample({
  clock: updateWorkspaceModal.closeModal,
  target: resetCurrentWorkspace
})

sample({
  clock: updateWorkspace,
  source: $currentWorkspace,
  filter: Boolean,
  fn: (currentWorkspace, updateWorkspaceDto) => ({
    id: currentWorkspace.id,
    updateWorkspaceDto
  }),
  target: workspaceModel.updateWorkspace
})

redirect({
  clock: workspaceModel.removeWorkspaceFx.doneData,
  route: workspacesRoute
})