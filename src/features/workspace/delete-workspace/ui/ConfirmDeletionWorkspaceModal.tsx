import { useUnit } from 'effector-react'
import { Button, Modal } from '@/shared/ui'
import {
  $currentWorkspace,
  confirmModal,
  workspaceDeletionConfirme
} from '../model'

export const ConfirmDeletionWorkspaceModal = () => {
  const isOpen = useUnit(confirmModal.$isOpen)
  const closeModal = useUnit(confirmModal.closeModal)

  const currentWorkspace = useUnit($currentWorkspace)

  const workspaceDeletionConfirmeFn = useUnit(workspaceDeletionConfirme)

  const handleConfirm = () => {
    workspaceDeletionConfirmeFn()
    closeModal()
  }

  return (
    <div onMouseDown={(e) => e.stopPropagation()}>
      <Modal className='w-full max-w-md' isOpen={isOpen} onClose={closeModal}>
        <div className='text-center text-lg mb-10'>
          Are you sure you want to delete the workspace{' '}
          <span className='text-accent font-bold'>
            {currentWorkspace?.title}
          </span>
          ?
        </div>

        <div className='flex justify-center space-x-4'>
          <Button accent onClick={handleConfirm}>
            Delete
          </Button>
          <Button variant='text' onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  )
}
