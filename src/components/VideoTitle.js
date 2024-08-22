import React from 'react'

const VideoTitle = ({original_title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{original_title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-red-500 text-white p-4 px-12 text-lg rounded-md hover:bg-gray-400'>Play</button>
        <button className='m-2 bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-md'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
