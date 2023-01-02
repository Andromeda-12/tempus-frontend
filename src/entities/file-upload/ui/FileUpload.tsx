import { useRef, useState } from 'react'
import { DropZone } from './DropZone'
import { FileList } from './FileList'

export const FileUpload = () => {
  const [files, setFiles] = useState<File[]>([])
  const test = (a) => {
    console.log(a)
    setFiles(a)
  }
  return (
    <div className='w-[430px] p-7 bg-white rounded'>
      <h3 className='text-violet-500 text-2xl font-semibold text-center'>
        File Uploader
      </h3>

      <DropZone onFilesDrop={test} />

      <FileList files={files} />

      {/* progress are */}
      {/* <div>
        <li className='row list-none bg-violet-400/30 mb-2.5 px-4 py-5 rounded flex items-center justify-between'>
          <div className='file-icon text-3xl text-violet-500 bg-violet-500'>
            i
          </div>
          <div className='content w-full ml-4'>
            <div className='details flex items-center justify-between'>
              <span className='name text-sm'>image.png</span>
              <span className='percent text-sm'>50%</span>
            </div>
            <div className='progress-bar h-1.5 w-full bg-white mb-1 rounded-full'>
              <div className='progress w-1/2 h-full bg-violet-500 rounded-l-full'></div>
            </div>
          </div>
        </li>
      </div> */}
    </div>
  )
}
