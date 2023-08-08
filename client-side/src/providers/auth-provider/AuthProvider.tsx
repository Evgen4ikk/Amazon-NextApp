import {FC, PropsWithChildren, useEffect} from 'react';
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import Cookies from "js-cookie";
import { TypeComponentAuthFields } from './auth-page.types'
import { useAuth } from '@/src/hooks/useAuth'
import { useActions } from '@/src/hooks/useActions'
import { getAccessToken } from '@/src/services/auth/auth.helper'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {ssr: false})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = (
  {
    Component: {isOnlyUser},
    children
  }) => {
  const {user} = useAuth()
  const {checkAuth, logout} = useActions()

  const {pathname} = useRouter()

  useEffect(() => {
    const accessToken = getAccessToken()
    if (accessToken) checkAuth()
  }, [])

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken')
    if (!refreshToken && user) logout()
  }, [pathname])

  return isOnlyUser ? (
    <DynamicCheckRole Component={{isOnlyUser}} children={children}/>
  ) : (
    <>{children}</>
  )
}

export default AuthProvider