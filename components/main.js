import Image from 'next/image'
import React,{useEffect, useState} from 'react'
import instagram from "../public/owner/instagram.png"
import twitter from "../public/owner/twitter.png"
import more from "../public/owner/more.png"
import check from "../public/owner/check.png"

const Main = ({activeID= null, NFTdata=null}) => {
    const [activeNFT, setActiveNFT] = useState(NFTdata[activeID])
    useEffect(() => {
      return setActiveNFT(NFTdata[activeID])
    }, [activeID, NFTdata])
    
  return (
    <div>
        <div className="p-2 flex items-start border-b border-gray-600">
            <img src={activeNFT.image_url} alt="" quality={100} style={{ 'minWidth': "400px", 'minHeight': "400px", 'maxWidth': "400px", 'maxHeight': "400px" }} className="rounded-3xl"></img>
            <div className="ml-8 flex flex-col justify-between items-start">
                <p className="text-white text-6xl font-bold">
                {activeNFT.name} 
                </p>
                <p className="font-semibold text-6xl text-gray-500">#{activeNFT.token_id}</p>
                <div className="flex items-end justify-between mt-56 w-full">
                    <div className="flex items-start justify-start">
                      <div className="bg-gradient-to-r from-pink-400 to-purple-400 w-12 h-12 rounded-full"></div>
                      <div className='w-auto ml-2'>
                        <p className="text-white">{activeNFT.owner.address}</p>
                        <p className="text-white flex items-center">Owned by <span className="text-blue-400">@SambhavKaushik </span><Image src={check} alt="" width={20} height={20} className=''></Image></p>
                      </div>
                    </div>
                    <div className="flex ml-60">
                      <button className='w-12 h-12 mx-2 rounded-full border border-white flex items-center justify-center'>
                        <Image src={instagram} alt="" width={30} height={30} className='mx-auto my-auto'></Image>
                      </button>
                      <button className='w-12 h-12 mx-2 rounded-full border border-white flex items-center justify-center'>
                        <Image src={twitter} alt="" width={30} height={30} className='mx-auto my-auto'></Image>
                      </button>
                      <button className='w-12 h-12 mx-2 rounded-full border border-white flex items-center justify-center'>
                        <Image src={more} alt="" width={30} height={30} className='mx-auto my-auto'></Image>
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main