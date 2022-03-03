import React from 'react'
import CollectionCard from './collectionCard'

const Collection = ({ NFTdata = null, setActiveID =null}) => {
  return (
        <>
          <div className='scroller flex overflow-scroll border-b border-gray-600 py-2'>
            {
              NFTdata.map((nft, index) => (
                <CollectionCard setActiveID={setActiveID} key={nft.token_id} index={index} id={nft.token_id} name={nft.name} traits={nft.traits} image={nft.image_url} />
              ))
            }
          </div>
        </>
  )
}

export default Collection