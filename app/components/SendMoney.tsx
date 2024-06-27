import { useState } from 'react'

export default function displayMoney(props: {}) {
    const [displayMoney,setdisplayMoney] =useState<string>('')
    const [valueDisplayMoney,setValueDisplayMoney] = useState<string>('')
    const [alertMessage,setAlertMessage] = useState<string>('')
    return(
        <div>
            <input
            placeholder = 'write money'
            className = 'text-black'
            onChange = {e=>setdisplayMoney(e.target.value)}
            value = {displayMoney}
            >
            </input>
            {/*
             決定ボタン */}
            <button
            className = 'rounded bg-white h-5 w-10 text-black'
            onClick = {()=>{
                // complete: 決定を２回押すと、警告文が表示される。stateの更新を図にしよう
                // complete: 文字数カウントをリアルタイムで表示する
                // complete: 条件分岐
                if(displayMoney.length>20){
                    if(/\d+/.test(displayMoney)!==true){
                        setAlertMessage('20文字以内に修正してください.'+'数字のみを入力してください。')
                    } else {
                        setAlertMessage('20文字以内に修正してください.')
                    }
                }else{
                    if(/\d+/.test(displayMoney)!==true){
                        setAlertMessage('数字のみを入力してください。')
                    } else {
                        setAlertMessage('')
                    }
                }
            }}
            >
                決定 
            </button>
            {/* 文字数カウント */}
            <div>
                {displayMoney.length}/20
            </div>
            {/* 警告文 */}
            <div className='text-red h'>
                {alertMessage}
            </div>
        </div>
    )
}