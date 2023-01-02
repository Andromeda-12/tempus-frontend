import clsx from 'clsx'

interface IconProps {
  // ref: ReactRef
  name: string
  size?: 'sm' | 'md' | 'xl'
  className?: string
}

const sizeMap = {
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  xl: 'h-8 w-8'
}

export const Icon = ({ name, size = 'md', className, ...props }: IconProps) => {
  const fileName = 'iconsSprite.svg'

  return (
    <svg
      //   ref={ref}
      focusable='false'
      aria-hidden={true}
      className={clsx(
        'select-none fill-current inline-block text-inherit',
        sizeMap[size],
        className
      )}
      {...props}
    >
      <use xlinkHref={`${fileName}#${name}`} />
    </svg>
  )
}
