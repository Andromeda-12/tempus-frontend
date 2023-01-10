import { Workspace } from '@/pages/workspace'
import type { NextPage } from 'next'
import { Button } from '@/shared/ui'

const WorkspacePage: NextPage = () => {
  // return <Workspace />
  return (
    <div className='mt-10'>
      <div className='grid grid-cols-7 grid-rows-6 w-full gap-1'>
        <Button size='xs'>Text button</Button>
        <Button startIcon='eye' size='xs'>
          Text button
        </Button>
        <Button size='xs' dense>
          Text button
        </Button>
        <Button size='xs' accent>
          Text button
        </Button>
        <Button size='xs' variant='outline'>
          Text button
        </Button>
        <Button size='xs' variant='outline' accent>
          Text button
        </Button>
        <Button size='xs' variant='text'>
          Text button
        </Button>

        <Button size='sm'>Text button</Button>
        <Button startIcon='eye' size='sm'>
          Text button
        </Button>
        <Button size='sm' dense>
          Text button
        </Button>
        <Button size='sm' accent>
          Text button
        </Button>
        <Button size='sm' variant='outline'>
          Text button
        </Button>
        <Button size='sm' variant='outline' accent>
          Text button
        </Button>
        <Button size='sm' variant='text'>
          Text button
        </Button>

        <Button>Text button</Button>
        <Button startIcon='eye'>Text button</Button>
        <Button dense>Text button</Button>
        <Button accent>Text button</Button>
        <Button variant='outline'>Text button</Button>
        <Button variant='outline' accent>
          Text button
        </Button>
        <Button variant='text'>Text button</Button>

        <Button size='lg'>Text button</Button>
        <Button startIcon='eye' size='lg'>
          Text button
        </Button>
        <Button size='lg' dense>
          Text button
        </Button>
        <Button size='lg' accent>
          Text button
        </Button>
        <Button size='lg' variant='outline'>
          Text button
        </Button>
        <Button size='lg' variant='outline' accent>
          Text button
        </Button>
        <Button size='lg' variant='text'>
          Text button
        </Button>

        <Button size='xl'>Text button</Button>
        <Button startIcon='eye' size='xl'>
          Text button
        </Button>
        <Button size='xl' dense>
          Text button
        </Button>
        <Button size='xl' accent>
          Text button
        </Button>
        <Button size='xl' variant='outline'>
          Text button
        </Button>
        <Button size='xl' variant='outline' accent>
          Text button
        </Button>
        <Button size='xl' variant='text'>
          Text button
        </Button>
      </div>
    </div>
  )
}

export default WorkspacePage
