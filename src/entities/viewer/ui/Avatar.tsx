import clsx from 'clsx'

interface AvatarProps {
  className?: string
  size?: string
}

export const Avatar = ({ className, size = '8' }: AvatarProps) => {
  return (
    <div className={clsx(`w-${size} h-${size}`, className)}>
      <button
        className={clsx(
          'rounded-full overflow-hidden focus:ring-4 ring-primary/30'
        )}
      >
        <img
          className={`w-${size} h-${size}`}
          src='https://pictures.telegram-store.com/channels/anime-media/38830_2021_11_20_5_.jpg'
          alt='avatar'
        />
      </button>
    </div>
  )
}
