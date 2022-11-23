import clsx from 'clsx'

interface AvatarProps {
  className?: string
}

export const Avatar = ({ className }: AvatarProps) => {
  return (
    <button
      className={clsx(
        'h-8 w-8 border rounded-full focus:ring-4 ring-primary/30 ring-offset-4',
        className
      )}
    ></button>
  )
}
