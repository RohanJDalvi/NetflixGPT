import React from 'react'
import { BGIMG } from '../utils/constants'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
              <img src={BGIMG} alt="logo" />
        </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
