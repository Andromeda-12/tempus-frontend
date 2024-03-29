import clsx from 'clsx'
import { useState } from 'react'
import { useUnit } from 'effector-react'
import { FilterToggleGroup, Icon, Popover } from '@/shared/ui'
import { FilterValue, values, workspaceFilter } from '../model'

interface WorkspaceFilterProps {
  className?: string
}

export const WorkspaceFilter = ({ className }: WorkspaceFilterProps) => {
  const currentFilter = useUnit(workspaceFilter.currentValue)
  const changeValue = useUnit(workspaceFilter.changeValue)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover
      onOpenChange={setIsOpen}
      sideOffset={8}
      className={clsx(className, 'z-50 w-44 -right-10')}
      trigger={<FilterTrigger isOpen={isOpen} />}
    >
      <FilterToggleGroup
        currentValue={currentFilter}
        onValueChange={(value) => changeValue(value as FilterValue)}
        values={values}
      />
    </Popover>
  )
}

const FilterTrigger = ({ isOpen }: { isOpen: boolean }) => {
  const currentFilter = useUnit(workspaceFilter.currentValue)

  return (
    <div className='flex items-center space-x-3 text-sm'>
      <div className='select-none'>Filter:</div>
      <div className='select-none cursor-pointer flex items-center text-color-light/60 dark:text-color-dark/50'>
        {currentFilter === null && 'none'}
        {currentFilter}
        <Icon
          className={clsx(
            'ml-1 relative top-[1px] duration-100',
            isOpen && '-rotate-180'
          )}
          size='xs'
          name='chevronDown'
        />
      </div>
    </div>
  )
}
