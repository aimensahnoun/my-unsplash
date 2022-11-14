import { useAtom } from "jotai"
import { FunctionComponent, useState } from "react"
import { imagesAtom } from "../utils/global-state"

type Props = {
    setIsModalOpen: (value: boolean) => void
}

const NewImageModal: FunctionComponent<Props> = ({
    setIsModalOpen
}) => {
    // Local State
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    // Global State
    const [images, setImages] = useAtom(imagesAtom)

    const handleSubmit = () => {
        if (isDisabbled()) return
        setImages([{ name, url }, ...images])
        setIsModalOpen(false)

    }

    const isDisabbled = () => { return name === '' || url === '' || url.includes('images.unsplash.com') === false }
    return <div className="z-30 w-screen h-screen inset-0 fixed bg-black/40 flex items-center justify-center" >
        <div onClick={(e) => {
            e.stopPropagation()
        }} className="bg-white rounded-lg w-[40rem] p-2 flex flex-col gap-y-4" >
            <div className="flex w-full items-center justify-between">
                <span className="font-bold text-lg">Add new Image</span>
                <span onClick={() => {
                    setIsModalOpen(false)
                }} className="mr-2 cursor-pointer">X</span>
            </div>
            <input onChange={(e) => {
                setUrl(e.target.value)
            }} className="w-[25rem] bg-gray-200 rounded-lg p-2" placeholder="Image url" />

            <input onChange={(e) => {
                setName(e.target.value)
            }} className="w-[25rem] bg-gray-200 rounded-lg p-2" placeholder="Image Name" />
            <button disabled={isDisabbled()} onClick={handleSubmit} className={`sel-center p-2 rounded-lg bg-green-500 text-white ${isDisabbled() ? "cursor-not-allowed bg-gray-200" : ""} `}>Submit</button>
        </div>
    </div>
}

export default NewImageModal