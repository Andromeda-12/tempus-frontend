import { Signup } from '@/pages/sign-up'
import { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { AuthLayout } from '@/widgets/layouts'

const SignupPage: NextPageWithLayout = () => {
  return <Signup />
}

SignupPage.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>

export default SignupPage
