import Image from 'next/image'
export default function Icon() {
    return(
        <div aria-label='1:1 icon'className="relative w-[80px] h-[80px]">
        <Image
        alt='Message Image'
        src="/picture.jpg"
        className='rounded-full shadow-lg shrink-0 shadow-indigo-500/50'
        layout="fill"
        objectFit='cover'
        objectPosition='center'
        />
    </div>
    )
}