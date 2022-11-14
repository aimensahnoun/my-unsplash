import { useAtom } from "jotai"
import { imagesAtom, searchQueryAtom } from "../utils/global-state"

const PageLayout = () => {
    const [images, setImages] = useAtom(imagesAtom)
    const [searchQuery] = useAtom(searchQueryAtom)
    return <main className='mt-4 w-full overflow-scroll columns-3 gap-4 '>
        {
            images.reverse().filter((image) => image.name.toLowerCase().includes(searchQuery.toLowerCase())).map((image, index) => {
                // eslint-disable-next-line @next/next/no-img-element
                return <div key={index} className="w-fit h-fit relative">
                    <img src={image.url} alt={image.name} className="rounded-lg aspect-auto max-w-[25rem] my-1" />
                    <div className="opacity-0 transition-all duration-300 hover:opacity-100  absolute z-10 bg-black/25 flex items-end justify-between inset-0 rounded-lg p-2">
                        <span className="text-white p-2">{image.name}</span>
                        <button onClick={() => {
                            setImages(images.filter((_, i) => i !== index))
                        }} className="p-2 bg-red-500 rounded-lg text-white">Delete</button>
                    </div>
                </div>
            })
        }

    </main>


}

export default PageLayout