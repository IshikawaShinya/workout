import React from 'react'
import Icon from '../../components/Icon'
import Image from 'next/image'
export default function TailwindcssPlayground() {
    return(
        <div>
            <h1 className='text-2xl font-bold'>TailwindcssPlayground</h1>

            <h2 className='text-xl font-bold'>⚪︎aspect-ratio</h2>
            <h5 className='text-base font-bold'>アイコンコンポーネント</h5>
            {Icon()}
            <h5 className='text-base font-bold'>動画は16:9を使用する。</h5>
            <iframe className="w-full aspect-[16/9] ..." src="https://www.youtube.com/watch?v=e3IPNAg9IVE"></iframe>
        </div>
    )
}