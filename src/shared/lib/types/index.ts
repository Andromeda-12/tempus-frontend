import { ReactNode } from 'react'

export interface PropsWithClassName {
  className?: string
}

export interface PropsWithChildren extends PropsWithClassName {
  children: ReactNode
}
