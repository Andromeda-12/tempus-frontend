import Link from 'next/link'
import { Button, Card, Input } from '@/shared/ui'
import { FormControl } from '@/shared/ui/Input/FormControl'

export const SignupForm = () => {
  return (
    <Card className='px-5 sm:px-8 pb-10 pt-7 max-w-sm w-full'>
      <h3 className='text-center text-color-light  font-medium text-2xl mb-5'>
        Sign up
      </h3>
      
      <form>
        <div className='flex flex-col'>
          <div className='flex gap-5'>
            <FormControl label='First Name' placeholder='First name' />
            <FormControl label='Last Name' placeholder='Last name' />
          </div>

          <div>
            <FormControl label='Email' placeholder='Email' />
          </div>

          <div>
            <FormControl label='Password' placeholder='Password' />
          </div>

          <div className='mb-2 mt-5'>
            <Button accent className='w-full'>
              Sign up
            </Button>
          </div>

          <div className='text-center text-color-light '>
            <span>
              Already have an account?{' '}
              <Link href='signin'>
                <span className='hover:text-primary cursor-pointer duration-300'>
                  Sign in
                </span>
              </Link>
            </span>
          </div>
        </div>
      </form>
    </Card>
  )
}
