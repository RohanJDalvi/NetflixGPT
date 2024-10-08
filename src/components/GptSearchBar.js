import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../utils/languaugeConstants'
import openai from '../utils/openai';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    const handleGptSearch = async() =>{
        console.log(searchText.current.value)
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: searchText.current.value }],
          model: 'gpt-3.5-turbo',
        });
        console.log(gptResults.choices)
    }

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type="text" className='p-4 m-4 col-span-10 rounded-lg' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='py-2 px-4 col-span-2 bg-red-700 text-white rounded-lg' onClick={handleGptSearch}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
