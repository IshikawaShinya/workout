import React from "react";
const PushChangeImage: React.FC<{
    asyncImage: string,
    setAsyncImage: React.Dispatch<React.SetStateAction<string>>;
}
> = ({asyncImage, setAsyncImage}) => {
    async function requestImage():Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => 
            resolve("/next.svg")
            ,1000)
        });
        // return new Error("error");
    };
    async function renderingImage(): Promise<string> {
        try {
            return await requestImage();
        } catch  {
            //エラー画像
            return "/vercel.svg" 
        } finally {
            //待機画像
            "/picture.jpg"
        }
    };
    function asyncRenderingImage(){
        let pathImage: string = ""
        setAsyncImage("./nowloading.jpeg")
        renderingImage()
          .then((Image) => {
            pathImage = Image;
            setAsyncImage(pathImage);
          })
      };
    return(
        <div className="">
            <button
            className='bg-white text-black'
            onClick = {(e) => asyncRenderingImage()}
            >
              push
            </button>
            <img className="h-12 w-32" src={asyncImage} alt="nodejs to nextjs"></img>
        </div>
  
    );
};

export default PushChangeImage;