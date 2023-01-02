// import { Signup } from '@/pages/signup'
import { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { AuthLayout } from '@/widgets/layouts'
import { Signip } from '@/pages/sign-in'

const SigninPage: NextPageWithLayout = () => {
  return <Signip />
}

SigninPage.getLayout = (page: ReactElement) => (
  <AuthLayout>{page}</AuthLayout>
)

export default SigninPage
