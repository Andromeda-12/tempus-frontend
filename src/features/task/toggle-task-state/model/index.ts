import { createEvent, sample } from 'effector'
import { currentTaskModel } from '@/entities/current-task'
import { currentWorkspaceModel } from '@/entities/current-workspace'
import { currentProjectModel } from '@/entities/current-project'

export const toggleTaskState = createEvent()
const toggleTaskStateWithValue = createEvent<{ isRunning: boolean }>()

sample({
  clock: toggleTaskState,
  source: currentTaskModel.$memberProgress,
  filter: Boolean,
  fn: ({ isRunning }) => ({ isRunning }),
  target: toggleTaskStateWithValue
})

sample({
  clock: toggleTaskStateWithValue,
  source: {
    currenWorkspace: currentWorkspaceModel.$currentWorkspace,
    currentProject: currentProjectModel.$currentProject,
    currentTask: currentTaskModel.$currentTask
  },
  filter: (_, { isRunning }) => isRunning,
  fn: ({ currentTask, currentProject, currenWorkspace }) => ({
    taskId: currentTask!.id,
    projectId: currentProject!.id,
    workspaceId: currenWorkspace!.id
  }),
  target: currentTaskModel.pauseTaskFx
})

sample({
    clock: toggleTaskStateWithValue,
    source: {
      currenWorkspace: currentWorkspaceModel.$currentWorkspace,
      currentProject: currentProjectModel.$currentProject,
      currentTask: currentTaskModel.$currentTask
    },
    filter: (_, { isRunning }) => !isRunning,
    fn: ({ currentTask, currentProject, currenWorkspace }) => ({
      taskId: currentTask!.id,
      projectId: currentProject!.id,
      workspaceId: currenWorkspace!.id
    }),
    target: currentTaskModel.runTaskFx
  })