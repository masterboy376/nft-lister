import React from 'react'
import Image from 'next/image'
import eth from '../public/eth.png'

const CollectionCard = ({ id=null, name=null, traits=[{value:null}], image=null, setActiveID=null, index=null}) => {
    return (
        <div onClick={()=>{setActiveID(index)}} style={{ 'minWidth': "300px", 'minHeight': "450px", 'maxWidth': "300px", 'maxHeight': "450px" }} className='bg-gray-800 mx-2 block cursor-pointer overflow-hidden rounded-3xl'>
            <img src={image} alt="" quality={100} style={{ 'minWidth': "300px", 'minHeight': "300px", 'maxWidth': "300px", 'maxHeight': "300px" }} className=""></img>
            <div className="mt-4">
                <div className='text-white text-base font-bold ml-2'>
                    {name}
                    <div className="text-gray-500 font-semibold">
                        #{id + 1}
                    </div>
                </div>
                <div className="flex items-center justify-start text-white font-semibold text-base ml-2 mt-2">
                    <Image src={eth} alt="" quality={100} width={14} height={20} className=''></Image>
                    <span className='ml-1'>{traits[0]?.value}</span>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard