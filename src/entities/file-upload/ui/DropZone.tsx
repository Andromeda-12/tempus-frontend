import { DropZone as DropZoneContainer } from '@/shared/lib'
import clsx from 'clsx'
import { useState } from 'react'

interface DropZoneProps {
  onFilesDrop?: (files: File[]) => void
}

export const DropZone = ({ onFilesDrop }: DropZoneProps) => {
  const [isDragActive, setIsDragActive] = useState(false)

  const onDragStateChange = (dragActive: boolean) => {
    setIsDragActive(dragActive)
  }

  return (
    <DropZoneContainer
      onDragStateChange={onDragStateChange}
      onFilesDrop={onFilesDrop}
      className={clsx(
        'h-[167px] my-7 cursor-pointer text-violet-500 border-2 border-violet-500 rounded flex items-center justify-center flex-col',
        isDragActive && 'border-dashed'
      )}
    >
      <div className='upload-icon text-3xl bg-violet-500'>icon</div>
      <p className='text-base mt-4'>Browse File to Upload</p>
    </DropZoneContainer>
  )
}
