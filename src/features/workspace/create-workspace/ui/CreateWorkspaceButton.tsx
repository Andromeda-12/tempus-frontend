import { useState } from 'react'
import { AddButton } from '@/shared/ui'
import { CreateWorkspaceModal } from './CreateWorkspaceModal'

interface CreateWorkspaceButtonProps {
  className?: string
}

export const CreateWorkspaceButton = ({
  className
}: CreateWorkspaceButtonProps) => {
  const [isShowModal, setIsShowModal] = useState(false)

  const handleOpenModal = () => {
    setIsShowModal(true)
  }

  const handleCloseModal = () => {
    setIsShowModal(false)
  }

  return (
    <>
      <CreateWorkspaceModal isOpen={isShowModal} onClose={handleCloseModal} />
      <AddButton text='Workspaces' onClick={handleOpenModal} />
    </>
  )
}
