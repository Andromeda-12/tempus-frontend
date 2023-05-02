import { useForm } from 'react-hook-form'
import { useUnit } from 'effector-react'
import { Button, FormField, Modal } from '@/shared/ui'
import { UpdateTaskDto } from '@/shared/api'
import { updateTask, updateTaskModal } from '../model'

interface IFormData {
  taskTitle: string
  taskDescription: string
}

const defaultValues = {
  taskTitle: '',
  taskDescription: ''
}

export const UpdateTaskModal = () => {
  const isOpen = useUnit(updateTaskModal.$isOpen)
  const closeModal = useUnit(updateTaskModal.closeModal)
  const updateTaskFn = useUnit(updateTask)

  const { handleSubmit, control, reset } = useForm<IFormData>({
    defaultValues
  })

  const sendFormData = (formData: IFormData) => {
    const updateTaskDto: UpdateTaskDto = {
      title: formData.taskTitle,
      description: formData.taskDescription
    }

    updateTaskFn(updateTaskDto)

    handleCloseModal()
  }

  const handleCloseModal = () => {
    reset()
    closeModal()
  }

  return (
    <Modal
      className='w-full max-w-xl'
      title='Update task'
      isOpen={isOpen}
      onClose={handleCloseModal}
    >
      <form onSubmit={handleSubmit(sendFormData)} className='space-y-4'>
        <FormField
          placeholder='Title'
          name='taskTitle'
          control={control}
          rules={{
            required: 'Title is required'
          }}
        />

        <FormField
          placeholder='Description'
          name='taskDescription'
          control={control}
        />

        <div className='flex justify-end'>
          <div className='sm:w-2/5 flex space-x-3'>
            <Button
              className='w-full'
              variant='text'
              type='button'
              onClick={handleCloseModal}
            >
              Cancel
            </Button>

            <Button className='w-full' accent>
              Update
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  )
}
