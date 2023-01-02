import { Dashboard } from '@/pages/dashboard'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  // useEffect(() => {
  //   router.push('components-preview')
  // }, [router])

  return <Dashboard />
}

export default Home
