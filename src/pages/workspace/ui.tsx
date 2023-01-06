import { Button, Card, ContentContainer } from '@/shared/ui'
import { WorkspaceList } from '@/entities/workspace'

const workspaces = {
  id: 1,
  cover: 'photo.jpg',
  title: 'My first workspace',
  projectsCount: 1,
  own: true
}

export const Workspace = ({}) => {
  return (
    <div className='h-screen flex flex-col py-5 bg-cover bg-center relative'>

      <div className='h-full !bg-neutral/0'>
        <div
          className='h-44 md:h-64 bg-cover bg-center rounded-xl'
          style={{ backgroundImage: `url(/${workspaces.cover})` }}
        ></div>
        <ContentContainer className='mt-1'>
          <h2 className='text-xl '>{workspaces.title}</h2>

          <div className='mb-7 mt-2 text-xs'>8 members</div>

          <div className='grid gap-7 grid-cols-[repeat(auto-fill,minmax(272px,1fr))]'>
            <Card>
              <ContentContainer>
                <div>Project 1</div>
                <div className='text-sm mt-1 opacity-60'>5 assigned to you</div>
                <div className='text-xs mt-1 opacity-60'>21 active tasks</div>
              </ContentContainer>
            </Card>

            <Card>
              <ContentContainer>
                <div>Project 1 (21 tasks)</div>
                <div className='text-sm mt-1 opacity-60'>5 assigned to you</div>
              </ContentContainer>
            </Card>

            <Card>
              <ContentContainer>
                <div>Project 1</div>
                <div className='text-sm mt-1 opacity-60'>5 assigned to you</div>
                <div className='text-xs mt-1 opacity-60'>21 active tasks</div>
              </ContentContainer>
            </Card>

            <Card>
              <ContentContainer>
                <div>Project 1</div>
                <div className='text-sm mt-1 opacity-60'>5 assigned to you</div>
                <div className='text-xs mt-1 opacity-60'>21 active tasks</div>
              </ContentContainer>
            </Card>

            <Card>
              <ContentContainer>
                <div>Project 1</div>
                <div className='text-sm mt-1 opacity-60'>5 assigned to you</div>
                <div className='text-xs mt-1 opacity-60'>21 active tasks</div>
              </ContentContainer>
            </Card>
          </div>
        </ContentContainer>
      </div>
    </div>
  )
}
