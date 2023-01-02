import clsx from 'clsx'

interface FileListProps {
  files: File[]
}

export const FileList = ({ files }: FileListProps) => (
  <ul
    className={clsx('max-h-[230px]  pr-1', {
      'scrollbar overflow-y-scroll': files.length > 3
    })}
  >
    {files.map((file: File) => (
      <li
        key={`${file.name}_${file.lastModified}`}
        className='bg-violet-400 mb-2.5 px-4 py-5 rounded flex items-center justify-between'
      >
        <div className='flex'>
          <div className='file-icon text-2xl text-violet-500 bg-violet-500'>
            i
          </div>
          <div className='flex flex-col ml-4'>
            <span className='text-base'>{file.name}</span>
            <span className='text-xs text-start'>
              {Math.round(file.size / 1000)}KB
            </span>
          </div>
        </div>
        <div className='check-icon bg-violet-500'>i</div>
      </li>
    ))}
  </ul>
)
