import { createEvent, createStore, restore, sample } from 'effector'
import { createGate } from 'effector-react'
import { workspaceModel } from '@/entities/workspace'
import { deleteWorkspaceModel } from '@/features/workspace/delete-workspace'
import { workspaceFilterModel } from '@/features/filter/workspace-filter'
import { GetRequestQuery } from '@/shared/lib'

export const workspaceGate = createGate()

export const loadMoreWorkspaces = createEvent()
const addOffset = createEvent<number>()
const resetOffset = createEvent()

const resetWorkspaces = createEvent()
const setIsAllDataLoaded = createEvent<boolean>()

const $searchTitle = createStore('')
const $isOwnedFilter = createStore<boolean | null>(null)
const $limit = createStore(20)
export const $offset = createStore(0)
  .on(addOffset, (currentOffset, addedOffset) => currentOffset + addedOffset)
  .reset(resetOffset)
export const $isLoading = workspaceModel.getWorkspacesFx.pending

export const $isAllDataLoaded = restore(setIsAllDataLoaded, false)

sample({
  clock: resetWorkspaces,
  target: workspaceModel.resetWorkspaces
})

sample({
  clock: loadMoreWorkspaces,
  source: {
    offset: $offset,
    limit: $limit,
    isOwned: $isOwnedFilter,
    searchTitle: $searchTitle,
    isLoadign: $isLoading
  },
  filter: ({ isLoadign }) => !isLoadign,
  fn: ({ offset, limit, searchTitle, isOwned }) =>
    ({
      offset,
      limit,
      title: searchTitle || undefined,
      isOwned
    } as GetRequestQuery),
  target: workspaceModel.getWorkspacesFx
})

sample({
  clock: workspaceGate.open,
  target: loadMoreWorkspaces
})

sample({
  clock: workspaceGate.close,
  fn: () => 0,
  target: $offset
})

sample({
  clock: workspaceGate.close,
  fn: () => false,
  target: $isAllDataLoaded
})

sample({
  clock: workspaceGate.close,
  target: resetWorkspaces
})

sample({
  clock: workspaceModel.getWorkspacesFx.doneData,
  source: $limit,
  filter: (limit, data) => data.length < limit,
  fn: () => true,
  target: setIsAllDataLoaded
})

sample({
  clock: workspaceModel.getWorkspacesFx.done,
  source: $limit,
  target: addOffset
})

sample({
  clock: workspaceGate.close,
  target: deleteWorkspaceModel.confirmModal.closeModal
})

sample({
  clock: workspaceFilterModel.workspaceFilter.currentValue,
  fn: (currentFilter) => {
    if (currentFilter === 'own') return true
    if (currentFilter === 'others') return false
    return null
  },
  target: $isOwnedFilter
})

sample({
  clock: workspaceFilterModel.workspaceFilter.currentValue,
  target: [loadMoreWorkspaces, resetOffset, resetWorkspaces]
})

$offset.watch((e) => console.log(e))
