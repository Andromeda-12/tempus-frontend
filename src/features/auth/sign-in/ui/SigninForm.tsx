import Link from 'next/link'
import { Button, Card, Input } from '@/shared/ui'
import { OutlinedInput } from '@/shared/ui/Input/OutlinedInput'
import { StandardInput } from '@/shared/ui/Input/StandardInput'
import { FormControl } from '@/shared/ui/Input/FormControl'

export const SigninForm = () => {
  return (
    <Card className='px-7 pb-10 pt-7 max-w-sm w-full'>
      <h3 className='text-center text-color-light font-medium text-2xl mb-5'>
        Sign in
      </h3>
      <form>
        <div className='flex flex-col'>
          <FormControl name='email' placeholder='Email' />

          <FormControl name='password' placeholder='Password' />

          <div className='mb-2 mt-4'>
            <Button accent className='w-full'>
              Sign in
            </Button>
          </div>

          <div className='text-center text-color-light'>
            <span className='text-sm'>
              Don&apos;t have an account?{' '}
              <Link href='signup'>
                <span className='hover:text-primary cursor-pointer duration-300'>
                  Sign up
                </span>
              </Link>
            </span>
          </div>
        </div>
      </form>
    </Card>
  )
}
