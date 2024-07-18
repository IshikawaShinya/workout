import React from "react";
import { Interface } from "readline";

interface IProps {
    asyncImage: string,
    setAsyncImage: React.Dispatch<React.SetStateAction<string>>;
}
function requestImage(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => 
        resolve("/next.svg")
        ,1000)
    });
};

const PushChangeImage = (props: IProps) => {
    async function ResponseOfRequestImage(): Promise<string> {
        try {
            return await requestImage();
        } catch  {
            //エラー画像
            return "/vercel.svg"; 
        } finally {
            //待機画像
            return "/picture.jpg";
        };
    };
    function RenderingImage(){
        let pathImage: string = "";
        setAsyncImage("./nowloading.jpeg");
        ResponseOfRequestImage()
        .then((Image) => {
            pathImage = Image;
            setAsyncImage(pathImage);
        });
    };
    const {asyncImage, setAsyncImage} = props
    return(
        <div className="">
            <button
            className='bg-white text-black'
            onClick = {(e) => RenderingImage()}
            >
            push
            </button>
            <img className="h-12 w-32" src={asyncImage} alt="nodejs to nextjs"></img>
        </div>
    );
};

export default PushChangeImage;