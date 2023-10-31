import { Plus } from '@phosphor-icons/react'

const ImageUploader = ({ onUpload, setFiles, files }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setFiles(prev => [...prev, file])
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const uniqueFileName =  file.name; 
        onUpload(reader.result,file)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className=" relative flex justify-center items-center border border-gray-300 w-[270px] h-[270px] text-2xl cursor-pointer p-4 rounded-xl mx-auto">
      <div className="">
        <div className="text-center mx-auto flex justify-center mb-6">
          <Plus size={32} />
        </div>
        <div className="text-center text-zinc-500 text-xl">
          Add up to 5 images of your item.
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  )
}

export default ImageUploader
