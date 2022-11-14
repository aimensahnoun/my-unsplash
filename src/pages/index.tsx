// NextJS import
import Head from 'next/head'
import dynamic from 'next/dynamic'
// React import
import { useState } from 'react'

//Dependencies import
import { useAtom } from 'jotai'

// Components import
const PageLayout = dynamic(() => import('../components/page-gallery'), { ssr: false })

// Utils import
import { imagesAtom, searchQueryAtom } from '../utils/global-state'
import NewImageModal from '../components/add-image'

export default function Home() {
  // Local State
  const [isModalOpen, setIsModalOpen] = useState(false)
  // Global State
  const [images] = useAtom(imagesAtom)
  const [_query, setQuery] = useAtom(searchQueryAtom)

  return (
    <div className='w-screen h-screen p-6'>
      <Head>
        <title>My Unsplash</title>
      </Head>
      {/* Navigation */}
      <nav className='w-full items-center justify-between flex'>

        <div className='flex items-center gap-x-4'>
          <span className='font-bold text-xl'>My Unsplash</span>
          <input onChange={(e) => {
            setQuery(e.target.value)
          }} className='w-50 rounded-lg border-[1px] p-1 border-black ' placeholder='Search by name' />
        </div>
        <button onClick={() => {
          setIsModalOpen(true)
        }} className='p-2 bg-green-500 rounded-lg text-white shadow-green-400/30 shadow-lg'>New Image</button>
      </nav>
      {/* Main  */}
      <PageLayout />
      {
        isModalOpen && <NewImageModal setIsModalOpen={setIsModalOpen} />
      }
      <footer className='flex mt-auto  justify-center '>
        <span className='text-center'>Made with ❤️ by <a target="_blank" href='https://github.com/aimensahnoun' rel="noreferrer">Aimen Sahnoun</a></span>
      </footer>
    </div>
  )
}