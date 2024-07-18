'use client'
import { useState } from 'react'
import { useRouter } from "next/navigation"

const navigation ={
    // register:{href:'/pages/register'},
    loginsuccess:{href:'./features/homeLikeCorpratePage'},
    signup:{href:'./features/signup'}
    // passwordForgot:{href:'/pages/passwordForgot'}
  }

export default function Login() {
    const [message, setMessage] = useState('')
    const [mail,setMail] = useState('')
    const [password,setPassword] = useState('')
    const [alertMessage,setAlertMessage] = useState<string>('')
    const router = useRouter();
  
    // console.log(router)

    const pushLoginButton = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const body = {
          email:mail,
          password:password
        }
        fetch('http://localhost:8000/signin/',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
        //   setMessage(data.res)
            console.log(data)
            // setAlertMessage(data)
            switch (String(data.res)){
                case 'Email or Password is empty':
                setAlertMessage('メールアドレスとパスワードを入力してください')
                break
                case "login success":
                router.push(navigation.loginsuccess.href)
                console.log('ログイン成功')
                break
                case "wrong email or password":
                setAlertMessage('メールアドレスかパスワードが異なります')
                break
                default :
                //   setAlertMessage('読み込み完了')
                break
            }
        }
        )
      }

      const get =()=>{
        fetch('http://localhost:8000/users/',{
            method:"GET",
            headers:{
              "Content-Type":"application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        // <div className="h-full bg-white">
        // </div>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    // type="email"
                    placeholder='mail'
                    // autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e)=>setMail(e.target.value)}
                    value={mail}
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    // autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}

                  />
                </div>
              </div>
  
              <div>
                <button
                //   type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={pushLoginButton}
                >
                  Sign in
                </button>
                <p className='p-4 text-red-600'>{alertMessage}</p>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
                <button 
                className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
                onClick={()=>router.push(navigation.signup.href)}>
                    Start a 14 day free trial
                </button>
            </p>
            <button
            onClick={get}
            >
            get
            </button>
          </div>
        </div>

    )
  }
  
