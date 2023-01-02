import clsx from 'clsx'
import { PropsWithChildren } from '@/shared/lib'

interface ContentContainer extends PropsWithChildren {
  py?: boolean
}

export const ContentContainer = ({
  children,
  className,
  py = true
}: ContentContainer) => (
  <div
    className={clsx(className, 'px-2 sm:px-3 md:px-3 lg:px-7 ', {
      'py-3': py
    })}
  >
    {children}
  </div>
)
