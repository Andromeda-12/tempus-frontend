interface CoverProps {
  cover: string
}

export const Cover = ({ cover }: CoverProps) => {
  if (cover)
    return (
      <div
        className='h-52 bg-cover bg-center'
        style={{ backgroundImage: `url(${cover})` }}
      ></div>
    )

  return (
    <div className='h-52 flex justify-center items-center text-lg text-gray-500/40 border-b border-b-background-dark'>
      No cover
    </div>
  )
}
