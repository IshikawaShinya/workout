"use client"
import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useTimeoutFn } from 'react-use'
import clickCount from './components/ClickCount' 
import inputUserName from './components/InputUserName'
import sendMoney from './components/SendMoney'
import manageForm from './components/ManageForm'
import memberForm from './components/MemberForm'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { resolve } from 'path'
import PushChangeImage from './components/PushChangeImage'

// Stateの配列への追加
let nextId = 0;
const navigation = {
  grid:{ href: '/pages/Grid'},
  tailwindcssPlayground:{ href: '/pages/tailwindcssPlayground' },
  Board: {href: '/pages/Board'},
}


export default function Home() {
  let [isShowing, setIsShowing] = useState(true)
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500)
  const [count,setCount] =useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const router = useRouter()
  const [asyncImage, setAsyncImage] = useState("./nodejs_original_wordmark_logo_icon.png")

  function Panel(props: {title: string, children: string,isActive: boolean,onshow: any}){
    return(
      <section className='panel rounded border-red'>
        <h5>{props.title}</h5>
        {props.isActive ? 
        (<p>{props.children}</p>)
      :(
        <button onClick = {props.onshow}>
          show
        </button>
      )
      }
      </section>
    )
  }
  
  // Stateの配列への追加
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([{id:0, name:''}]);
  return (
    <div className='flex flex-col items-center'>
      {/* //////////////// */}
      <div className='p-4'></div>
      <p className='p-2 text-white bg-black'>掲示板サイト</p>
      <div className=''>
        <button
        className='bg-white text-black'
        onClick={(e)=>router.push(navigation.Board.href)}
        >
          リンク
        </button>
      </div>
      <div className='p-4'></div>
      <p className='p-2 text-white bg-black'>学習項目:async/awaitとコンポーネントへのstateの渡し方</p>
      <div>
        <PushChangeImage asyncImage={asyncImage} setAsyncImage={setAsyncImage}/>
      </div>
      {/* //////////////// */}
      <div className='p-4'></div>
      <p className='p-2 text-white bg-black'>Grid</p>
      <button
      className='bg-white text-black'
      onClick = {(e) => router.push(navigation.grid.href)}
      >
        リンク
      </button>
      {/* //////////////// */}
      <div className='p-4'></div>
      <p className='p-2 text-white bg-black'>tailwindcssPlayground</p>
      <button
      className='bg-white text-black'
      onClick={(e)=>router.push(navigation.tailwindcssPlayground.href)}
      >
        tailwindcssPlayground
      </button>
      {/* ////////// */}
      <p className='p-2  text-white bg-black'>管理可能なフォーム</p>
      <div>
        {manageForm({})}
      </div>
      {/*  */}
      {/* Stateの配列への追加 */}
      <div className='rounded border-white w-50'>
        <p className='p-4 text-white bg-black'>Stateの配列への追加</p>
        <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        >
        </input>
        <button
        onClick={()=>{
          setArtists(
            [...artists,
            {id:nextId++,name:name}]
          )
        }}
        >Add</button>
        <ul>
          {artists.map((artist)=>(
            <li key={artist.id}>{artist.name}
            <button
            className='text-red-500'
            onClick={()=>{
              setArtists(
                artists.filter((a)=>(a.id!==artist.id))
                )
              }}
              >
              削除
            </button>
          </li>
          ))}
        </ul>

      </div>

      {/* manage State */}
      {/*  */}
      <div>
        <p className='p-8'>Almaty, Kazakhstan</p>
        <Panel 
        title='About'
        isActive={activeIndex === 0}
        onshow={()=>setActiveIndex(0)}
        >
        With a population of about 2 million, Almaty is Kazakhstan&apos;s largest city. 
        </Panel>
        <Panel 
        title='Etymology'
        isActive={activeIndex === 1}
        onshow={()=>setActiveIndex(1)}
        >
        The name comes from алма, the Kazakh word for &quot;apple&quot;
        </Panel>
      </div>
      {/*  */}
      {/*  */}
      <div className="flex p-6 bg-sky-600">
        <div className='flex-none w-32'>
          <img className="h-12 w-32" src="/next.svg" alt="ChitChat Logo"></img>
        </div>
        <div className='shrink-0 w-32'>
          2
        </div>
        <div className='flex-none w-32'>
          3
        </div>
      </div>
      <div className='bg-white text-black'>
        <p>
        Today I spent most of the day researching ways to take advantage of the fact that bottles can be returned for 10 cents in Michigan, but only 5 cents here.
        <span className='inline-flex items-baseline'>
          <img src="/next.svg" alt="ChitChat Logo" className='self-center w-5 rounded-full mx-1'></img>
          <span>Krmar </span>
        </span>
        keeps telling me there is no way to make it work, that he has run the numbers on every possible approach, but I just have to believe there&apos;s a way to make it work, there&apos;s simply too much opportunity here.
        </p>
      </div>
      <div className='flex mx-auto'>
        <img className="container mx-auto bg-white flex-center h-12 w-32" src="/next.svg" alt="ChitChat Logo"></img>
        <img className="container mx-auto bg-sky-600 flex-center h-12 w-32" src="/next.svg" alt="ChitChat Logo"></img>
        <img className="container mx-auto bg-orange-400 flex-center h-12 w-32" src="/next.svg" alt="ChitChat Logo"></img>
        <img className="container mx-auto bg-red-400 flex-center h-12 w-32" src="/next.svg" alt="ChitChat Logo"></img>
        <img className="container mx-auto bg-orange-400 flex-center h-12 w-32" src="/next.svg" alt="ChitChat Logo"></img>
        <img className="container mx-auto bg-orange-400 flex-center h-12 w-32" src="/next.svg" alt="ChitChat Logo"></img>
        <img className="container mx-auto bg-orange-400 flex-center h-12 w-32" src="/next.svg" alt="ChitChat Logo"></img>
        <img className="container mx-auto bg-orange-400 flex-center h-12 w-32" src="/next.svg" alt="ChitChat Logo"></img>
      </div>
      <div className='ltr'>
        <div>１年</div><div className='ms-8 me-8'>石川</div><div>しんや</div>
      </div>
      <div className=''>
          <img className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0' src='/picture' alt='my face'></img>
      </div>
      <div className="flex flex-col items-center py-16">
      <div className="h-32 w-32">
        <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <div className="h-full w-full rounded-md bg-white shadow-lg" />
        </Transition>
      </div>

      <button
        onClick={() => {
          setIsShowing(false)
          resetIsShowing()
        }}
        className="backface-visibility-hidden mt-8 flex transform items-center rounded-full bg-black/20 px-3 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-black/30 focus:outline-none active:bg-black/40"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 opacity-70">
          <path
            d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <span className="ml-3">Click to transition</span>
      </button>
      {/*  */}
      {/* クリックカウント */}
      <div>
        {clickCount({})}
      </div>
      {/* 名前入力フォーム */}
      {/* 入力できる */}
      {/* 変化があるたびに変更の値をstateに加える */}
      <div>
        {inputUserName({})}
      </div>
    </div>
  </div>
  )
}
