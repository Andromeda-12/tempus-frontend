import { useRouter } from 'next/router'

const SettingsRedirectPage = () => {
  const router = useRouter()
  router.push('/settings/general')
}

export default SettingsRedirectPage
