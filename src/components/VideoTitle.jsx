import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[19%] px-20 absolute text-white'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-2/5'>{overview}</p>
        <button className='bg-white text-black p-3 px-10 text-xl rounded-lg hover:bg-opacity-80'>Play</button>
        <button className='bg-gray-500 text-white mx-2 p-3 px-10 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-40'>More Info</button>
    </div>
  )
}

export default VideoTitle