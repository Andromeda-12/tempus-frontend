import { useState } from 'react'
import AvatarEditor from './edit'
import image from 'C:UsersAndromedaPicturesСнимок экрана 2022-11-12 155936.png'
import { DropZone } from './DropZone'
// export { FileUpload } from './FileUpload'
export const UploadAvatar = () => {
  const [src, setSrc] = useState(null)
  const [preview, setPreview] = useState(null)

  const onClose = () => {
    setPreview(null)
  }

  const onCrop = (view) => setPreview(view)

  return (
    <div>
      <DropZone onFilesDrop={(a) => setSrc(a[0])} />
      <AvatarEditor
        image={src}
        width={400}
        height={300}
        onClose={onClose}
        onCrop={onCrop}
        src={src}
      />

      <img src={preview} alt='a' />
    </div>
  )
}
